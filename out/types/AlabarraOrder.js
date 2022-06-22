"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlabarraOrderStatus = void 0;
/**
 * Status an order can be in
 */
var AlabarraOrderStatus;
(function (AlabarraOrderStatus) {
    /**
     * Order just created
     */
    AlabarraOrderStatus["OPEN"] = "OPEN";
    /**
     * Order created, accepted. Awaiting digital payment
     */
    AlabarraOrderStatus["DIGITAL_PAYMENT_REQUESTED"] = "DIGITAL_PAYMENT_REQUESTED";
    /**
     * Order created, accepted. User waiting for waitress to charge at table
     */
    AlabarraOrderStatus["PRESENTIAL_PAYMENT_REQUESTED"] = "PRESENTIAL_PAYMENT_REQUESTED";
    /**
     * Order paid. Pending further processing
     */
    AlabarraOrderStatus["PAID_PENDING_PROCESSING"] = "PAID_PENDING_PROCESSING";
    /**
     * Order in process (kitchen/bar)
     */
    AlabarraOrderStatus["IN_PROCESS"] = "IN_PROCESS";
    /**
     * Order was processed and is ready for delivery by waitress
     */
    AlabarraOrderStatus["READY_FOR_DELIVERY"] = "READY_FOR_DELIVERY";
    /**
     * Order was delivered and completed.
     */
    AlabarraOrderStatus["FULFILLED"] = "FULFILLED";
})(AlabarraOrderStatus = exports.AlabarraOrderStatus || (exports.AlabarraOrderStatus = {}));
