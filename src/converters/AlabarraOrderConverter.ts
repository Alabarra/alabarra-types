import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { AlabarraOrder } from "../types/AlabarraOrder";


export const OrderConverter: FirestoreDataConverter<AlabarraOrder> = {
	toFirestore(order: WithFieldValue<AlabarraOrder>): DocumentData {
		
		let newOrder = order
		if (newOrder.created_at != undefined) {
			newOrder.created_at = newOrder.created_at
		} else {
			newOrder.created_at = new Date()
		}
		return newOrder;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraOrder {
		const data = snapshot.data(options);
		let newOrder = data;
		newOrder.id = snapshot.id
		if (newOrder.created_at != undefined && data.created_at != null) {
			newOrder.created_at = (data.created_at as Timestamp).toDate()
		}
		return newOrder as AlabarraOrder;
	},
};
