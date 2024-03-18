// source: eganow/api/customer/customer_entity.proto
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

goog.exportSymbol('proto.eganow.api.customer.CustomerAuthType', null, global);
/**
 * @enum {number}
 */
proto.eganow.api.customer.CustomerAuthType = {
  CUSTOMER_AUTH_TYPE_UNKNOWN: 0,
  CUSTOMER_AUTH_TYPE_PASSWORD: 1,
  CUSTOMER_AUTH_TYPE_PIN: 2,
  CUSTOMER_AUTH_TYPE_HASHED_PIN: 3
};

goog.object.extend(exports, proto.eganow.api.customer);
