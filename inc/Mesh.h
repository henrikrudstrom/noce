#pragma once
//#include "NodeV8.h"
#include <vector>

#include <TopoDS.hxx>
#include <TopoDS_Edge.hxx>
#include <TopoDS_Wire.hxx>
#include <TopoDS_Face.hxx>
#include <Poly_Triangulation.hxx>
#include <Poly_Connect.hxx>
#include <Poly_PolygonOnTriangulation.hxx>
#include <Poly_Array1OfTriangle.hxx>
#include <Handle_Geom_Surface.hxx>
#include <GeomAPI_ProjectPointOnSurf.hxx>
#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <gp_Dir.hxx>
#include <BRep_Tool.hxx>
#include <TopExp_Explorer.hxx>
#include <TopAbs.hxx>
#include <TColStd_Array1OfInteger.hxx>
#include <Standard_Failure.hxx>
#include <Handle_Standard_Failure.hxx>
#include <TColgp_Array1OfPnt.hxx>
#include <Standard_Real.hxx>
#include <Standard_Integer.hxx>
#include <Standard_Boolean.hxx>
#include <StdFail_NotDone.hxx>
#include <GeomLProp_SLProps.hxx>

struct Coord3f {
    float x;
    float y;
    float z;
};
struct Triangle3i {
    int i;
    int j;
    int k;
};
class Mesh  {
public:
    Mesh();
    int extractFaceMesh(const TopoDS_Face& face, bool qualityNormals);
    void optimize();

    // static NAN_METHOD(New);

    // static void Init(v8::Handle<v8::Object> target);



    std::vector<Coord3f> normals;
    std::vector<Coord3f> vertices;
    std::vector<Triangle3i> triangles;
    std::vector<unsigned int> edgeindices;
    std::vector<int> edgeranges;
    std::vector<int> edgehash;
    friend class MeshOptimizer;

    //static Nan::Persistent<v8::FunctionTemplate> _template;
    int32_t numTriangles()  {
        return  (int32_t) triangles.size();
    }
    int32_t numVertices()  {
        return (int32_t)vertices.size();
    }
    int32_t numNormals()  {
        return (int32_t)normals.size();
    }
    int32_t numEdges()  {
        return (int32_t)edgeindices.size();
    }

    void setErrorMessage(const char* message) {};

};
