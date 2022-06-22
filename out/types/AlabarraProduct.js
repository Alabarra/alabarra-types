"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlabarraProductOptionsType = exports.AlabarraProductStatus = void 0;
/**
 * Status of each product
 */
var AlabarraProductStatus;
(function (AlabarraProductStatus) {
    /**
     * Product is active and in stock
     */
    AlabarraProductStatus["ACTIVE"] = "ACTIVE";
    /**
     * Produc is inactive
     */
    AlabarraProductStatus["INACTIVE"] = "INACTIVE";
})(AlabarraProductStatus = exports.AlabarraProductStatus || (exports.AlabarraProductStatus = {}));
/**
 * Type of option, such as single selection, multiple selection, etc.
 */
var AlabarraProductOptionsType;
(function (AlabarraProductOptionsType) {
    /**
     * Single option selection, to be represented by radio buttons
     */
    AlabarraProductOptionsType["SINGLE_SELECTION"] = "SINGLE_SELECTION";
    /**
     * Multiple option selection, to be represented by checkboxes
     */
    AlabarraProductOptionsType["MULTIPLE_SELECTION"] = "MULTIPLE_SELECTION";
})(AlabarraProductOptionsType = exports.AlabarraProductOptionsType || (exports.AlabarraProductOptionsType = {}));
