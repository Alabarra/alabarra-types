import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions, type WithFieldValue } from 'firebase/firestore'
import { type ABUser, type ABUserData } from '../types/ABUser'

export const UserConverter: FirestoreDataConverter<ABUser> = {
  toFirestore (admin: WithFieldValue<ABUser>): DocumentData {
    return admin
  },
  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABUser {
    const data = snapshot.data(options) as ABUserData

    return {
      id: snapshot.id,
      ...data
    }
  }
}
