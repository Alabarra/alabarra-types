import { type ABProduct, type ABProductData } from '../types/ABProduct'
import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, serverTimestamp, type SnapshotOptions, type Timestamp, type WithFieldValue } from 'firebase/firestore'

export const ProductConverter: FirestoreDataConverter<ABProduct> = {
  toFirestore (product: WithFieldValue<ABProduct>): DocumentData {
    const newProduct = product

    if (newProduct.created_at === undefined) {
      newProduct.created_at = serverTimestamp()
    }

    return newProduct
  },
  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABProduct {
    const data = snapshot.data(options) as ABProductData

    const newProduct: ABProduct = {
      id: snapshot.id,
      path: snapshot.ref.path,
      ...data
    }

    newProduct.created_at = (data.created_at as Timestamp).toDate()

    if (data.last_updated_at !== null) {
      newProduct.last_updated_at = (data.last_updated_at as Timestamp).toDate()
    }

    return newProduct
  }
}
