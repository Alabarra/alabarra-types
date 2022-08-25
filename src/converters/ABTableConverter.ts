import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { ABTable } from "../types/ABTable";


export const TableConverter: FirestoreDataConverter<ABTable> = {
	toFirestore(table: WithFieldValue<ABTable>): DocumentData {

		let newTable = table;
		
		if (newTable.created_at != undefined) {
			newTable.created_at = newTable.created_at;
		} else {
			newTable.created_at = serverTimestamp();
		}
		
		return newTable;
	},
	
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABTable {
		const data = snapshot.data(options);
	
		const newObject: ABTable = {
			id: snapshot.id,
			path: snapshot.ref.path,
			table_name: data.table_name,
			created_at: (data.created_at as Timestamp).toDate(),
			updated_at: null
		};

		if (data.updated_at) {
			newObject.updated_at = (data.updated_at as Timestamp).toDate();
		}

		return newObject as ABTable;
	},
};
