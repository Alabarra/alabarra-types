import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { AlabarraCategory } from '../types/AlabarraCategory';


export const CategoryConverter: FirestoreDataConverter<AlabarraCategory> = {
	toFirestore(table: WithFieldValue<AlabarraCategory>): DocumentData {

		let newTable = table;
		
		if (newTable.created_at != undefined) {
			newTable.created_at = newTable.created_at;
		} else {
			newTable.created_at = new Date();
		}
		
		return newTable;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraCategory {
		const data = snapshot.data(options);
		data.id = snapshot.id;
        data.ref = snapshot.ref;
		return data as AlabarraCategory;
	},
};
