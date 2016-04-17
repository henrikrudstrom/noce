#pragma once
#include "OCC.h"
#include "NodeV8.h"

void ReadDouble(const v8::Handle<v8::Value>& _v,double& value);

int ReadInt(v8::Handle<v8::Object> obj,const char* name,int defaultValue);
double ReadDouble(v8::Handle<v8::Object> obj,const char* name,double defaultValue=0.0);

void ReadPropertyPointFromArray(v8::Handle<v8::Array> value,double* x,double* y, double*z );
// void ReadPropertyPoint( Handle<Object> value,const char* name,double* x,double* y, double*z );

void ReadXYZ(v8::Handle<v8::Object> value,double* x,double* y,double* z);
void ReadUVW(v8::Handle<v8::Object> value,double* x,double* y,double* z);

void ReadPoint(v8::Local<v8::Value> value,double* x,double* y, double*z);
void ReadPoint(v8::Local<v8::Value> value,gp_Pnt* pt);
void ReadDir(v8::Local<v8::Value> value,gp_Dir* pt);
void ReadVector(v8::Local<v8::Value> value,gp_Vec* pt);

void ReadRotationFromArgs(_NAN_METHOD_ARGS,gp_Trsf& trans);


enum ArrayType {
  A_Byte, A_Int16, A_UInt16, A_Int32, A_UInt32, A_Float32, A_Float64
};

inline const char* ArrayTypeToString(ArrayType type) {
  const char* name = 0;
  switch (type) {
  case A_Byte:    name = "Uint8Array";   break;
  case A_Int16:   name = "Int16Array";   break;
  case A_UInt16:  name = "Uint16Array";  break;
  case A_Int32:   name = "Int32Array";   break;
  case A_UInt32:  name = "Uint32Array";  break;
  case A_Float32: name = "Float32Array"; break;
  case A_Float64: name = "Float64Array"; break;
  default:
    name = 0;
  }
  return name;
}
inline int ArrayTypeSize(ArrayType type) {

  switch (type) {
  case A_Byte:    return 1;  break;
  case A_Int16:   return 2;  break;
  case A_UInt16:  return 2;  break;
  case A_Int32:   return 4;   break;
  case A_UInt32:  return 4;  break;
  case A_Float32: return 4; break;
  case A_Float64: return 8; break;
  default:
    return 0;
  }
}

inline v8::Local<v8::Value> makeArrayBuffer(int length) {

  v8::Local<v8::Object> global = Nan::GetCurrentContext()->Global();
  v8::Local<v8::Value> val;
  // make ArrayBuffer
  val = global->Get(Nan::New("ArrayBuffer").ToLocalChecked());

  if (val.IsEmpty() || !val->IsFunction()) {
    Nan::ThrowError("Error getting ArrayBuffer constructor");
    return val;
  }

  v8::Local<v8::Function> constructor = val.As<v8::Function>();
  v8::Local<v8::Value> size = Nan::New<v8::Integer>(length);
  v8::Local<v8::Value> array_buffer = constructor->NewInstance(1, &size);
  return array_buffer;
}

#define IS_FLOAT32ARRAY(value)               (value->IsFloat32Array() && (value.As<v8::Float32Array>()->Length() == 2))
#define GET_FLOAT32ARRAY_DATA(value)         (float*)(static_cast<char*>(value.As<v8::Float32Array>()->Buffer()->GetContents().Data()) + value.As<v8::Float32Array>()->ByteOffset())
#define IS_FLOAT32ARRAY_ARRAY(value)         (value->IsFloat32Array() && ((value.As<v8::Float32Array>()->Length() % 2) == 0))
#define GET_FLOAT32ARRAY_ARRAY_DATA(value)   GET_FLOAT32ARRAY_DATA(value)
#define GET_FLOAT32ARRAY_ARRAY_LENGTH(value) (value.As<v8::Float32Array>()->Length())


#define IS_INT32ARRAY(value)                (value->IsInt32Array() && (value.As<v8::Int32Array>()->Length() == 2))
#define GET_INT32ARRAY_DATA(value)          (int*)(static_cast<char*>(value.As<v8::Int32Array>()->Buffer()->GetContents().Data()) + value.As<v8::Int32Array>()->ByteOffset())
#define IS_INT32ARRAY_ARRAY(value)          (value->IsInt32Array() && ((value.As<v8::Int32Array>()->Length() % 2) == 0))
#define GET_INT32ARRAY_ARRAY_DATA(value)    GET_INT32ARRAY_DATA(value)
#define GET_INT32ARRAY_ARRAY_LENGTH(value)  (value.As<v8::Int32Array>()->Length())

#define IS_UINT32ARRAY(value)               (value->IsUint32Array() && (value.As<v8::Uint32Array>()->Length() == 2))
#define GET_UINT32ARRAY_DATA(value)         (unsigned int*)(static_cast<char*>(value.As<v8::Uint32Array>()->Buffer()->GetContents().Data()) + value.As<v8::Uint32Array>()->ByteOffset())
#define IS_UINT32ARRAY_ARRAY(value)         (value->IsUint32Array() && ((value.As<v8::Uint32Array>()->Length() % 2) == 0))
#define GET_UINT32ARRAY_ARRAY_DATA(value)   GET_UINT32ARRAY_DATA(value)
#define GET_UINT32ARRAY_ARRAY_LENGTH(value) (value.As<v8::Uint32Array>()->Length())


inline v8::Local<v8::Object> makeTypedArray(ArrayType type, unsigned int length) {

  v8::Local<v8::Value> val;
  v8::Local<v8::Function> constructor;
  v8::Local<v8::Object> global = Nan::GetCurrentContext()->Global();

  const char *name = ArrayTypeToString(type);
  if (!name) {
    Nan::ThrowError("Unsupported array type");
    return v8::Local<v8::Object>();
  }
  v8::Local<v8::Value> typedArrayConstructor = global->Get(Nan::New(name).ToLocalChecked());

  if (typedArrayConstructor.IsEmpty() || !typedArrayConstructor->IsFunction()) {
    Nan::ThrowError("Error getting typed array constructor");
    return v8::Local<v8::Object>();
  }

  constructor = typedArrayConstructor.As<v8::Function>();

  const int argc = 1;
  v8::Local<v8::Value> argv[1] = { Nan::New(length) };
  v8::Local<v8::Object> array = constructor->NewInstance(argc, argv);

  if (array.IsEmpty() || !array->IsObject()) {
    Nan::ThrowError("Error creating TypedArray");
    return v8::Local<v8::Object>();
  }
  return array;
}


inline v8::Local<v8::Object> makeFloat32Array(const float* data, int length) {
  v8::Local<v8::Object> array = makeTypedArray(A_Float32, length);
  float* dest = GET_FLOAT32ARRAY_ARRAY_DATA(array);
  memcpy(dest, data, length * sizeof(data[0]));
  return array;
}
inline v8::Local<v8::Object> makeInt32Array(const int* data, int length) {
  v8::Local<v8::Object> array = makeTypedArray(A_Int32, length);
  int* dest = GET_INT32ARRAY_ARRAY_DATA(array);
  memcpy(dest, data, length * sizeof(data[0]));
  return array;
}
inline v8::Local<v8::Object> makeUint32Array(const unsigned int* data, int length) {
  v8::Local<v8::Object> array = makeTypedArray(A_UInt32, length);
  unsigned int* dest = GET_UINT32ARRAY_ARRAY_DATA(array);
  memcpy(dest, data, length * sizeof(data[0]));
  return array;
}


inline v8::Local<v8::Object> _makeTypedArray(const float* data, int length) {
  return makeFloat32Array(data, length);
}
inline v8::Local<v8::Object> _makeTypedArray(const int* data, int length) {
  return makeInt32Array(data, length);
}
inline v8::Local<v8::Object> _makeTypedArray(const unsigned int* data, int length) {
  return makeUint32Array(data, length);
}
