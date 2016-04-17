// Copyright 2011 Fotios Sioutis (sfotis@gmail.com)
//
//This file is part of pythonOCC.
//
//pythonOCC is free software: you can redistribute it and/or modify
//it under the terms of the GNU Lesser General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//pythonOCC is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU Lesser General Public License for more details.
//
//You should have received a copy of the GNU Lesser General Public License
//along with pythonOCC.  If not, see <http://www.gnu.org/licenses/>.

//---------------------------------------------------------------------------
#include "Tesselator.h"
#include <sstream>
#include <algorithm>
//---------------------------------------------------------------------------
#include <TopExp_Explorer.hxx>
#include <Bnd_Box.hxx>
#include <StdPrs_ToolShadedShape.hxx>
#include <BRepMesh.hxx>
#include <Poly_Connect.hxx>
#include <Poly_Triangulation.hxx>
#include <Poly_PolygonOnTriangulation.hxx>
#include <TColgp_Array1OfPnt.hxx>
#include <TColgp_Array1OfDir.hxx>
#include <TColgp_Array1OfPnt2d.hxx>
#include <TopTools_ListOfShape.hxx>
#include <TopTools_IndexedDataMapOfShapeListOfShape.hxx>
#include <TopExp.hxx>
#include <BRepTools.hxx>
#include <BRepBndLib.hxx>
//---------------------------------------------------------------------------

Tesselator::Tesselator(TopoDS_Shape aShape, float aDeviation) :
  //set local variables
  myDeviation(1.),
  myUOrigin(0.),
  myVOrigin(0.),
  myURepeat(1.),
  myVRepeat(1.),
  myScaleU(1.),
  myScaleV(1.),
  myAutoScaleSizeOnU(1.),
  myAutoScaleSizeOnV(1.),
  myTxtMapType(atNormal),
  myShape(aShape),
  myRotationAngle(0.)
{
    locVertexcoord = NULL;
    locNormalcoord = NULL;
    locTexcoord    = NULL;
    // compute default deviation
    ComputeDefaultDeviation(aDeviation);

    TesselateWithUVCoords();
}

//---------------------------------------------------------------------------
Tesselator::~Tesselator()
{
    if (locVertexcoord)
      delete [] locVertexcoord;

    if (locNormalcoord)
      delete [] locNormalcoord;

    if (locTexcoord)
      delete [] locTexcoord;

    for (std::vector<aedge*>::iterator edgeit = edgelist.begin(); edgeit != edgelist.end(); ++edgeit) {
      aedge* edge = *edgeit;
      if (edge) {
        if (edge->vertex_coord)
          delete[] edge->vertex_coord;

        delete edge;
        *edgeit = NULL;
      }
    }
    edgelist.clear();
}

//---------------------------------------------------------------------------
void Tesselator::SetDeviation(Standard_Real aDeviation)
{
    myDeviation = aDeviation;
}


//---------------------------------------------------------------------------
void Tesselator::Tesselate()
{
    TopExp_Explorer       ExpFace;
    StdPrs_ToolShadedShape   SST;

    gp_Dir d;
    gp_Pnt p;

    gp_Vec2d theCoord_p;
    gp_Pnt2d d_coord;

    //Triangulate
    BRepMesh::Mesh(myShape, myDeviation);

    for (ExpFace.Init(myShape, TopAbs_FACE); ExpFace.More(); ExpFace.Next()) {
      const TopoDS_Face&    myFace    = TopoDS::Face(ExpFace.Current());
      TopLoc_Location aLocation;

      Handle(Poly_Triangulation) myT = BRep_Tool::Triangulation(myFace, aLocation);

      if (!myT.IsNull()) {
        Poly_Connect pc(myT);

        aface *this_face = new aface;

        //write vertex buffer
        const TColgp_Array1OfPnt& Nodes = myT->Nodes();
        this_face->vertex_coord = new float[Nodes.Length() * 3];
        this_face->number_of_coords = Nodes.Length();
        for (int i = Nodes.Lower(); i <= Nodes.Upper(); i++) {
          p = Nodes(i).Transformed(aLocation.Transformation());
          this_face->vertex_coord[((i-1) * 3)+ 0] = static_cast<float>(p.X());
          this_face->vertex_coord[((i-1) * 3)+ 1] = static_cast<float>(p.Y());
          this_face->vertex_coord[((i-1) * 3)+ 2] = static_cast<float>(p.Z());
        }

        //write normal buffer
        TColgp_Array1OfDir myNormal(Nodes.Lower(), Nodes.Upper());
        SST.Normal(myFace, pc, myNormal);
        this_face->normal_coord = new float[myNormal.Length() * 3];
        this_face->number_of_normals = myNormal.Length();
        for (int i = myNormal.Lower(); i <= myNormal.Upper(); i++) {
          d = myNormal(i).Transformed(aLocation.Transformation());
          this_face->normal_coord[((i-1) * 3)+ 0] = static_cast<float>(d.X());
          this_face->normal_coord[((i-1) * 3)+ 1] = static_cast<float>(d.Y());
          this_face->normal_coord[((i-1) * 3)+ 2] = static_cast<float>(d.Z());
        }

        // set uvcoords buffers to NULL
        // necessary for JoinPrimitive to be performed
        this_face->tex_coord = NULL;
        this_face->number_of_texcoords = 0;

        //write triangle buffer
        Standard_Integer validFaceTriCount = 0;
        Standard_Integer n1 , n2 , n3;
        TopAbs_Orientation orient = myFace.Orientation();
        const Poly_Array1OfTriangle&   triangles   = myT->Triangles();
        this_face->tri_indexes  = new int  [triangles.Length()* 3];
        for (int nt = 1; nt <= myT->NbTriangles(); nt++) {
          triangles(nt).Get(n1,n2,n3);
          if (orient != TopAbs_FORWARD) {
              Standard_Integer tmp=n1;
              n1 = n2;
              n2 = tmp;
          }
          if (TriangleIsValid(Nodes(n1),Nodes(n2),Nodes(n3))) {
            this_face->tri_indexes[(validFaceTriCount * 3)+ 0] = n1;
            this_face->tri_indexes[(validFaceTriCount * 3)+ 1] = n2;
            this_face->tri_indexes[(validFaceTriCount * 3)+ 2] = n3;
            validFaceTriCount++;
          }
        }
        this_face->number_of_triangles = validFaceTriCount;
        facelist.push_back(this_face);
      }
    }
    JoinPrimitives();
    ComputeEdges();
}

//---------------------------------------------------------------------------
void Tesselator::TesselateWithUVCoords()
{
  Standard_Real Umin;
  Standard_Real Umax;
  Standard_Real Vmin;
  Standard_Real Vmax;

  Standard_Real dUmax;
  Standard_Real dVmax;

  TopExp_Explorer       ExpFace;
  StdPrs_ToolShadedShape   SST;

  gp_Dir d;
  gp_Pnt p;

  gp_Vec2d theCoord_p;
  gp_Pnt2d d_coord;

  //Triangulate
  BRepMesh::Mesh(myShape, myDeviation);

  for (ExpFace.Init(myShape, TopAbs_FACE); ExpFace.More(); ExpFace.Next()) {
    const TopoDS_Face&    myFace    = TopoDS::Face(ExpFace.Current());
    TopLoc_Location aLocation;

    Handle(Poly_Triangulation) myT = BRep_Tool::Triangulation(myFace, aLocation);

    if (!myT.IsNull()) {
      Poly_Connect pc(myT);

      aface *this_face = new aface;

      //write vertex buffer
      const TColgp_Array1OfPnt& Nodes = myT->Nodes();
      this_face->vertex_coord = new float[Nodes.Length() * 3];
      this_face->number_of_coords = Nodes.Length();
      for (int i = Nodes.Lower(); i <= Nodes.Upper(); i++) {
        p = Nodes(i).Transformed(aLocation.Transformation());
        this_face->vertex_coord[((i-1) * 3)+ 0] = static_cast<float>(p.X());
        this_face->vertex_coord[((i-1) * 3)+ 1] = static_cast<float>(p.Y());
        this_face->vertex_coord[((i-1) * 3)+ 2] = static_cast<float>(p.Z());
      }

      //write normal buffer
      TColgp_Array1OfDir myNormal(Nodes.Lower(), Nodes.Upper());
      SST.Normal(myFace, pc, myNormal);
      this_face->normal_coord = new float[myNormal.Length() * 3];
      this_face->number_of_normals = myNormal.Length();
      for (int i = myNormal.Lower(); i <= myNormal.Upper(); i++) {
        d = myNormal(i).Transformed(aLocation.Transformation());
        this_face->normal_coord[((i-1) * 3)+ 0] = static_cast<float>(d.X());
        this_face->normal_coord[((i-1) * 3)+ 1] = static_cast<float>(d.Y());
        this_face->normal_coord[((i-1) * 3)+ 2] = static_cast<float>(d.Z());
      }

      //write uvcoord buffer
      int id1 = 0, id2 = 2, idNull = 1;

      if (myTxtMapType == atNormal || myTxtMapType == atNormalAutoScale) {
        BRepTools::UVBounds(myFace,Umin, Umax, Vmin, Vmax);
        dUmax = (Umax - Umin);
        dVmax = (Vmax - Vmin);
        if (myTxtMapType == atNormalAutoScale) {
          myScaleU = myAutoScaleSizeOnU/dUmax;
          myScaleV = myAutoScaleSizeOnV/dVmax;
        }
      }
      const TColgp_Array1OfPnt2d& UVNodes = myT->UVNodes();
      this_face->tex_coord = new float[UVNodes.Length()  * 3];
      this_face->number_of_texcoords = UVNodes.Length();
      for (int i = UVNodes.Lower(); i <= UVNodes.Upper();i++) {
        if (myTxtMapType == atCube) {
          GetBoxTextureCoordinate(  Nodes(i).Transformed(aLocation.Transformation()),
                                    myNormal(i).Transformed(aLocation.Transformation()),
                                    theCoord_p);
          d_coord.SetX((-myUOrigin+(myURepeat*theCoord_p.X())/aBndBoxSz)/myScaleU);
          d_coord.SetY((-myVOrigin+(myVRepeat*theCoord_p.Y())/aBndBoxSz)/myScaleV);
        }
        else {
          d_coord = UVNodes(i);
          d_coord.SetX((-myUOrigin+(myURepeat*(d_coord.X()-Umin))/dUmax)/myScaleU);
          d_coord.SetY((-myVOrigin+(myVRepeat*(d_coord.Y()-Vmin))/dVmax)/myScaleV);
        }
        d_coord.Rotate(gp::Origin2d(), myRotationAngle);
        this_face->tex_coord[((i-1) * 3)+ id1] = static_cast<float>(d_coord.X());
        this_face->tex_coord[((i-1) * 3)+ id2] = static_cast<float>(d_coord.Y());
        this_face->tex_coord[((i-1) * 3)+ idNull] = 0.;
      }

      //write triangle buffer
      Standard_Integer validFaceTriCount = 0;
      Standard_Integer n1 , n2 , n3;
      TopAbs_Orientation orient = myFace.Orientation();
      const Poly_Array1OfTriangle&   triangles   = myT->Triangles();
      this_face->tri_indexes  = new int  [triangles.Length()* 3];
      for (int nt = 1; nt <= myT->NbTriangles(); nt++) {
        triangles(nt).Get(n1,n2,n3);
        if (orient != TopAbs_FORWARD) {
            Standard_Integer tmp=n1;
            n1 = n2;
            n2 = tmp;
        }
        if (TriangleIsValid(Nodes(n1),Nodes(n2),Nodes(n3))) {
          this_face->tri_indexes[(validFaceTriCount * 3)+ 0] = n1;
          this_face->tri_indexes[(validFaceTriCount * 3)+ 1] = n2;
          this_face->tri_indexes[(validFaceTriCount * 3)+ 2] = n3;
          validFaceTriCount++;
        }
      }
      this_face->number_of_triangles = validFaceTriCount;
      facelist.push_back(this_face);
    }
  }
  JoinPrimitivesWithUVCoords();
  ComputeEdges();
}

//---------------------------INTERFACE---------------------------------------
void Tesselator::ComputeDefaultDeviation(Standard_Real dev)
{
    // This method automatically computes precision from the bounding box of the shape
    Bnd_Box aBox;
    Standard_Real aXmin,aYmin ,aZmin ,aXmax ,aYmax ,aZmax;

    //calculate the bounding box
    BRepBndLib::Add(myShape, aBox);
    aBox.Get(aXmin, aYmin, aZmin, aXmax, aYmax, aZmax);

    Standard_Real xDim = abs((long)aXmax - (long)aXmin);
    Standard_Real yDim = abs((long)aYmax - (long)aYmin);
    Standard_Real zDim = abs((long)aZmax - (long)aZmin);

    Standard_Real adeviation = std::max(aXmax-aXmin, std::max(aYmax-aYmin, aZmax-aZmin)) * dev ;
    myDeviation = adeviation;
}

void Tesselator::ComputeEdges()
{
  TopLoc_Location aTrsf;

  // clear current data
  std::vector<aedge*>::iterator it;
  for (it = edgelist.begin(); it != edgelist.end(); ++it) {
    if (*it) {
      if ((*it)->vertex_coord)
        delete[] (*it)->vertex_coord;

      delete *it;
      *it = NULL;
    }
  }
  edgelist.clear();

  // explore all boundary edges
  TopTools_IndexedDataMapOfShapeListOfShape edgeMap;
  TopExp::MapShapesAndAncestors (myShape, TopAbs_EDGE, TopAbs_FACE, edgeMap);

  for (int iEdge = 1 ; iEdge <= edgeMap.Extent (); iEdge++) {
    // reject free edges
    const TopTools_ListOfShape& faceList = edgeMap.FindFromIndex (iEdge);
    if (faceList.Extent() == 0) {
      continue;
    }

    // take one of the shared edges and get edge triangulation
    const TopoDS_Face& aFace  = TopoDS::Face (faceList.First ());
    const TopoDS_Edge& anEdge = TopoDS::Edge (edgeMap.FindKey (iEdge));

    Handle(Poly_Triangulation) trian = BRep_Tool::Triangulation (aFace, aTrsf);

    if (trian.IsNull ())
      continue;

    Handle(Poly_PolygonOnTriangulation) anEdgePoly =
        BRep_Tool::PolygonOnTriangulation (anEdge, trian, aTrsf);

    if (anEdgePoly.IsNull ()) {
      continue;
    }

    // get edge vertex indexes from face triangulation
    const TColgp_Array1OfPnt& trainVerts = trian->Nodes ();
    const TColStd_Array1OfInteger& edgeVerts = anEdgePoly->Nodes ();

    if (edgeVerts.Length () < 2) {
      continue;
    }

    aedge* theEdge = new aedge;
    theEdge->number_of_coords = edgeVerts.Upper () - edgeVerts.Lower() + 1;
    theEdge->vertex_coord = new float[theEdge->number_of_coords * 3 * sizeof(float)];

    for (int aNodeIdx = edgeVerts.Lower (); aNodeIdx <= edgeVerts.Upper (); aNodeIdx++) {
      // node index in face triangulation
      int aTriIndex = edgeVerts.Value (aNodeIdx);

      // get node and apply location transformation to the node
      gp_Pnt aTriNode = trainVerts.Value (aTriIndex);
      if (!aTrsf.IsIdentity ()) {
        aTriNode.Transform (aTrsf);
      }

      int locIndex = aNodeIdx - edgeVerts.Lower ();
      theEdge->vertex_coord[locIndex*3 + 0] = static_cast<float>(aTriNode.X());
      theEdge->vertex_coord[locIndex*3 + 1] = static_cast<float>(aTriNode.Y());
      theEdge->vertex_coord[locIndex*3 + 2] = static_cast<float>(aTriNode.Z());
    }

    edgelist.push_back(theEdge);
  }
}


std::string Tesselator::exportJSON(){
    std::stringstream res;
    float x;
    float y;
    float z;

    res << "{ \"vertices\": [\n";
    for (int i=0;i<ObjGetVertexCount();i++) {
        GetVertex(i, x, y, z);
        // vertex indices
        res << "  ["  << x << "," << y << "," << z << "]";
        if(i < ObjGetVertexCount() - 1){
          res << ",";
        }
        if(i % 5 == 0 || i == ObjGetVertexCount()){
          res << "\n";
        }
    }
    int a;
    int b;
    int c;
    res << "], \"triangles\": [\n  ";
    for (int i=0;i<ObjGetTriangleCount();i++) {
        GetTriangleIndex(i, a, b, c);
        // vertex indices
        res << "["  << a << "," << b << "," << c << "]";
        if(i < ObjGetTriangleCount() - 1){
          res << ",";
        }
        if(i % 5 == 0 || i == ObjGetVertexCount()){
          res << "\n  ";
        }
    }
    res << "], \"normals\": [\n";
    for (int i=0;i<ObjGetNormalCount();i++) {
        GetNormal(i, x, y, z);
        // vertex indices
        res << "  ["  << x << "," << y << "," << z << "]";
        if(i < ObjGetNormalCount() - 1){
          res << ",";
        }
        if(i % 5 == 0 || i == ObjGetNormalCount()){
          res << "\n";
        }
    }
    res << "] }";
    return res.str();
}

//---------------------------------------------------------------------------
float* Tesselator::VerticesList()
{
  return locVertexcoord;
}
//---------------------------------------------------------------------------
float* Tesselator::NormalsList()
{
  return locNormalcoord;
}
//---------------------------------------------------------------------------
float* Tesselator::TextureCoordinatesList()
{
  return locTexcoord;
}

//---------------------------------------------------------------------------
int Tesselator::ObjGetTriangleCount()
{
  return  tot_triangle_count;
}
//---------------------------------------------------------------------------
int Tesselator::ObjGetVertexCount()
{
  return  tot_vertex_count;
}
//---------------------------------------------------------------------------
int Tesselator::ObjGetNormalCount()
{
  return  tot_normal_count;
}
//---------------------------------------------------------------------------
int Tesselator::ObjGetTexCoordCount()
{
  return  tot_texcoord_count;
}
//---------------------------------------------------------------------------
int Tesselator::ObjGetEdgeCount()
{
  return edgelist.size();
}
//---------------------------------------------------------------------------
int Tesselator::ObjEdgeGetVertexCount(int iEdge)
{
  aedge* edge = edgelist.at(iEdge);
  if (!edge) {
    return 0;
  }

  return edge->number_of_coords;
}
//---------------------------------------------------------------------------
void Tesselator::GetVertex(int ivert, float& x, float& y, float& z)
{
  x = locVertexcoord[ivert*3 + 0];
  y = locVertexcoord[ivert*3 + 1];
  z = locVertexcoord[ivert*3 + 2];
}
//---------------------------------------------------------------------------
void Tesselator::GetNormal(int ivert, float& x, float& y, float& z)
{
  x = locNormalcoord[ivert*3 + 0];
  y = locNormalcoord[ivert*3 + 1];
  z = locNormalcoord[ivert*3 + 2];
}
//---------------------------------------------------------------------------
void Tesselator::GetTriangleIndex(int triangleIdx, int &v1, int &v2, int &v3)
{
  v1 = loc_tri_indexes[3*triangleIdx + 0];
  v2 = loc_tri_indexes[3*triangleIdx + 1];
  v3 = loc_tri_indexes[3*triangleIdx + 2];
}
//---------------------------------------------------------------------------
void Tesselator::GetEdgeVertex(int iEdge, int ivert, float &x, float &y, float &z)
{
  aedge* e = edgelist.at(iEdge);
  if (!e) {
    return;
  }

  x = e->vertex_coord[3*ivert + 0];
  y = e->vertex_coord[3*ivert + 1];
  z = e->vertex_coord[3*ivert + 2];
}
//---------------------------------------------------------------------------
void Tesselator::ObjGetTriangle(int trianglenum, int *vertices, int *texcoords, int *normals)
{
  int pID = loc_tri_indexes[(trianglenum * 3) + 0] * 3;
  int qID = loc_tri_indexes[(trianglenum * 3) + 1] * 3;
  int rID = loc_tri_indexes[(trianglenum * 3) + 2] * 3;

  vertices[0] = pID;
  vertices[1] = qID;
  vertices[2] = rID;

  normals[0] = pID;
  normals[1] = qID;
  normals[2] = rID;

  texcoords[0] = pID;
  texcoords[1] = qID;
  texcoords[2] = rID;
}
//---------------------------------------------------------------------------
//---------------------------------HELPERS-----------------------------------
//---------------------------------------------------------------------------
void Tesselator::JoinPrimitives()
{
  int obP = 0;
  int obN = 0;
  int obT = 0;
  int obTR = 0;

  int advance = 0;

  int total_poly_count = 0;
  int total_vertex_count = 0;
  int total_normal_count = 0;

  std::vector<aface*>::iterator anIterator = facelist.begin();

  while (anIterator != facelist.end()) {

    aface* myface = *anIterator;

    total_poly_count =  total_poly_count + myface->number_of_triangles;
    total_vertex_count = total_vertex_count + myface->number_of_coords;
    total_normal_count = total_normal_count + myface->number_of_normals;

    anIterator++;
  }

  loc_tri_indexes= new int[total_poly_count * 3 ];
  locVertexcoord = new float[total_vertex_count * 3 ];
  locNormalcoord = new float[total_normal_count * 3 ];

  tot_triangle_count = total_poly_count;
  tot_vertex_count   = total_vertex_count;
  tot_normal_count   = total_normal_count;

  anIterator = facelist.begin();
  while (anIterator != facelist.end()) {
    aface* myface = *anIterator;
    for (int x = 0; x < myface->number_of_coords; x++) {
      locVertexcoord[(obP * 3) + 0] = myface->vertex_coord[(x * 3) + 0];
      locVertexcoord[(obP * 3) + 1] = myface->vertex_coord[(x * 3) + 1];
      locVertexcoord[(obP * 3) + 2] = myface->vertex_coord[(x * 3) + 2];
      obP++;
    }

    for (int x = 0; x < myface->number_of_normals; x++) {
      locNormalcoord[(obN * 3) + 0] = myface->normal_coord[(x * 3) + 0];
      locNormalcoord[(obN * 3) + 1] = myface->normal_coord[(x * 3) + 1];
      locNormalcoord[(obN * 3) + 2] = myface->normal_coord[(x * 3) + 2];
      obN++;
    }

    for (int x = 0; x < myface->number_of_triangles; x++) {
      loc_tri_indexes[(obTR * 3) + 0] = myface->tri_indexes[(x * 3) + 0] + advance - 1;
      loc_tri_indexes[(obTR * 3) + 1] = myface->tri_indexes[(x * 3) + 1] + advance - 1;
      loc_tri_indexes[(obTR * 3) + 2] = myface->tri_indexes[(x * 3) + 2] + advance - 1;
      obTR++;
    }

    advance = obP;

    delete [] myface->vertex_coord;
    myface->vertex_coord = NULL;

    delete [] myface->normal_coord;
    myface->normal_coord = NULL;

    delete [] myface->tri_indexes;
    myface->tri_indexes = NULL;

    delete myface;
    myface = NULL;

    anIterator++;
  }
}

void Tesselator::JoinPrimitivesWithUVCoords()
{
  int obP = 0;
  int obN = 0;
  int obT = 0;
  int obTR = 0;

  int advance = 0;

  int total_poly_count = 0;
  int total_vertex_count = 0;
  int total_normal_count = 0;
  int total_texcoord_count = 0;

  std::vector<aface*>::iterator anIterator = facelist.begin();

  while (anIterator != facelist.end()) {

    aface* myface = *anIterator;

    total_poly_count =  total_poly_count + myface->number_of_triangles;
    total_vertex_count = total_vertex_count + myface->number_of_coords;
    total_normal_count = total_normal_count + myface->number_of_normals;
    total_texcoord_count = total_texcoord_count + myface->number_of_texcoords;

    anIterator++;
  }

  loc_tri_indexes= new int[total_poly_count * 3 ];
  locVertexcoord = new float[total_vertex_count * 3 ];
  locNormalcoord = new float[total_normal_count * 3 ];
  locTexcoord    = new float[total_texcoord_count * 3 ];

  tot_triangle_count = total_poly_count;
  tot_vertex_count   = total_vertex_count;
  tot_normal_count   = total_normal_count;
  tot_texcoord_count = total_texcoord_count;
  anIterator = facelist.begin();
  while (anIterator != facelist.end()) {
    aface* myface = *anIterator;
    for (int x = 0; x < myface->number_of_coords; x++) {
      locVertexcoord[(obP * 3) + 0] = myface->vertex_coord[(x * 3) + 0];
      locVertexcoord[(obP * 3) + 1] = myface->vertex_coord[(x * 3) + 1];
      locVertexcoord[(obP * 3) + 2] = myface->vertex_coord[(x * 3) + 2];
      obP++;
    }

    for (int x = 0; x < myface->number_of_normals; x++) {
      locNormalcoord[(obN * 3) + 0] = myface->normal_coord[(x * 3) + 0];
      locNormalcoord[(obN * 3) + 1] = myface->normal_coord[(x * 3) + 1];
      locNormalcoord[(obN * 3) + 2] = myface->normal_coord[(x * 3) + 2];
      obN++;
    }

    for (int x = 0; x < myface->number_of_texcoords; x++) {
      locTexcoord[(obT * 3) + 0] = myface->tex_coord[(x * 3) + 0];
      locTexcoord[(obT * 3) + 1] = myface->tex_coord[(x * 3) + 1];
      locTexcoord[(obT * 3) + 2] = myface->tex_coord[(x * 3) + 2];
      obT++;
    }

    for (int x = 0; x < myface->number_of_triangles; x++) {
      loc_tri_indexes[(obTR * 3) + 0] = myface->tri_indexes[(x * 3) + 0] + advance - 1;
      loc_tri_indexes[(obTR * 3) + 1] = myface->tri_indexes[(x * 3) + 1] + advance - 1;
      loc_tri_indexes[(obTR * 3) + 2] = myface->tri_indexes[(x * 3) + 2] + advance - 1;
      obTR++;
    }

    advance = obP;

    delete [] myface->vertex_coord;
    myface->vertex_coord = NULL;

    delete [] myface->normal_coord;
    myface->normal_coord = NULL;

    delete [] myface->tex_coord;
    myface->tex_coord = NULL;

    delete [] myface->tri_indexes;
    myface->tri_indexes = NULL;

    delete myface;
    myface = NULL;

    anIterator++;
  }
}

//---------------------------------------------------------------------------
Standard_Boolean Tesselator::TriangleIsValid(const gp_Pnt& P1, const gp_Pnt& P2, const gp_Pnt& P3) const
{
  gp_Vec V1(P1,P2);
  gp_Vec V2(P2,P3);
  gp_Vec V3(P3,P1);

  if ((V1.SquareMagnitude() > 1.e-10) && (V2.SquareMagnitude() > 1.e-10) && (V3.SquareMagnitude() > 1.e-10)) {
    V1.Cross(V2);
    if (V1.SquareMagnitude() > 1.e-10)
      return Standard_True;
    else
      return Standard_False;
  }
  else
    return Standard_False;
}

//---------------------------------------------------------------------------
void Tesselator::PrepareBoxTextureCoordinates(const TopoDS_Shape& aShape)
{
  //declare local variables
  Bnd_Box aBox;
  Standard_Real aXmin,aYmin ,aZmin ,aXmax ,aYmax ,aZmax;

  //calculate the bounding box
  BRepBndLib::Add(aShape, aBox);
  aBox.Get(aXmin, aYmin, aZmin, aXmax, aYmax, aZmax);

  //enlarge the bb so all edges have the size of the biggest one
  Standard_Real xDim = abs((long)aXmax - (long)aXmin);
  Standard_Real yDim = abs((long)aYmax - (long)aYmin);
  Standard_Real zDim = abs((long)aZmax - (long)aZmin);

  if ((xDim > yDim) && (xDim > zDim)) {
    aYmin -= (xDim - yDim) / 2;
    aYmax += (xDim - yDim) / 2;

    aZmin -= (xDim - zDim) / 2;
    aZmax += (xDim - zDim) / 2;
  }
  else if ((yDim > xDim) && (yDim > zDim)) {
    aXmin -= (yDim - xDim) / 2;
    aXmax += (yDim - xDim) / 2;

    aZmin -= (yDim - zDim) / 2;
    aZmax += (yDim - zDim) / 2;
  }
  else {
    aXmin -= (zDim - xDim) / 2;
    aXmax += (zDim - xDim) / 2;

    aYmin -= (zDim - yDim) / 2;
    aYmax += (zDim - yDim) / 2;
  }

  aBndBoxSz = aXmax-aXmin;
}

//---------------------------------------------------------------------------
void Tesselator::GetBoxTextureCoordinate(const gp_Pnt& p, const gp_Dir& N1, gp_Vec2d& theCoord_p)
{
  Standard_Real x = abs(N1.X());
  Standard_Real y = abs(N1.Y());
  Standard_Real z = abs(N1.Z());

  if (x >= y && x >= z) {
    if (N1.X() > 0) { //right
      theCoord_p.SetX(p.Y() - aYmin);
      theCoord_p.SetY(p.Z() - aZmin);
      theCoord_p.Rotate(M_PI/2.);
    }
    else { //left
      theCoord_p.SetX(p.Z() - aZmin);
      theCoord_p.SetY(p.Y() - aYmin);
    }
  }
  else if ((y >= z) && (y >= x)) {
    if (N1.Y() > 0) { //top
      theCoord_p.SetX(p.X() - aXmin);
      theCoord_p.SetY(-(p.Z() - aZmin));
    }
    else { //bottom
      theCoord_p.SetY(p.Z() - aZmin);
      theCoord_p.SetX(p.X() - aXmin);
      theCoord_p.Rotate( M_PI);
    }
  }
  else {
    if (N1.Z() > 0) {  //front
      theCoord_p.SetX(p.X() - aXmin);
      theCoord_p.SetY(p.Y() - aYmin);
    }
    else { //back
      theCoord_p.SetX(p.Y() - aYmin);
      theCoord_p.SetY(p.X() - aXmin);
      theCoord_p.Rotate(M_PI/2.);
    }
  }
}
