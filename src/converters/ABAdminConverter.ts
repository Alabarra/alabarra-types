import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { ABAdmin, ABAdminData } from "../types/ABAdmin";


export const AdminConverter: FirestoreDataConverter<ABAdmin> = {
	toFirestore(admin: WithFieldValue<ABAdmin>): DocumentData {		
		return admin;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABAdmin {
		const data = snapshot.data(options) as ABAdminData;

		return {
			id: snapshot.id,
			...data
		};
	},
};
