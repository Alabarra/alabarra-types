/**
 * Represents a product that can be ordered
 */
export interface ABTable extends ABTableData {

  /**
     * id of the table
     */
  id: string

  /**
     * Date of table creation in the server
     */
  created_at: Date

  /**
     * Date of table creation in the server
     */
  last_updated_at: Date | null
}

/**
 * Represents a product that can be ordered
 */
export interface ABTableData {

  /**
     * user-facing name of the table.
     */
  table_name: string

  /**
     * Date of table creation in the server
     */
  created_at: any

  /**
     * Date of table creation in the server
     */
  last_updated_at: any

  /**
     * Whether the table is active or not
     */
  active: boolean
}
