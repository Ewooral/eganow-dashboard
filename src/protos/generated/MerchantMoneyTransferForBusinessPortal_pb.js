// source: MerchantMoneyTransferForBusinessPortal.proto
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

goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage', null, global);
goog.exportSymbol('proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.displayName = 'proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentEmptyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    countrycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string countryCode = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentCountryMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    countrycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string countryCode = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PayPartnerServiceId = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    messagesuccessfulorfailed: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    registrationerrorcode: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans;
  return proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagesuccessfulorfailed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationerrorcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessagesuccessfulorfailed();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegistrationerrorcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool isSuccess = 1;
 * @return {boolean}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string messageSuccessfulOrFailed = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.getMessagesuccessfulorfailed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.setMessagesuccessfulorfailed = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string registrationErrorCode = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.getRegistrationerrorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.SuccessMessageMerchantTrans.prototype.setRegistrationerrorcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationpaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destinationaccountno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationaccountname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 100, 0.0),
    sourcepaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sourceaccountno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sourceaccountname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    mobileorweborussd: jspb.Message.getFieldWithDefault(msg, 7, ""),
    originatingpaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    transreference: jspb.Message.getFieldWithDefault(msg, 9, ""),
    merchanttransrefnoinmerchantsystem: jspb.Message.getFieldWithDefault(msg, 10, ""),
    merchantuniqueidinmerchantsystem: jspb.Message.getFieldWithDefault(msg, 11, ""),
    merchantcolumnonevalue: jspb.Message.getFieldWithDefault(msg, 12, ""),
    merchantcolumntwovalue: jspb.Message.getFieldWithDefault(msg, 13, ""),
    merchantcolumnthreevalue: jspb.Message.getFieldWithDefault(msg, 14, ""),
    iscolumnonerequiredyesnona: jspb.Message.getFieldWithDefault(msg, 15, ""),
    iscolumntworequiredyesnona: jspb.Message.getFieldWithDefault(msg, 16, ""),
    iscolumnthreerequiredyesnona: jspb.Message.getFieldWithDefault(msg, 17, ""),
    sendercountrycode: jspb.Message.getFieldWithDefault(msg, 40, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 41, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationpaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationaccountno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationaccountname(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcepaypartnerserviceid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobileorweborussd(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginatingpaypartnerserviceid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransreference(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchanttransrefnoinmerchantsystem(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantuniqueidinmerchantsystem(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcolumnonevalue(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcolumntwovalue(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcolumnthreevalue(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setIscolumnonerequiredyesnona(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setIscolumntworequiredyesnona(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setIscolumnthreerequiredyesnona(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendercountrycode(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationpaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationaccountno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationaccountname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      100,
      f
    );
  }
  f = message.getSourcepaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSourceaccountno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSourceaccountname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMobileorweborussd();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOriginatingpaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTransreference();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMerchanttransrefnoinmerchantsystem();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMerchantuniqueidinmerchantsystem();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMerchantcolumnonevalue();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMerchantcolumntwovalue();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMerchantcolumnthreevalue();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getIscolumnonerequiredyesnona();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getIscolumntworequiredyesnona();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIscolumnthreerequiredyesnona();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getSendercountrycode();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string destinationPayPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getDestinationpaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setDestinationpaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destinationAccountNo = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getDestinationaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setDestinationaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destinationAccountName = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getDestinationaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setDestinationaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double transAmount = 100;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 100, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 100, value);
};


/**
 * optional string sourcePayPartnerServiceId = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getSourcepaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setSourcepaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sourceAccountNo = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getSourceaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setSourceaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string sourceAccountName = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getSourceaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setSourceaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string mobileOrWebOrUSSD = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getMobileorweborussd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setMobileorweborussd = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string originatingPayPartnerServiceId = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getOriginatingpaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setOriginatingpaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string transReference = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getTransreference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setTransreference = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string merchantTransRefNoInMerchantSystem = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getMerchanttransrefnoinmerchantsystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setMerchanttransrefnoinmerchantsystem = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string merchantUniqueIdInMerchantSystem = 11;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getMerchantuniqueidinmerchantsystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setMerchantuniqueidinmerchantsystem = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string merchantColumnOneValue = 12;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getMerchantcolumnonevalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setMerchantcolumnonevalue = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string merchantColumnTwoValue = 13;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getMerchantcolumntwovalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setMerchantcolumntwovalue = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string merchantColumnThreeValue = 14;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getMerchantcolumnthreevalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setMerchantcolumnthreevalue = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string isColumnOneRequiredYesNoNa = 15;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getIscolumnonerequiredyesnona = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setIscolumnonerequiredyesnona = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string isColumnTwoRequiredYesNoNa = 16;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getIscolumntworequiredyesnona = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setIscolumntworequiredyesnona = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string isColumnThreeRequiredYesNoNa = 17;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getIscolumnthreerequiredyesnona = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setIscolumnthreerequiredyesnona = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string senderCountryCode = 40;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getSendercountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setSendercountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional string beneficiaryCountryCode = 41;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.BillPaymentTransRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    merchanttransrefno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partnerserviceid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchanttransrefno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerserviceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMerchanttransrefno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string merchantTransRefNo = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.prototype.getMerchanttransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.prototype.setMerchanttransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PartnerServiceId = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.prototype.getPartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusRequestMessage.prototype.setPartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    transactionstatus: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionstatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTransactionstatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool isSuccess = 1;
 * @return {boolean}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string transactionStatus = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.getTransactionstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.setTransactionstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.TransStatusResponseMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dashboardname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    availablebalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    paypartnerservicename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDashboardname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvailablebalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicename(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDashboardname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvailablebalance();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPaypartnerservicename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string accountNo = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.getAccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.setAccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dashboardName = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.getDashboardname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.setDashboardname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double availableBalance = 3;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.getAvailablebalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.setAvailablebalance = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string payPartnerServiceName = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.getPaypartnerservicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.setPaypartnerservicename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string currencyISO = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    balancelistList: jspb.Message.toObjectList(msg.getBalancelistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.deserializeBinaryFromReader);
      msg.addBalancelist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalancelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantServiceAccountBalMessage balanceList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.prototype.getBalancelistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.prototype.setBalancelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.prototype.addBalancelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceAccountBalListMessage.prototype.clearBalancelistList = function() {
  return this.setBalancelistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    partnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    collectionorpayout: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    todate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionorpayout(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromdate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTodate(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCollectionorpayout();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromdate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTodate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string partnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.getPartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.setPartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string collectionOrPayout = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.getCollectionorpayout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.setCollectionorpayout = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fromDate = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.getFromdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.setFromdate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string toDate = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.getTodate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.setTodate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string countryCode = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransRequestMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paypartnerservicename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    paypartnerid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 5, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaypartnerservicename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaypartnerid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string payPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payPartnerServiceName = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.getPaypartnerservicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.setPaypartnerservicename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string payPartnerId = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.getPaypartnerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.setPaypartnerid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string currencyIso = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string countryCode = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceslistList: jspb.Message.toObjectList(msg.getPaypartnerserviceslistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.deserializeBinaryFromReader);
      msg.addPaypartnerserviceslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantServicesResponseMessage payPartnerServicesList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.prototype.getPaypartnerserviceslistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.prototype.setPaypartnerserviceslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.prototype.addPaypartnerserviceslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesResponseMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServicesListResponseMessage.prototype.clearPaypartnerserviceslistList = function() {
  return this.setPaypartnerserviceslistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuedate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    commissionamt: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    merchantcollectionorpayout: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paypartnerservicename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    merchanttransrefnoinmerchantsystem: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sourceaccountno: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sourceaccountname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    recipientaccountno: jspb.Message.getFieldWithDefault(msg, 10, ""),
    recipientname: jspb.Message.getFieldWithDefault(msg, 11, ""),
    gatewaytranstatus: jspb.Message.getFieldWithDefault(msg, 12, ""),
    eganowtranstatus: jspb.Message.getFieldWithDefault(msg, 13, ""),
    transstatussenttomerchantpendingconfirmed: jspb.Message.getFieldWithDefault(msg, 14, ""),
    eganowtransrefno: jspb.Message.getFieldWithDefault(msg, 15, ""),
    transtimes: jspb.Message.getFieldWithDefault(msg, 20, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuedate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommissionamt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcollectionorpayout(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicename(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchanttransrefnoinmerchantsystem(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountno(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientaccountno(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientname(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewaytranstatus(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEganowtranstatus(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransstatussenttomerchantpendingconfirmed(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setEganowtransrefno(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranstimes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuedate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getCommissionamt();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getMerchantcollectionorpayout();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaypartnerservicename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMerchanttransrefnoinmerchantsystem();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSourceaccountno();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSourceaccountname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRecipientaccountno();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRecipientname();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getGatewaytranstatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEganowtranstatus();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTransstatussenttomerchantpendingconfirmed();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEganowtransrefno();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getTranstimes();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string valueDate = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getValuedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setValuedate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currencyISO = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double transAmount = 3;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double commissionAmt = 4;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getCommissionamt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setCommissionamt = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string merchantCollectionOrPayout = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getMerchantcollectionorpayout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setMerchantcollectionorpayout = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payPartnerServiceName = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getPaypartnerservicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setPaypartnerservicename = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string merchantTransRefNoInMerchantSystem = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getMerchanttransrefnoinmerchantsystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setMerchanttransrefnoinmerchantsystem = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sourceAccountNo = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getSourceaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setSourceaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string sourceAccountName = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getSourceaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setSourceaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string recipientAccountNo = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getRecipientaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setRecipientaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string recipientName = 11;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getRecipientname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setRecipientname = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string gatewayTranStatus = 12;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getGatewaytranstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setGatewaytranstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string eganowTranStatus = 13;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getEganowtranstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setEganowtranstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string transStatusSentToMerchantPendingConfirmed = 14;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getTransstatussenttomerchantpendingconfirmed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setTransstatussenttomerchantpendingconfirmed = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string eganowTransRefNo = 15;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getEganowtransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setEganowtransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string transTimes = 20;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.getTranstimes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.prototype.setTranstimes = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    translistList: jspb.Message.toObjectList(msg.getTranslistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.deserializeBinaryFromReader);
      msg.addTranslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantServiceTransMessage transList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.prototype.getTranslistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.prototype.setTranslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.prototype.addTranslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceTransListMessage.prototype.clearTranslistList = function() {
  return this.setTranslistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuedate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    balance: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    drcr: jspb.Message.getFieldWithDefault(msg, 6, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mainorfeeortransfer: jspb.Message.getFieldWithDefault(msg, 8, ""),
    eganowtransrefno: jspb.Message.getFieldWithDefault(msg, 9, ""),
    mainOrReversal: jspb.Message.getFieldWithDefault(msg, 10, ""),
    merchanttransrefnoinmerchantsystem: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tid: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    transnarration: jspb.Message.getFieldWithDefault(msg, 21, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuedate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBalance(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrcr(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainorfeeortransfer(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEganowtransrefno(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainOrReversal(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchanttransrefnoinmerchantsystem(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTid(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuedate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getDrcr();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMainorfeeortransfer();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEganowtransrefno();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMainOrReversal();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMerchanttransrefnoinmerchantsystem();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTid();
  if (f !== 0.0) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
};


/**
 * optional string valueDate = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getValuedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setValuedate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string AccountName = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double TransAmount = 4;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double balance = 5;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setBalance = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string drCr = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getDrcr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setDrcr = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string CurrencyIso = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string MainOrFeeOrTransfer = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getMainorfeeortransfer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setMainorfeeortransfer = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string EganowTransRefNo = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getEganowtransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setEganowtransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Main_Or_Reversal = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getMainOrReversal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setMainOrReversal = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string MerchantTransRefNoInMerchantSystem = 11;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getMerchanttransrefnoinmerchantsystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setMerchanttransrefnoinmerchantsystem = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional double tid = 20;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getTid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setTid = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional string transNarration = 21;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    statementlistList: jspb.Message.toObjectList(msg.getStatementlistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.deserializeBinaryFromReader);
      msg.addStatementlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatementlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantServiceStatementResponseMessage statementList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.prototype.getStatementlistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.prototype.setStatementlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.prototype.addStatementlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementResponseMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantServiceStatementListResponseMessage.prototype.clearStatementlistList = function() {
  return this.setStatementlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cashortransfertype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    transnarration: jspb.Message.getFieldWithDefault(msg, 4, ""),
    mobileorweborussd: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paypartnerservicecountrycode: jspb.Message.getFieldWithDefault(msg, 50, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCashortransfertype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobileorweborussd(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicecountrycode(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCashortransfertype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMobileorweborussd();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaypartnerservicecountrycode();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string payPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cashOrTransferType = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getCashortransfertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setCashortransfertype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double transAmount = 3;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string transNarration = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string mobileOrWebOrUSSD = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getMobileorweborussd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setMobileorweborussd = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payPartnerServicecountryCode = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getPaypartnerservicecountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setPaypartnerservicecountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantInternalFundTransferInitRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paypartnerservicecountrycode: jspb.Message.getFieldWithDefault(msg, 50, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicecountrycode(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaypartnerservicecountrycode();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string payPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payPartnerServicecountryCode = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.getPaypartnerservicecountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.setPaypartnerservicecountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferPendingRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    makedate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cashortransfertype: jspb.Message.getFieldWithDefault(msg, 5, ""),
    transstatus: jspb.Message.getFieldWithDefault(msg, 6, ""),
    makerid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 8, ""),
    journalrefno: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCashortransfertype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransstatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setJournalrefno(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMakedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCashortransfertype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTransstatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMakerid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getJournalrefno();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string payPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currencyIso = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double transAmount = 3;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string makeDate = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getMakedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setMakedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cashOrTransferType = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getCashortransfertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setCashortransfertype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string transStatus = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getTransstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setTransstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string makerId = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getMakerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setMakerid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string countryCode = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string journalRefNo = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.getJournalrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.prototype.setJournalrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    translistList: jspb.Message.toObjectList(msg.getTranslistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.deserializeBinaryFromReader);
      msg.addTranslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantFundTransferTransResponseMessage transList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.prototype.getTranslistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.prototype.setTranslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.prototype.addTranslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransResponseMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransListResponseMessage.prototype.clearTranslistList = function() {
  return this.setTranslistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paypartnerservicecountrycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    journalreferrenceno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicecountrycode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJournalreferrenceno(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaypartnerservicecountrycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJournalreferrenceno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string payPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payPartnerServicecountryCode = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.getPaypartnerservicecountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.setPaypartnerservicecountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string JournalReferrenceNo = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.getJournalreferrenceno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.setJournalreferrenceno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferApprovalRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paypartnerservicecountrycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    journalreferrenceno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    collection1Payout2: jspb.Message.getFieldWithDefault(msg, 4, 0),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicecountrycode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJournalreferrenceno(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCollection1Payout2(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaypartnerservicecountrycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJournalreferrenceno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCollection1Payout2();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string payPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payPartnerServicecountryCode = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.getPaypartnerservicecountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.setPaypartnerservicecountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string JournalReferrenceNo = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.getJournalreferrenceno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.setJournalreferrenceno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 collection1_payout2 = 4;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.getCollection1Payout2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.setCollection1Payout2 = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantTransRetryRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    beneficiarypaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beneficiarytranscurrecyiso: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    canuserchangeamountyesno: jspb.Message.getFieldWithDefault(msg, 6, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 7, ""),
    transnarration: jspb.Message.getFieldWithDefault(msg, 8, ""),
    paymenlinktype: jspb.Message.getFieldWithDefault(msg, 9, ""),
    noofdaystoexpire: jspb.Message.getFieldWithDefault(msg, 10, 0),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerserviceid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarytranscurrecyiso(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanuserchangeamountyesno(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymenlinktype(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoofdaystoexpire(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeneficiarypaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeneficiarytranscurrecyiso();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getCanuserchangeamountyesno();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPaymenlinktype();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNoofdaystoexpire();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string beneficiaryPayPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getBeneficiarypaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setBeneficiarypaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string beneficiaryTransCurrecyIso = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getBeneficiarytranscurrecyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setBeneficiarytranscurrecyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double transAmount = 5;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string canUserChangeAmountYesNo = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getCanuserchangeamountyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setCanuserchangeamountyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string beneficiaryCountryCode = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string transNarration = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string paymenlinkType = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getPaymenlinktype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setPaymenlinktype = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 noOfdaysToExpire = 10;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getNoofdaystoexpire = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setNoofdaystoexpire = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string LanguageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    messagesuccessfulorfailed: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    paymentbylinktransrefno: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagesuccessfulorfailed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentbylinktransrefno(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessagesuccessfulorfailed();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPaymentbylinktransrefno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool isSuccess = 1;
 * @return {boolean}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string messageSuccessfulOrFailed = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.getMessagesuccessfulorfailed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.setMessagesuccessfulorfailed = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string paymentByLinkTransRefNo = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.getPaymentbylinktransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkInitailTransDataResponseMessage.prototype.setPaymentbylinktransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    beneficiarypaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beneficiaryaccountno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    beneficiaryaccountname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    senderpaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccountnoorcardnumber: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccountname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    merchanttransrefno: jspb.Message.getFieldWithDefault(msg, 8, ""),
    transnarration: jspb.Message.getFieldWithDefault(msg, 9, ""),
    sendercountrycode: jspb.Message.getFieldWithDefault(msg, 10, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    sendertranscurrecyiso: jspb.Message.getFieldWithDefault(msg, 12, ""),
    beneficiarytranscurrecyiso: jspb.Message.getFieldWithDefault(msg, 13, ""),
    merchantcustomerguid: jspb.Message.getFieldWithDefault(msg, 15, ""),
    paymentbylinktransrefno: jspb.Message.getFieldWithDefault(msg, 16, ""),
    customermobilenumber: jspb.Message.getFieldWithDefault(msg, 20, ""),
    customeremailaddress: jspb.Message.getFieldWithDefault(msg, 21, ""),
    expirydatemonth: jspb.Message.getFieldWithDefault(msg, 30, 0),
    expirydateyear: jspb.Message.getFieldWithDefault(msg, 31, 0),
    cvv: jspb.Message.getFieldWithDefault(msg, 32, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiaryaccountno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiaryaccountname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderpaypartnerserviceid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountnoorcardnumber(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchanttransrefno(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendercountrycode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendertranscurrecyiso(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarytranscurrecyiso(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcustomerguid(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentbylinktransrefno(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomermobilenumber(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomeremailaddress(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpirydatemonth(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpirydateyear(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setCvv(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeneficiarypaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeneficiaryaccountno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBeneficiaryaccountname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSenderpaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccountnoorcardnumber();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccountname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMerchanttransrefno();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSendercountrycode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSendertranscurrecyiso();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getBeneficiarytranscurrecyiso();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMerchantcustomerguid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getPaymentbylinktransrefno();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCustomermobilenumber();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCustomeremailaddress();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getExpirydatemonth();
  if (f !== 0) {
    writer.writeInt32(
      30,
      f
    );
  }
  f = message.getExpirydateyear();
  if (f !== 0) {
    writer.writeInt32(
      31,
      f
    );
  }
  f = message.getCvv();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string beneficiaryPayPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getBeneficiarypaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setBeneficiarypaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string beneficiaryAccountNo = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getBeneficiaryaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setBeneficiaryaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string beneficiaryAccountName = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getBeneficiaryaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setBeneficiaryaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double transAmount = 4;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string senderPayPartnerServiceId = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getSenderpaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setSenderpaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string senderAccountNoOrCardNumber = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getSenderaccountnoorcardnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setSenderaccountnoorcardnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string senderAccountName = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getSenderaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setSenderaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string MerchantTransRefNo = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getMerchanttransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setMerchanttransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string TransNarration = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string senderCountryCode = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getSendercountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setSendercountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string beneficiaryCountryCode = 11;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string senderTransCurrecyIso = 12;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getSendertranscurrecyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setSendertranscurrecyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string beneficiaryTransCurrecyIso = 13;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getBeneficiarytranscurrecyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setBeneficiarytranscurrecyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string merchantCustomerGuid = 15;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getMerchantcustomerguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setMerchantcustomerguid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string paymentByLinkTransRefNo = 16;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getPaymentbylinktransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setPaymentbylinktransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string customerMobileNumber = 20;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getCustomermobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setCustomermobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string customerEmailAddress = 21;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getCustomeremailaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setCustomeremailaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional int32 expiryDateMonth = 30;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getExpirydatemonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setExpirydatemonth = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional int32 expiryDateYear = 31;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getExpirydateyear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setExpirydateyear = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional string cvv = 32;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getCvv = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setCvv = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    messagesuccessfulorfailed: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    registrationerrorcode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    eganowtransrefno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cardredirectthreedsurl: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagesuccessfulorfailed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationerrorcode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEganowtransrefno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardredirectthreedsurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessagesuccessfulorfailed();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegistrationerrorcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEganowtransrefno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCardredirectthreedsurl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bool isSuccess = 1;
 * @return {boolean}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string messageSuccessfulOrFailed = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.getMessagesuccessfulorfailed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.setMessagesuccessfulorfailed = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string registrationErrorCode = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.getRegistrationerrorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.setRegistrationerrorcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string eganowTransRefNo = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.getEganowtransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.setEganowtransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cardRedirectThreeDsUrl = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.getCardredirectthreedsurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentByLinkTransResponseMessage.prototype.setCardredirectthreedsurl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentbylinktransrefno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentbylinktransrefno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentbylinktransrefno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string paymentByLinkTransRefNo = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.getPaymentbylinktransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.setPaymentbylinktransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string beneficiaryCountryCode = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    paymentbylinktransrefno: jspb.Message.getFieldWithDefault(msg, 10, ""),
    beneficiarypaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    beneficiarypaypartnerservicename: jspb.Message.getFieldWithDefault(msg, 12, ""),
    beneficiarytranscurrecyiso: jspb.Message.getFieldWithDefault(msg, 15, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    canuserchangeamountyesno: jspb.Message.getFieldWithDefault(msg, 17, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 18, ""),
    transnarration: jspb.Message.getFieldWithDefault(msg, 20, ""),
    merchantcustomerguid: jspb.Message.getFieldWithDefault(msg, 21, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentbylinktransrefno(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerserviceid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerservicename(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarytranscurrecyiso(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanuserchangeamountyesno(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcustomerguid(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentbylinktransrefno();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getBeneficiarypaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBeneficiarypaypartnerservicename();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getBeneficiarytranscurrecyiso();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getCanuserchangeamountyesno();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getMerchantcustomerguid();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional bool isSuccess = 1;
 * @return {boolean}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string paymentByLinkTransRefNo = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getPaymentbylinktransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setPaymentbylinktransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string beneficiaryPayPartnerServiceId = 11;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getBeneficiarypaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setBeneficiarypaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string beneficiaryPayPartnerServiceName = 12;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getBeneficiarypaypartnerservicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setBeneficiarypaypartnerservicename = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string beneficiaryTransCurrecyIso = 15;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getBeneficiarytranscurrecyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setBeneficiarytranscurrecyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional double transAmount = 16;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional string canUserChangeAmountYesNo = 17;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getCanuserchangeamountyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setCanuserchangeamountyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string beneficiaryCountryCode = 18;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string transNarration = 20;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string merchantCustomerGuid = 21;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getMerchantcustomerguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setMerchantcustomerguid = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MechantPaymentInitialTransDataResponseMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sendingcurrencycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    beneficiarycurrencycode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    merchantcustomerguid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendingcurrencycode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycurrencycode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcustomerguid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendingcurrencycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBeneficiarycurrencycode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMerchantcustomerguid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string beneficiaryCountryCode = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sendingCurrencyCode = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.getSendingcurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.setSendingcurrencycode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string beneficiaryCurrencyCode = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.getBeneficiarycurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.setBeneficiarycurrencycode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string merchantCustomerGuid = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.getMerchantcustomerguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerPaymentSourceAccountsRequestMessage.prototype.setMerchantcustomerguid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceaccountname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceaccountno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    paypartnerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    paypartnertypeid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    paypartnerservicename: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paypartnergroupname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 8, ""),
    displaysourceaccountno: jspb.Message.getFieldWithDefault(msg, 9, ""),
    sourceaccountstatus: jspb.Message.getFieldWithDefault(msg, 10, ""),
    paypartnergroupcode: jspb.Message.getFieldWithDefault(msg, 11, 0),
    logourl: jspb.Message.getFieldWithDefault(msg, 30, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypartnertypeid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicename(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnergroupname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaysourceaccountno(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccountstatus(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypartnergroupcode(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogourl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceaccountname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceaccountno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaypartnerid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPaypartnertypeid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPaypartnerservicename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaypartnergroupname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDisplaysourceaccountno();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSourceaccountstatus();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPaypartnergroupcode();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLogourl();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
};


/**
 * optional string sourceAccountName = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getSourceaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setSourceaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sourceAccountNo = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getSourceaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setSourceaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PayPartnerId = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getPaypartnerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setPaypartnerid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 payPartnerTypeId = 4;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getPaypartnertypeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setPaypartnertypeid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string paypartnerServiceName = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getPaypartnerservicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setPaypartnerservicename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string paypartnerGroupName = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getPaypartnergroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setPaypartnergroupname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string payPartnerServiceId = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string CurrencyIso = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string displaySourceAccountNo = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getDisplaysourceaccountno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setDisplaysourceaccountno = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string sourceAccountStatus = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getSourceaccountstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setSourceaccountstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 paypartnerGroupCode = 11;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getPaypartnergroupcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setPaypartnergroupcode = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string logoUrl = 30;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.getLogourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.prototype.setLogourl = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    custexistingaccountsList: jspb.Message.toObjectList(msg.getCustexistingaccountsList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.deserializeBinaryFromReader);
      msg.addCustexistingaccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustexistingaccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantCustomerExistingSourceAccountsMessage custExistingAccounts = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.prototype.getCustexistingaccountsList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.prototype.setCustexistingaccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.prototype.addCustexistingaccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantCustomerExistingSourceAccountsListMessage.prototype.clearCustexistingaccountsList = function() {
  return this.setCustexistingaccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    countrycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    merchantserviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantserviceid(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMerchantserviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string countryCode = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string merchantServiceId = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.getMerchantserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.setMerchantserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkCountryRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnertypeid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    paypartnergroupid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    appname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    countryname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    paypartnergroupurl: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypartnertypeid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypartnergroupid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnergroupurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnertypeid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPaypartnergroupid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAppname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountryname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPaypartnergroupurl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int32 payPartnerTypeId = 1;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.getPaypartnertypeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.setPaypartnertypeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 payPartnerGroupId = 2;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.getPaypartnergroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.setPaypartnergroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string appName = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.getAppname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.setAppname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string countryCode = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string countryName = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.getCountryname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.setCountryname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string payPartnerGroupUrl = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.getPaypartnergroupurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.prototype.setPaypartnergroupurl = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paypartnertypeid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    paypartnertypedesc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    paypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    paypartnerservicename: jspb.Message.getFieldWithDefault(msg, 5, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    countryname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    paypartnergroupid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    logourl: jspb.Message.getFieldWithDefault(msg, 20, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypartnertypeid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnertypedesc(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerserviceid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicename(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryname(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypartnergroupid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogourl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaypartnertypeid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPaypartnertypedesc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPaypartnerservicename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountryname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPaypartnergroupid();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getLogourl();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional int32 payPartnerTypeId = 1;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getPaypartnertypeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setPaypartnertypeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string payPartnerTypeDesc = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getPaypartnertypedesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setPaypartnertypedesc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string appName = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getAppname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setAppname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string PayPartnerServiceId = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getPaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setPaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string payPartnerServiceName = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getPaypartnerservicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setPaypartnerservicename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string countryCode = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string countryName = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getCountryname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setCountryname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 payPartnerGroupId = 8;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getPaypartnergroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setPaypartnergroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string logoUrl = 20;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.getLogourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.prototype.setLogourl = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paylinkpaymenttypeslistList: jspb.Message.toObjectList(msg.getPaylinkpaymenttypeslistList(),
    proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.toObject, includeInstance),
    paylinkpaymenttypesandsvclistList: jspb.Message.toObjectList(msg.getPaylinkpaymenttypesandsvclistList(),
    proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.deserializeBinaryFromReader);
      msg.addPaylinkpaymenttypeslist(value);
      break;
    case 2:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.deserializeBinaryFromReader);
      msg.addPaylinkpaymenttypesandsvclist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaylinkpaymenttypeslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage.serializeBinaryToWriter
    );
  }
  f = message.getPaylinkpaymenttypesandsvclistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PayLinkPaymentAcctTypesMessage payLinkpaymentTypesList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.getPaylinkpaymenttypeslistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.setPaylinkpaymenttypeslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.addPaylinkpaymenttypeslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.clearPaylinkpaymenttypeslistList = function() {
  return this.setPaylinkpaymenttypeslistList([]);
};


/**
 * repeated PayLinkPaymentAcctTypesAndServicesMessage payLinkPaymentTypesAndSvcList = 2;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.getPaylinkpaymenttypesandsvclistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage, 2));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.setPaylinkpaymenttypesandsvclistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.addPaylinkpaymenttypesandsvclist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PayLinkPaymentAcctTypesAndServicesListResponseMessage.prototype.clearPaylinkpaymenttypesandsvclistList = function() {
  return this.setPaylinkpaymenttypesandsvclistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    customeracctno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    merchantserviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    merchantcustomerguid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 50, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomeracctno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantserviceid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantcustomerguid(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomeracctno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMerchantserviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMerchantcustomerguid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string customerAcctNo = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.getCustomeracctno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.setCustomeracctno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string merchantServiceId = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.getMerchantserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.setMerchantserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string merchantCustomerGuid = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.getMerchantcustomerguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.setMerchantcustomerguid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string countryCode = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customername: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool isSuccess = 1;
 * @return {boolean}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customerName = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.getCustomername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaylinkCustomerAccountNoResponseMessage.prototype.setCustomername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    natureofbusiness: jspb.Message.getFieldWithDefault(msg, 1, ""),
    collectionserviceyesno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payoutserviceyesno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    apirequiredyesno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    requeststatus: jspb.Message.getFieldWithDefault(msg, 6, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNatureofbusiness(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionserviceyesno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutserviceyesno(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApirequiredyesno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequeststatus(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNatureofbusiness();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCollectionserviceyesno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayoutserviceyesno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApirequiredyesno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequeststatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string NatureofBusiness = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.getNatureofbusiness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.setNatureofbusiness = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CollectionServiceYesNo = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.getCollectionserviceyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.setCollectionserviceyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PayoutServiceYesNo = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.getPayoutserviceyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.setPayoutserviceyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ApiRequiredYesNo = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.getApirequiredyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.setApirequiredyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string RequestStatus = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.getRequeststatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.setRequeststatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string languageId = 51;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    natureofbusiness: jspb.Message.getFieldWithDefault(msg, 1, ""),
    collectionserviceyesno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payoutserviceyesno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    apirequiredyesno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    requeststatus: jspb.Message.getFieldWithDefault(msg, 6, ""),
    makedate: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNatureofbusiness(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionserviceyesno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutserviceyesno(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApirequiredyesno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequeststatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakedate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNatureofbusiness();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCollectionserviceyesno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayoutserviceyesno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApirequiredyesno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequeststatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMakedate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string NatureofBusiness = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.getNatureofbusiness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.setNatureofbusiness = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CollectionServiceYesNo = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.getCollectionserviceyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.setCollectionserviceyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PayoutServiceYesNo = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.getPayoutserviceyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.setPayoutserviceyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ApiRequiredYesNo = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.getApirequiredyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.setApirequiredyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string RequestStatus = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.getRequeststatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.setRequeststatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string MakeDate = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.getMakedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.prototype.setMakedate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    reqlistList: jspb.Message.toObjectList(msg.getReqlistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.deserializeBinaryFromReader);
      msg.addReqlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReqlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantBizCollecResponseMessage reqlist = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.prototype.getReqlistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.prototype.setReqlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.prototype.addReqlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecResponseMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantBizCollecListResponseMessage.prototype.clearReqlistList = function() {
  return this.setReqlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    beneficiarypaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeneficiarypaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string BeneficiaryPayPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.getBeneficiarypaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.setBeneficiarypaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string BeneficiaryCountryCode = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkListRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentbylinktransrefno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beneficiarypaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    beneficiarytranscurrecyiso: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    canuserchangeamountyesno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    requeststatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
    transnarration: jspb.Message.getFieldWithDefault(msg, 8, ""),
    maketimestr: jspb.Message.getFieldWithDefault(msg, 9, ""),
    paymenlinktype: jspb.Message.getFieldWithDefault(msg, 10, ""),
    noofdaystoexpire: jspb.Message.getFieldWithDefault(msg, 11, 0),
    linkexpirydate: jspb.Message.getFieldWithDefault(msg, 12, ""),
    paymentlinkendpoint: jspb.Message.getFieldWithDefault(msg, 40, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentbylinktransrefno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerserviceid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarytranscurrecyiso(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransamount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanuserchangeamountyesno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequeststatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaketimestr(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymenlinktype(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoofdaystoexpire(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkexpirydate(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentlinkendpoint(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentbylinktransrefno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeneficiarypaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBeneficiarytranscurrecyiso();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransamount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCanuserchangeamountyesno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRequeststatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMaketimestr();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPaymenlinktype();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getNoofdaystoexpire();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLinkexpirydate();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPaymentlinkendpoint();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string paymentByLinkTransRefNo = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getPaymentbylinktransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setPaymentbylinktransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string BeneficiaryPayPartnerServiceId = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getBeneficiarypaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setBeneficiarypaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BeneficiaryTransCurrecyIso = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getBeneficiarytranscurrecyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setBeneficiarytranscurrecyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double TransAmount = 4;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getTransamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string CanUserChangeAmountYesNo = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getCanuserchangeamountyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setCanuserchangeamountyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string BeneficiaryCountryCode = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string RequestStatus = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getRequeststatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setRequeststatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string TransNarration = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string MakeTimeStr = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getMaketimestr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setMaketimestr = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string PaymenlinkType = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getPaymenlinktype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setPaymenlinktype = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 NoOfdaysToExpire = 11;
 * @return {number}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getNoofdaystoexpire = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setNoofdaystoexpire = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string LinkExpirydate = 12;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getLinkexpirydate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setLinkexpirydate = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string PaymentLinkEndpoint = 40;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getPaymentlinkendpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setPaymentlinkendpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    linklistList: jspb.Message.toObjectList(msg.getLinklistList(),
    proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.toObject, includeInstance),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.deserializeBinaryFromReader);
      msg.addLinklist(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage.serializeBinaryToWriter
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * repeated PaymentLinksForAMerchantRspenseDataMessage linkList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.getLinklistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.setLinklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.addLinklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.clearLinklistList = function() {
  return this.setLinklistList([]);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinksForAMerchantRspenseDataListMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    beneficiarypaypartnerserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beneficiarycountrycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    paymentbylinktransrefno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarypaypartnerserviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeneficiarycountrycode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentbylinktransrefno(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeneficiarypaypartnerserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeneficiarycountrycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentbylinktransrefno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string BeneficiaryPayPartnerServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.getBeneficiarypaypartnerserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.setBeneficiarypaypartnerserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string BeneficiaryCountryCode = 2;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.getBeneficiarycountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.setBeneficiarycountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string paymentByLinkTransRefNo = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.getPaymentbylinktransrefno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.setPaymentbylinktransrefno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string languageId = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.PaymentLinkRefNoDataRequestMessage.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    merchantserviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paypartnerservicecountrycode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fromdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    todate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerchantserviceid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaypartnerservicecountrycode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromdate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTodate(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMerchantserviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaypartnerservicecountrycode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFromdate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTodate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string MerchantServiceId = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.getMerchantserviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.setMerchantserviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payPartnerServicecountryCode = 3;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.getPaypartnerservicecountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.setPaypartnerservicecountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fromDate = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.getFromdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.setFromdate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string toDate = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.getTodate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.setTodate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string countryCode = 50;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferHistoryRequestMessage.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuedatestr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyiso: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transamount: jspb.Message.getFieldWithDefault(msg, 5, ""),
    transnarration: jspb.Message.getFieldWithDefault(msg, 6, ""),
    transstatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
    authstatus: jspb.Message.getFieldWithDefault(msg, 8, ""),
    cashortransfertype: jspb.Message.getFieldWithDefault(msg, 9, ""),
    transinitiatedby: jspb.Message.getFieldWithDefault(msg, 10, ""),
    makerid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    authid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    maketimestr: jspb.Message.getFieldWithDefault(msg, 13, ""),
    authtimestr: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuedatestr(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyiso(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransamount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransnarration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransstatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthstatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCashortransfertype(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransinitiatedby(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaketimestr(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthtimestr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuedatestr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyiso();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransamount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTransnarration();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTransstatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAuthstatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCashortransfertype();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTransinitiatedby();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMakerid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAuthid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMaketimestr();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAuthtimestr();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string ValueDateStr = 1;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getValuedatestr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setValuedatestr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CurrencyIso = 4;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getCurrencyiso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setCurrencyiso = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string TransAmount = 5;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getTransamount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setTransamount = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string TransNarration = 6;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getTransnarration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setTransnarration = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string TransStatus = 7;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getTransstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setTransstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string AuthStatus = 8;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getAuthstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setAuthstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string CashOrTransferType = 9;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getCashortransfertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setCashortransfertype = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string TransInitiatedBy = 10;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getTransinitiatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setTransinitiatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string MakerId = 11;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getMakerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setMakerid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string AuthId = 12;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getAuthid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setAuthid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string MakeTimeStr = 13;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getMaketimestr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setMaketimestr = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string AuthTimeStr = 14;
 * @return {string}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.getAuthtimestr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.prototype.setAuthtimestr = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    fundtranslistList: jspb.Message.toObjectList(msg.getFundtranslistList(),
    proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage;
  return proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage;
      reader.readMessage(value,proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.deserializeBinaryFromReader);
      msg.addFundtranslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFundtranslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MerchantFundTransferTransHistoryResponseMessage fundtransList = 1;
 * @return {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage>}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.prototype.getFundtranslistList = function() {
  return /** @type{!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage, 1));
};


/**
 * @param {!Array<!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage>} value
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage} returns this
*/
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.prototype.setFundtranslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage}
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.prototype.addFundtranslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryResponseMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage} returns this
 */
proto.MerchantMoneyTransferForBusinessPortal.MerchantFundTransferTransHistoryListResponseMessage.prototype.clearFundtranslistList = function() {
  return this.setFundtranslistList([]);
};


goog.object.extend(exports, proto.MerchantMoneyTransferForBusinessPortal);
