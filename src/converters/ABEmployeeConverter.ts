import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions, type WithFieldValue } from 'firebase/firestore'
import { type ABEmployee, type ABEmployeeData } from '../types/ABEmployee'

export const EmployeeConverter: FirestoreDataConverter<ABEmployee> = {
  toFirestore (admin: WithFieldValue<ABEmployee>): DocumentData {
    return admin
  },
  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABEmployee {
    const data = snapshot.data(options) as ABEmployeeData

    return {
      id: snapshot.id,
      ...data
    }
  }
}
