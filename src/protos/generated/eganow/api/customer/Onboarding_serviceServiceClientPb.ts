/**
 * @fileoverview gRPC-Web generated client stub for eganow.api.customer
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.0-rc2
// source: eganow/api/customer/onboarding_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as eganow_api_customer_onboarding_payload_pb from '../../../eganow/api/customer/onboarding_payload_pb';
import * as eganow_api_customer_common_pb from '../../../eganow/api/customer/common_pb';


export class CustomerOnboardingSvcClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateCustomerAccount = new grpcWeb.MethodDescriptor(
    '/eganow.api.customer.CustomerOnboardingSvc/CreateCustomerAccount',
    grpcWeb.MethodType.UNARY,
    eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
    eganow_api_customer_common_pb.CustomerStringValue,
    (request: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest) => {
      return request.serializeBinary();
    },
    eganow_api_customer_common_pb.CustomerStringValue.deserializeBinary
  );

  createCustomerAccount(
    request: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_customer_common_pb.CustomerStringValue>;

  createCustomerAccount(
    request: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_customer_common_pb.CustomerStringValue) => void): grpcWeb.ClientReadableStream<eganow_api_customer_common_pb.CustomerStringValue>;

  createCustomerAccount(
    request: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_customer_common_pb.CustomerStringValue) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.customer.CustomerOnboardingSvc/CreateCustomerAccount',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.customer.CustomerOnboardingSvc/CreateCustomerAccount',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerAccount);
  }

  methodDescriptorLoginCustomer = new grpcWeb.MethodDescriptor(
    '/eganow.api.customer.CustomerOnboardingSvc/LoginCustomer',
    grpcWeb.MethodType.UNARY,
    eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
    eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse,
    (request: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest) => {
      return request.serializeBinary();
    },
    eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse.deserializeBinary
  );

  loginCustomer(
    request: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse>;

  loginCustomer(
    request: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse) => void): grpcWeb.ClientReadableStream<eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse>;

  loginCustomer(
    request: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.customer.CustomerOnboardingSvc/LoginCustomer',
        request,
        metadata || {},
        this.methodDescriptorLoginCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.customer.CustomerOnboardingSvc/LoginCustomer',
    request,
    metadata || {},
    this.methodDescriptorLoginCustomer);
  }

  methodDescriptorCheckIfCustomerAccountExist = new grpcWeb.MethodDescriptor(
    '/eganow.api.customer.CustomerOnboardingSvc/CheckIfCustomerAccountExist',
    grpcWeb.MethodType.UNARY,
    eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
    eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse,
    (request: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest) => {
      return request.serializeBinary();
    },
    eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse.deserializeBinary
  );

  checkIfCustomerAccountExist(
    request: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse>;

  checkIfCustomerAccountExist(
    request: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse) => void): grpcWeb.ClientReadableStream<eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse>;

  checkIfCustomerAccountExist(
    request: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.customer.CustomerOnboardingSvc/CheckIfCustomerAccountExist',
        request,
        metadata || {},
        this.methodDescriptorCheckIfCustomerAccountExist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.customer.CustomerOnboardingSvc/CheckIfCustomerAccountExist',
    request,
    metadata || {},
    this.methodDescriptorCheckIfCustomerAccountExist);
  }

}

