import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, serverTimestamp, type SnapshotOptions, type Timestamp, type WithFieldValue } from 'firebase/firestore'
import { type ABOrder } from '../types/AlabarraOrder'

export const OrderConverter: FirestoreDataConverter<ABOrder> = {
  toFirestore (order: WithFieldValue<ABOrder>): DocumentData {
    const newOrder = order
    if (newOrder.created_at === undefined) {
      newOrder.created_at = serverTimestamp()
    }
    return newOrder
  },
  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABOrder {
    const data = snapshot.data(options)
    data.id = snapshot.id
    data.ref = snapshot.ref
    data.path = snapshot.ref.path
    if (data.created_at !== undefined && data.created_at !== null) {
      data.created_at = (data.created_at as Timestamp).toDate()
    }
    if (data.last_updated_at !== undefined && data.last_updated_at !== null) {
      data.last_updated_at = (data.last_updated_at as Timestamp).toDate()
    }
    return data as ABOrder
  }
}
