import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions, type WithFieldValue } from 'firebase/firestore'
import { type ABBusinessConfig, type ABBusinessConfigData } from '../types/ABBusinessConfig'

export const BusinessConfigConverter: FirestoreDataConverter<ABBusinessConfig> = {
  toFirestore (businessConfig: WithFieldValue<ABBusinessConfig>): DocumentData {
    return businessConfig
  },
  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABBusinessConfig {
    const data = snapshot.data(options) as ABBusinessConfigData

    return {
      id: snapshot.id,
      ...data
    }
  }
}
