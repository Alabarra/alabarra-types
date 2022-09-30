/**
 * Represents a product that can be ordered
 */
export interface ABTable extends ABTableData {

    /**
     * id of the table, which is in turn its name
     */
    id: string;

    /**
     * Path of the category
     */
    path: string;

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
     last_updated_at: Date | null;
 }


/**
 * Represents a product that can be ordered
 */
export interface ABTableData {
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
    created_at: any;

    /**
     * Date of product creation in the server
     */
     last_updated_at: any;
}
 