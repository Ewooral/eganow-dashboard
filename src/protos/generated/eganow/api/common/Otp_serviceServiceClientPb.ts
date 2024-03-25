/**
 * @fileoverview gRPC-Web generated client stub for eganow.api.common
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.1
// source: eganow/api/common/otp_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as eganow_api_common_common_pb from '../../../eganow/api/common/common_pb';
import * as eganow_api_common_otp_payload_pb from '../../../eganow/api/common/otp_payload_pb';


export class OtpSvcClient {
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

  methodDescriptorSendOTP = new grpcWeb.MethodDescriptor(
    '/eganow.api.common.OtpSvc/SendOTP',
    grpcWeb.MethodType.UNARY,
    eganow_api_common_otp_payload_pb.SendOTPRequest,
    eganow_api_common_common_pb.CommonStringValue,
    (request: eganow_api_common_otp_payload_pb.SendOTPRequest) => {
      return request.serializeBinary();
    },
    eganow_api_common_common_pb.CommonStringValue.deserializeBinary
  );

  sendOTP(
    request: eganow_api_common_otp_payload_pb.SendOTPRequest,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_common_common_pb.CommonStringValue>;

  sendOTP(
    request: eganow_api_common_otp_payload_pb.SendOTPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_common_common_pb.CommonStringValue) => void): grpcWeb.ClientReadableStream<eganow_api_common_common_pb.CommonStringValue>;

  sendOTP(
    request: eganow_api_common_otp_payload_pb.SendOTPRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_common_common_pb.CommonStringValue) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.common.OtpSvc/SendOTP',
        request,
        metadata || {},
        this.methodDescriptorSendOTP,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.common.OtpSvc/SendOTP',
    request,
    metadata || {},
    this.methodDescriptorSendOTP);
  }

  methodDescriptorVerifyOTP = new grpcWeb.MethodDescriptor(
    '/eganow.api.common.OtpSvc/VerifyOTP',
    grpcWeb.MethodType.UNARY,
    eganow_api_common_otp_payload_pb.VerifyOTPRequest,
    eganow_api_common_common_pb.CommonStringValue,
    (request: eganow_api_common_otp_payload_pb.VerifyOTPRequest) => {
      return request.serializeBinary();
    },
    eganow_api_common_common_pb.CommonStringValue.deserializeBinary
  );

  verifyOTP(
    request: eganow_api_common_otp_payload_pb.VerifyOTPRequest,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_common_common_pb.CommonStringValue>;

  verifyOTP(
    request: eganow_api_common_otp_payload_pb.VerifyOTPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_common_common_pb.CommonStringValue) => void): grpcWeb.ClientReadableStream<eganow_api_common_common_pb.CommonStringValue>;

  verifyOTP(
    request: eganow_api_common_otp_payload_pb.VerifyOTPRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_common_common_pb.CommonStringValue) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.common.OtpSvc/VerifyOTP',
        request,
        metadata || {},
        this.methodDescriptorVerifyOTP,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.common.OtpSvc/VerifyOTP',
    request,
    metadata || {},
    this.methodDescriptorVerifyOTP);
  }

}

