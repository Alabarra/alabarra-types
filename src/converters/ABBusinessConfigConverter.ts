import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { ABBusinessConfig, ABBusinessConfigData } from "../types/ABBusinessConfig";


export const BusinessConfigConverter: FirestoreDataConverter<ABBusinessConfig> = {
	toFirestore(businessConfig: WithFieldValue<ABBusinessConfig>): DocumentData {		
		return businessConfig;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABBusinessConfig {
		const data = snapshot.data(options) as ABBusinessConfigData;

		return {
			id: snapshot.id,
			...data
		};
	},
};
