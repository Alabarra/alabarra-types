"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableConverter = void 0;
exports.TableConverter = {
    toFirestore(table) {
        let newTable = table;
        if (newTable.created_at != undefined) {
            newTable.created_at = newTable.created_at;
        }
        else {
            newTable.created_at = new Date();
        }
        return newTable;
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        data.id = snapshot.id;
        return data;
    },
};
