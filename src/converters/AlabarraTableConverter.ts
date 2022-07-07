import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { AlabarraTable } from "../types/AlabarraTable";


export const TableConverter: FirestoreDataConverter<AlabarraTable> = {
	toFirestore(table: WithFieldValue<AlabarraTable>): DocumentData {

		let newTable = table;
		
		if (newTable.created_at != undefined) {
			newTable.created_at = newTable.created_at
		} else {
			newTable.created_at = new Date()
		}
		
		return newTable;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraTable {
		const data = snapshot.data(options);
		data.id = snapshot.id
		return data as AlabarraTable;
	},
};
