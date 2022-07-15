import { AlabarraProduct } from "../types/AlabarraProduct";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, serverTimestamp, SnapshotOptions, Timestamp, WithFieldValue } from 'firebase/firestore';


export const ProductConverter: FirestoreDataConverter<AlabarraProduct> = {
	toFirestore(product: WithFieldValue<AlabarraProduct>): DocumentData {

		let newProduct = product;
		
		if (newProduct.created_at != undefined) {
			newProduct.created_at = newProduct.created_at
		} else {
			newProduct.created_at = new Date()
		}
		
		return newProduct;
	},
	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AlabarraProduct {
		const data = snapshot.data(options);
		data.id = snapshot.id;
		data.ref = snapshot.ref;
		data.path = snapshot.ref.path;
		return data as AlabarraProduct;
	},
};
