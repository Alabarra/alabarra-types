import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { AlabarraTable } from "../types/AlabarraTable";


export const TableConverter: FirestoreDataConverter<AlabarraTable> = {
	toFirestore(table: WithFieldValue<AlabarraTable>): DocumentData {

		let newTable = table;
		
		if (newTable.created_at != undefined) {
			newTable.created_at = newTable.created_at;
		} else {
			newTable.created_at = serverTimestamp();
		}
		
		return newTable;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraTable {
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
		return data as AlabarraTable;
	},
};
