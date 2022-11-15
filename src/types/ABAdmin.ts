/**
 * Represents a product that can be ordered
 */
export interface ABAdmin extends ABAdminData {

    /**
     * id of the user
     */
    id: string;
 }


export interface ABAdminData {

    given_name: string;

    surename: any;

    business_id: string;
}
 