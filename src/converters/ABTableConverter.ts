import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';
import { ABTable, ABTableData } from "../types/ABTable";


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
		const data = snapshot.data(options) as ABTableData;
	
		const newTable: ABTable = {
			id: snapshot.id,
			...data
		};

		newTable.created_at = (data.created_at as Timestamp).toDate();

		if (data.last_updated_at) {
			newTable.last_updated_at = (data.last_updated_at as Timestamp).toDate();
		}

		return newTable;
	},
};
