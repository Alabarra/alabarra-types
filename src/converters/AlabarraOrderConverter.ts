import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { AlabarraOrder } from "../types/AlabarraOrder";


export const OrderConverter: FirestoreDataConverter<AlabarraOrder> = {
	toFirestore(order: WithFieldValue<AlabarraOrder>): DocumentData {
		
		let newOrder = order
		if (newOrder.created_at != undefined) {
			newOrder.created_at = newOrder.created_at
		} else {
			newOrder.created_at = serverTimestamp();
		}
		return newOrder;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraOrder {
		const data = snapshot.data(options);
		data.id = snapshot.id
        data.ref = snapshot.ref;
		data.path = snapshot.ref.path;
		if (data.created_at != undefined && data.created_at != null) {
			data.created_at = (data.created_at as Timestamp).toDate()
		}
		if (data.last_updated_at != undefined && data.last_updated_at != null) {
			data.last_updated_at = (data.created_at as Timestamp).toDate()
		}
		return data as AlabarraOrder;
	},
};
