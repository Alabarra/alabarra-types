import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { ABEmployee, ABEmployeeData } from '../types/ABEmployee';


export const EmployeeConverter: FirestoreDataConverter<ABEmployee> = {
	toFirestore(admin: WithFieldValue<ABEmployee>): DocumentData {		
		return admin;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABEmployee {
		const data = snapshot.data(options) as ABEmployeeData;

		return {
			id: snapshot.id,
			...data
		};
	},
};
