"use strict";
/*
    -------------------
    DATABASE INTERFACES
    -------------------
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./types/AlabarraOrder"), exports);
__exportStar(require("./types/AlabarraCategory"), exports);
__exportStar(require("./types/AlabarraProduct"), exports);
__exportStar(require("./types/AlabarraCustomer"), exports);
__exportStar(require("./types/AlabarraManualPayment"), exports);
__exportStar(require("./types/AlabarraTable"), exports);
/*
    --------------------------
    CLOUD FUNCTIONS INTERFACES
    --------------------------
*/
__exportStar(require("./cloud-functions/AlabarraResponse"), exports);
__exportStar(require("./cloud-functions/AlabarraCreateOrder"), exports);
__exportStar(require("./cloud-functions/AlabarraCreateTable"), exports);
__exportStar(require("./cloud-functions/AlabarraCreateCategory"), exports);
__exportStar(require("./cloud-functions/AlabarraCreateProduct"), exports);
__exportStar(require("./cloud-functions/AlabarraEditProduct"), exports);
__exportStar(require("./cloud-functions/AlabarraStartProcessingOrder"), exports);
__exportStar(require("./cloud-functions/AlabarraConfirmPresentialPayment"), exports);
__exportStar(require("./cloud-functions/AlabarraSetOrderReadyForDelivery"), exports);
__exportStar(require("./cloud-functions/AlabarraFulfillOrder"), exports);
/*
    --------------------------
    CONVERTERS
    --------------------------
*/
__exportStar(require("./converters/AlabarraProductConverter"), exports);
__exportStar(require("./converters/AlabarraOrderConverter"), exports);
__exportStar(require("./converters/AlabarraTableConverter"), exports);
/*
    --------------------------
    COLLECTIONS
    --------------------------
*/
