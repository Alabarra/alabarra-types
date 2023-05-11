import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { ABUser, ABUserData } from '../types/ABUser';


export const UserConverter: FirestoreDataConverter<ABUser> = {
	toFirestore(admin: WithFieldValue<ABUser>): DocumentData {		
		return admin;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABUser {
		const data = snapshot.data(options) as ABUserData;

		return {
			id: snapshot.id,
			...data
		};
	},
};
