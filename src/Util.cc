#include "Util.h"

#include "vector"

using namespace std;


void ReadPropertyPointFromArray(v8::Handle<v8::Array> arr, double* x, double* y, double*z)
{
  //    Local<Object> obj = value->ToObject();
  //    Handle<Array> art = Handle<Array>::Cast(obj);
  int length = arr->Length();
  // int length = obj->Get(String::New("length"))->ToObject()->Uint32Value();

  if (length >= 1) {
    *x = arr->Get(0)->NumberValue();
  }
  if (length >= 2) {
    *y = arr->Get(1)->NumberValue();
  }
  if (length >= 3) {
    *z = arr->Get(2)->NumberValue();
  }

}


//void ReadPropertyPoint(Handle<Object> obj,const char* name,double* x,double* y, double*z )
//{
//  if (!obj.IsEmpty()) {
//    // for exemple a THREE.Vector3
//    // ( we try to read the "x","y","z" property )
//    Handle<Value> v = obj->Get(String::New(name));
//    return ReadPropertyPointFromArray(v->ToObject(),x,y,z);
//  }
//  //xx if (obj->IsArray()) {
//  //xx   ReadPropertyPointFromArray(value,x,y,z);
//  //xx }
//}

void ReadDouble(const v8::Handle<v8::Value>& _v, double& value)
{
  if (_v->IsNumber()) {
    value = _v->ToNumber()->Value();
  }
}
double ReadDouble(v8::Handle<v8::Object> value, const char* name, double defaultValue)
{
  Nan::EscapableHandleScope scope;
  v8::Local<v8::Value> _v = value->ToObject()->Get(Nan::New(name).ToLocalChecked());
  ReadDouble(_v, defaultValue);
  return defaultValue;
}

int ReadInt(v8::Handle<v8::Object> value, const char* name, int defaultValue)
{
  Nan::EscapableHandleScope scope;
  v8::Local<v8::Value> _v = value->ToObject()->Get(Nan::New(name).ToLocalChecked());
  return _v->ToInteger()->ToInt32()->Value();
}

void ReadXYZ(v8::Handle<v8::Object> obj, double* x, double* y, double* z)
{
  *x = ReadDouble(obj, "x", 0.0);
  *y = ReadDouble(obj, "y", 0.0);
  *z = ReadDouble(obj, "z", 0.0);
}

void ReadPoint(v8::Local<v8::Value> value, double* x, double* y, double*z)
{
  if (value->IsArray()) {
    v8::Handle<v8::Array> arr = v8::Handle<v8::Array>::Cast(value);
    ReadPropertyPointFromArray(arr, x, y, z);
    return;
  }
  if (value->IsObject()) {
    // object must have x,y,z property set
    v8::Handle<v8::Object> obj = v8::Handle<v8::Object>::Cast(value);
    ReadXYZ(obj, x, y, z);
    return;
  }
}

void ReadUVW(v8::Handle<v8::Object> obj, double* x, double* y, double* z)
{
  *x = ReadDouble(obj, "u", 0.0);
  *y = ReadDouble(obj, "v", 0.0);
  *z = ReadDouble(obj, "w", 0.0);
}


void ReadPoint(v8::Local<v8::Value> value, gp_Pnt* pt)
{
  double x = 0, y = 0, z = 0;
  ReadPoint(value, &x, &y, &z);
  pt->SetCoord(x, y, z);
}
void ReadDir(v8::Local<v8::Value> value, gp_Dir* pt)
{
  double x = 0, y = 0, z = 0;
  ReadPoint(value, &x, &y, &z);
  pt->SetCoord(x, y, z);
}
void ReadVector(v8::Local<v8::Value> value, gp_Vec* pt)
{
  double x = 0, y = 0, z = 0;
  ReadPoint(value, &x, &y, &z);
  pt->SetCoord(x, y, z);
}

void ReadRotationFromArgs(_NAN_METHOD_ARGS, gp_Trsf& trans)
{

  double x = 0, y = 0, z = 0;
  ReadPoint(info[0], &x, &y, &z);

  double u = 0, v = 0, w = 0;
  ReadPoint(info[1], &u, &v, &w);

  double angle = info[2]->NumberValue();

  trans.SetRotation(gp_Ax1(gp_Pnt(x, y, z), gp_Dir(u, v, w)), angle / 180.0*M_PI);
}
