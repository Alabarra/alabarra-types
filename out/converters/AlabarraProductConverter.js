"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductConverter = void 0;
exports.ProductConverter = {
    toFirestore(product) {
        let newProduct = product;
        if (newProduct.created_at != undefined) {
            newProduct.created_at = newProduct.created_at;
        }
        else {
            newProduct.created_at = new Date();
        }
        return newProduct;
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        data.id = snapshot.id;
        return data;
    },
};
