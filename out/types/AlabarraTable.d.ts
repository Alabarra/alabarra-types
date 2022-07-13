/**
 * Represents a product that can be ordered
 */
export interface AlabarraTable {
    /**
    * id of the table, which is in turn its name
    */
    id?: string;
    /**
     * user-facing name of the table. Same as id.
     */
    table_name: string;
    /**
     * Date of product creation in the server
     */
    created_at: Date;
    /**
     * Date of product creation in the server
     */
    updated_at: Date | null;
}
//# sourceMappingURL=AlabarraTable.d.ts.map