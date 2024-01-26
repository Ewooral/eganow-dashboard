/**
 * @fileoverview gRPC-Web generated client stub for MerchantAccount
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.0-rc2
// source: MerchantAccount.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as MerchantAccount_pb from './MerchantAccount_pb';


export class MerchantAccountSvcClient {
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

  methodDescriptorCreateMerchantApplicationWithOneServiceAndPackages = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/CreateMerchantApplicationWithOneServiceAndPackages',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantWithServiceAndPackageRequestMessage,
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant,
    (request: MerchantAccount_pb.PayPartnerMerchantWithServiceAndPackageRequestMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant.deserializeBinary
  );

  createMerchantApplicationWithOneServiceAndPackages(
    request: MerchantAccount_pb.PayPartnerMerchantWithServiceAndPackageRequestMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  createMerchantApplicationWithOneServiceAndPackages(
    request: MerchantAccount_pb.PayPartnerMerchantWithServiceAndPackageRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  createMerchantApplicationWithOneServiceAndPackages(
    request: MerchantAccount_pb.PayPartnerMerchantWithServiceAndPackageRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/CreateMerchantApplicationWithOneServiceAndPackages',
        request,
        metadata || {},
        this.methodDescriptorCreateMerchantApplicationWithOneServiceAndPackages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CreateMerchantApplicationWithOneServiceAndPackages',
    request,
    metadata || {},
    this.methodDescriptorCreateMerchantApplicationWithOneServiceAndPackages);
  }

  methodDescriptorCreateMerchantServiceAndPackages = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/CreateMerchantServiceAndPackages',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.MerchantServiceWithPackagesRequestMessage,
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant,
    (request: MerchantAccount_pb.MerchantServiceWithPackagesRequestMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant.deserializeBinary
  );

  createMerchantServiceAndPackages(
    request: MerchantAccount_pb.MerchantServiceWithPackagesRequestMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  createMerchantServiceAndPackages(
    request: MerchantAccount_pb.MerchantServiceWithPackagesRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  createMerchantServiceAndPackages(
    request: MerchantAccount_pb.MerchantServiceWithPackagesRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/CreateMerchantServiceAndPackages',
        request,
        metadata || {},
        this.methodDescriptorCreateMerchantServiceAndPackages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CreateMerchantServiceAndPackages',
    request,
    metadata || {},
    this.methodDescriptorCreateMerchantServiceAndPackages);
  }

  methodDescriptorGetEganowModulesForMerchantsAll = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetEganowModulesForMerchantsAll',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    MerchantAccount_pb.EganowModuleListRequestMessage,
    (request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.EganowModuleListRequestMessage.deserializeBinary
  );

  getEganowModulesForMerchantsAll(
    request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.EganowModuleListRequestMessage>;

  getEganowModulesForMerchantsAll(
    request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.EganowModuleListRequestMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.EganowModuleListRequestMessage>;

  getEganowModulesForMerchantsAll(
    request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.EganowModuleListRequestMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetEganowModulesForMerchantsAll',
        request,
        metadata || {},
        this.methodDescriptorGetEganowModulesForMerchantsAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetEganowModulesForMerchantsAll',
    request,
    metadata || {},
    this.methodDescriptorGetEganowModulesForMerchantsAll);
  }

  methodDescriptorGetMerchantServiceCategoryPerModule = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetMerchantServiceCategoryPerModule',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.EganowModuleRequestMessage,
    MerchantAccount_pb.MerchantServiceCategoryListResponseMessage,
    (request: MerchantAccount_pb.EganowModuleRequestMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.MerchantServiceCategoryListResponseMessage.deserializeBinary
  );

  getMerchantServiceCategoryPerModule(
    request: MerchantAccount_pb.EganowModuleRequestMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.MerchantServiceCategoryListResponseMessage>;

  getMerchantServiceCategoryPerModule(
    request: MerchantAccount_pb.EganowModuleRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.MerchantServiceCategoryListResponseMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.MerchantServiceCategoryListResponseMessage>;

  getMerchantServiceCategoryPerModule(
    request: MerchantAccount_pb.EganowModuleRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.MerchantServiceCategoryListResponseMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetMerchantServiceCategoryPerModule',
        request,
        metadata || {},
        this.methodDescriptorGetMerchantServiceCategoryPerModule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetMerchantServiceCategoryPerModule',
    request,
    metadata || {},
    this.methodDescriptorGetMerchantServiceCategoryPerModule);
  }

  methodDescriptorGetPayPartnerServicesListByMerchantId = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByMerchantId',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerServiceRequestMessage,
    MerchantAccount_pb.PayPartnerServicesListResponseMessage,
    (request: MerchantAccount_pb.PayPartnerServiceRequestMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.PayPartnerServicesListResponseMessage.deserializeBinary
  );

  getPayPartnerServicesListByMerchantId(
    request: MerchantAccount_pb.PayPartnerServiceRequestMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.PayPartnerServicesListResponseMessage>;

  getPayPartnerServicesListByMerchantId(
    request: MerchantAccount_pb.PayPartnerServiceRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.PayPartnerServicesListResponseMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.PayPartnerServicesListResponseMessage>;

  getPayPartnerServicesListByMerchantId(
    request: MerchantAccount_pb.PayPartnerServiceRequestMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.PayPartnerServicesListResponseMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByMerchantId',
        request,
        metadata || {},
        this.methodDescriptorGetPayPartnerServicesListByMerchantId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByMerchantId',
    request,
    metadata || {},
    this.methodDescriptorGetPayPartnerServicesListByMerchantId);
  }

  methodDescriptorGetPayPartnerServicesListByJwt = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByJwt',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    MerchantAccount_pb.PayPartnerServicesListResponseMessage,
    (request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.PayPartnerServicesListResponseMessage.deserializeBinary
  );

  getPayPartnerServicesListByJwt(
    request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.PayPartnerServicesListResponseMessage>;

  getPayPartnerServicesListByJwt(
    request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.PayPartnerServicesListResponseMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.PayPartnerServicesListResponseMessage>;

  getPayPartnerServicesListByJwt(
    request: MerchantAccount_pb.PayPartnerMerchantEmptyMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.PayPartnerServicesListResponseMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByJwt',
        request,
        metadata || {},
        this.methodDescriptorGetPayPartnerServicesListByJwt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByJwt',
    request,
    metadata || {},
    this.methodDescriptorGetPayPartnerServicesListByJwt);
  }

  methodDescriptorGetPayPartnerInfoByJwt = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetPayPartnerInfoByJwt',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    MerchantAccount_pb.PayPartnerMerchantModelMessage,
    (request: MerchantAccount_pb.PayPartnerMerchantCountryMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.PayPartnerMerchantModelMessage.deserializeBinary
  );

  getPayPartnerInfoByJwt(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.PayPartnerMerchantModelMessage>;

  getPayPartnerInfoByJwt(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.PayPartnerMerchantModelMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.PayPartnerMerchantModelMessage>;

  getPayPartnerInfoByJwt(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.PayPartnerMerchantModelMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetPayPartnerInfoByJwt',
        request,
        metadata || {},
        this.methodDescriptorGetPayPartnerInfoByJwt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerInfoByJwt',
    request,
    metadata || {},
    this.methodDescriptorGetPayPartnerInfoByJwt);
  }

  methodDescriptorUpdatePayPartnerMerchant = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/UpdatePayPartnerMerchant',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantModelForUpdateMessage,
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant,
    (request: MerchantAccount_pb.PayPartnerMerchantModelForUpdateMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant.deserializeBinary
  );

  updatePayPartnerMerchant(
    request: MerchantAccount_pb.PayPartnerMerchantModelForUpdateMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  updatePayPartnerMerchant(
    request: MerchantAccount_pb.PayPartnerMerchantModelForUpdateMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  updatePayPartnerMerchant(
    request: MerchantAccount_pb.PayPartnerMerchantModelForUpdateMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/UpdatePayPartnerMerchant',
        request,
        metadata || {},
        this.methodDescriptorUpdatePayPartnerMerchant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/UpdatePayPartnerMerchant',
    request,
    metadata || {},
    this.methodDescriptorUpdatePayPartnerMerchant);
  }

  methodDescriptorGetPayRegulators = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetPayRegulators',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    MerchantAccount_pb.RegulatorsListRequestMessage,
    (request: MerchantAccount_pb.PayPartnerMerchantCountryMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.RegulatorsListRequestMessage.deserializeBinary
  );

  getPayRegulators(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.RegulatorsListRequestMessage>;

  getPayRegulators(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.RegulatorsListRequestMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.RegulatorsListRequestMessage>;

  getPayRegulators(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.RegulatorsListRequestMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetPayRegulators',
        request,
        metadata || {},
        this.methodDescriptorGetPayRegulators,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayRegulators',
    request,
    metadata || {},
    this.methodDescriptorGetPayRegulators);
  }

  methodDescriptorCheckIfMerchantAccountExist = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/CheckIfMerchantAccountExist',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant,
    (request: MerchantAccount_pb.PayPartnerMerchantCountryMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.SuccessMessagePayPartnerMerchant.deserializeBinary
  );

  checkIfMerchantAccountExist(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  checkIfMerchantAccountExist(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.SuccessMessagePayPartnerMerchant>;

  checkIfMerchantAccountExist(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.SuccessMessagePayPartnerMerchant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/CheckIfMerchantAccountExist',
        request,
        metadata || {},
        this.methodDescriptorCheckIfMerchantAccountExist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CheckIfMerchantAccountExist',
    request,
    metadata || {},
    this.methodDescriptorCheckIfMerchantAccountExist);
  }

  methodDescriptorGetMerchantServices = new grpcWeb.MethodDescriptor(
    '/MerchantAccount.MerchantAccountSvc/GetMerchantServices',
    grpcWeb.MethodType.UNARY,
    MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    MerchantAccount_pb.MerchantServicesListMessage,
    (request: MerchantAccount_pb.PayPartnerMerchantCountryMessage) => {
      return request.serializeBinary();
    },
    MerchantAccount_pb.MerchantServicesListMessage.deserializeBinary
  );

  getMerchantServices(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null): Promise<MerchantAccount_pb.MerchantServicesListMessage>;

  getMerchantServices(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.MerchantServicesListMessage) => void): grpcWeb.ClientReadableStream<MerchantAccount_pb.MerchantServicesListMessage>;

  getMerchantServices(
    request: MerchantAccount_pb.PayPartnerMerchantCountryMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: MerchantAccount_pb.MerchantServicesListMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/MerchantAccount.MerchantAccountSvc/GetMerchantServices',
        request,
        metadata || {},
        this.methodDescriptorGetMerchantServices,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetMerchantServices',
    request,
    metadata || {},
    this.methodDescriptorGetMerchantServices);
  }

}

