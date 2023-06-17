import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { ABOrder } from "../types/AlabarraOrder";


export const OrderConverter: FirestoreDataConverter<ABOrder> = {
	toFirestore(order: WithFieldValue<ABOrder>): DocumentData {
		
		let newOrder = order
		if (newOrder.created_at != undefined) {
			newOrder.created_at = newOrder.created_at
		} else {
			newOrder.created_at = serverTimestamp();
		}
		return newOrder;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABOrder {
		const data = snapshot.data(options);
		data.id = snapshot.id;
		if (data.created_at != undefined && data.created_at != null) {
			data.created_at = (data.created_at as Timestamp).toDate()
		}
		if (data.last_updated_at != undefined && data.last_updated_at != null) {
			data.last_updated_at = (data.last_updated_at as Timestamp).toDate()
		}
		return data as ABOrder;
	},
};
