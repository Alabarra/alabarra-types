import { ABProduct, ABProductData } from "../types/ABProduct";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';


export const ProductConverter: FirestoreDataConverter<ABProduct> = {
	toFirestore(product: WithFieldValue<ABProduct>): DocumentData {

		let newProduct = product;
		
		if (newProduct.created_at != undefined) {
			newProduct.created_at = newProduct.created_at
		} else {
			newProduct.created_at = serverTimestamp();
		}
		
		return newProduct;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABProduct {
		const data = snapshot.data(options) as ABProductData;

		const newObject: ABProduct = {
			id: snapshot.id,
			path: snapshot.ref.path,
			...data
		}

		newObject.created_at = (data.created_at as Timestamp).toDate();
		if (data.last_updated_at) {
			newObject.last_updated_at = (data.last_updated_at as Timestamp).toDate();
		}

		return newObject as ABProduct;
	},
};
