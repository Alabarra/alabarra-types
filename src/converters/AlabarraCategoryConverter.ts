import { DocumentData, Firestore, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { AlabarraCategory } from '../types/AlabarraCategory';


export const CategoryConverter: FirestoreDataConverter<AlabarraCategory> = {
	toFirestore(category: WithFieldValue<AlabarraCategory>): DocumentData {

		let newCategory = category;
		
		if (newCategory.created_at != undefined) {
			newCategory.created_at = newCategory.created_at;
		} else {
			newCategory.created_at = serverTimestamp();
		}
		
		return newCategory;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraCategory {
		const data = snapshot.data(options);
		data.id = snapshot.id;
        data.ref = snapshot.ref;
		data.path = snapshot.ref.path;
		if (data.created_at != undefined && data.created_at != null) {
			data.created_at = (data.created_at as Timestamp).toDate()
		}
		if (data.last_updated_at != undefined && data.last_updated_at != null) {
			data.last_updated_at = (data.last_updated_at as Timestamp).toDate()
		}
		return data as AlabarraCategory;
	},
};
