import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class MediaUploadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MediaUploadRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): MediaUploadRequest;

  getType(): MediaUploadRequest.MediaType;
  setType(value: MediaUploadRequest.MediaType): MediaUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MediaUploadRequest): MediaUploadRequest.AsObject;
  static serializeBinaryToWriter(message: MediaUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaUploadRequest;
  static deserializeBinaryFromReader(message: MediaUploadRequest, reader: jspb.BinaryReader): MediaUploadRequest;
}

export namespace MediaUploadRequest {
  export type AsObject = {
    name: string,
    data: Uint8Array | string,
    type: MediaUploadRequest.MediaType,
  }

  export enum MediaType { 
    MEDIA_TYPE_UNSPECIFIED = 0,
    MEDIA_TYPE_IMAGE = 1,
    MEDIA_TYPE_VIDEO = 2,
    MEDIA_TYPE_DOCUMENT = 3,
  }
}

