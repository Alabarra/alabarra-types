import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { ABClient, ABClientData } from '../types/ABClient';


export const ClientConverter: FirestoreDataConverter<ABClient> = {
	toFirestore(admin: WithFieldValue<ABClient>): DocumentData {		
		return admin;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABClient {
		const data = snapshot.data(options) as ABClientData;

		return {
			id: snapshot.id,
			...data
		};
	},
};
