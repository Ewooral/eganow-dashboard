// source: eganow/api/payment/payment_entity.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
goog.exportSymbol('proto.eganow.api.payment.EgaPayTransactionStatus', null, global);
goog.exportSymbol('proto.eganow.api.payment.EgaPayTransactionType', null, global);
/**
 * @enum {number}
 */
proto.eganow.api.payment.EgaPayTransactionStatus = {
  PENDING: 0,
  SUCCESSFUL: 1,
  FAILED: 2
};

/**
 * @enum {number}
 */
proto.eganow.api.payment.EgaPayTransactionType = {
  DR: 0,
  CR: 1
};

goog.object.extend(exports, proto.eganow.api.payment);
