import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, serverTimestamp, type SnapshotOptions, type Timestamp, type WithFieldValue } from 'firebase/firestore'
import { type ABTable, type ABTableData } from '../types/ABTable'

export const TableConverter: FirestoreDataConverter<ABTable> = {
  toFirestore (table: WithFieldValue<ABTable>): DocumentData {
    const newTable = table

    if (newTable.created_at === undefined) {
      newTable.created_at = serverTimestamp()
    }

    return newTable
  },

  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ABTable {
    const data = snapshot.data(options) as ABTableData

    const newTable: ABTable = {
      id: snapshot.id,
      ...data
    }

    newTable.created_at = (data.created_at as Timestamp).toDate()

    if (data.last_updated_at !== null) {
      newTable.last_updated_at = (data.last_updated_at as Timestamp).toDate()
    }

    return newTable
  }
}
