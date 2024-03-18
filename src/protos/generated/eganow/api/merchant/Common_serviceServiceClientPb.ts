/**
 * @fileoverview gRPC-Web generated client stub for eganow.api.merchant
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.0-rc2
// source: eganow/api/merchant/common_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as eganow_api_merchant_common_payload_pb from '../../../eganow/api/merchant/common_payload_pb';
import * as eganow_api_merchant_common_pb from '../../../eganow/api/merchant/common_pb';


export class MerchantCommonSvcClient {
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

  methodDescriptorGetActiveRegulators = new grpcWeb.MethodDescriptor(
    '/eganow.api.merchant.MerchantCommonSvc/GetActiveRegulators',
    grpcWeb.MethodType.UNARY,
    eganow_api_merchant_common_pb.MerchantEmpty,
    eganow_api_merchant_common_payload_pb.MerchantRegulatorList,
    (request: eganow_api_merchant_common_pb.MerchantEmpty) => {
      return request.serializeBinary();
    },
    eganow_api_merchant_common_payload_pb.MerchantRegulatorList.deserializeBinary
  );

  getActiveRegulators(
    request: eganow_api_merchant_common_pb.MerchantEmpty,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_merchant_common_payload_pb.MerchantRegulatorList>;

  getActiveRegulators(
    request: eganow_api_merchant_common_pb.MerchantEmpty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_merchant_common_payload_pb.MerchantRegulatorList) => void): grpcWeb.ClientReadableStream<eganow_api_merchant_common_payload_pb.MerchantRegulatorList>;

  getActiveRegulators(
    request: eganow_api_merchant_common_pb.MerchantEmpty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_merchant_common_payload_pb.MerchantRegulatorList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.merchant.MerchantCommonSvc/GetActiveRegulators',
        request,
        metadata || {},
        this.methodDescriptorGetActiveRegulators,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.merchant.MerchantCommonSvc/GetActiveRegulators',
    request,
    metadata || {},
    this.methodDescriptorGetActiveRegulators);
  }

  methodDescriptorGetBusinessSectors = new grpcWeb.MethodDescriptor(
    '/eganow.api.merchant.MerchantCommonSvc/GetBusinessSectors',
    grpcWeb.MethodType.UNARY,
    eganow_api_merchant_common_pb.MerchantEmpty,
    eganow_api_merchant_common_payload_pb.MerchantBusinessSectorList,
    (request: eganow_api_merchant_common_pb.MerchantEmpty) => {
      return request.serializeBinary();
    },
    eganow_api_merchant_common_payload_pb.MerchantBusinessSectorList.deserializeBinary
  );

  getBusinessSectors(
    request: eganow_api_merchant_common_pb.MerchantEmpty,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_merchant_common_payload_pb.MerchantBusinessSectorList>;

  getBusinessSectors(
    request: eganow_api_merchant_common_pb.MerchantEmpty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_merchant_common_payload_pb.MerchantBusinessSectorList) => void): grpcWeb.ClientReadableStream<eganow_api_merchant_common_payload_pb.MerchantBusinessSectorList>;

  getBusinessSectors(
    request: eganow_api_merchant_common_pb.MerchantEmpty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_merchant_common_payload_pb.MerchantBusinessSectorList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.merchant.MerchantCommonSvc/GetBusinessSectors',
        request,
        metadata || {},
        this.methodDescriptorGetBusinessSectors,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.merchant.MerchantCommonSvc/GetBusinessSectors',
    request,
    metadata || {},
    this.methodDescriptorGetBusinessSectors);
  }

  methodDescriptorGetActiveIndustries = new grpcWeb.MethodDescriptor(
    '/eganow.api.merchant.MerchantCommonSvc/GetActiveIndustries',
    grpcWeb.MethodType.UNARY,
    eganow_api_merchant_common_pb.MerchantStringValue,
    eganow_api_merchant_common_payload_pb.MerchantIndustryList,
    (request: eganow_api_merchant_common_pb.MerchantStringValue) => {
      return request.serializeBinary();
    },
    eganow_api_merchant_common_payload_pb.MerchantIndustryList.deserializeBinary
  );

  getActiveIndustries(
    request: eganow_api_merchant_common_pb.MerchantStringValue,
    metadata: grpcWeb.Metadata | null): Promise<eganow_api_merchant_common_payload_pb.MerchantIndustryList>;

  getActiveIndustries(
    request: eganow_api_merchant_common_pb.MerchantStringValue,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: eganow_api_merchant_common_payload_pb.MerchantIndustryList) => void): grpcWeb.ClientReadableStream<eganow_api_merchant_common_payload_pb.MerchantIndustryList>;

  getActiveIndustries(
    request: eganow_api_merchant_common_pb.MerchantStringValue,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: eganow_api_merchant_common_payload_pb.MerchantIndustryList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/eganow.api.merchant.MerchantCommonSvc/GetActiveIndustries',
        request,
        metadata || {},
        this.methodDescriptorGetActiveIndustries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/eganow.api.merchant.MerchantCommonSvc/GetActiveIndustries',
    request,
    metadata || {},
    this.methodDescriptorGetActiveIndustries);
  }

}

