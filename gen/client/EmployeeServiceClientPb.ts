/**
 * @fileoverview gRPC-Web generated client stub for employee
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as employee_pb from './employee_pb';


export class EmployeeServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    employee_pb.ListResponse,
    (request: employee_pb.ListRequest) => {
      return request.serializeBinary();
    },
    employee_pb.ListResponse.deserializeBinary
  );

  list(
    request: employee_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<employee_pb.ListResponse>;

  list(
    request: employee_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: employee_pb.ListResponse) => void): grpcWeb.ClientReadableStream<employee_pb.ListResponse>;

  list(
    request: employee_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: employee_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/employee.EmployeeService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/employee.EmployeeService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

}

