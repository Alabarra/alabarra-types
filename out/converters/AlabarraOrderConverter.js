"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderConverter = void 0;
exports.OrderConverter = {
    toFirestore(order) {
        let newOrder = order;
        if (newOrder.created_at != undefined) {
            newOrder.created_at = newOrder.created_at;
        }
        else {
            newOrder.created_at = new Date();
        }
        return newOrder;
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        let newOrder = data;
        newOrder.id = snapshot.id;
        if (newOrder.created_at != undefined && data.created_at != null) {
            newOrder.created_at = data.created_at.toDate();
        }
        return newOrder;
    },
};
