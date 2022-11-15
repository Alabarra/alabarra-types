/**
 * Represents a client that can order products
 */
export interface ABClient extends ABClientData {

    /**
     * id of the user
     */
    id: string;
 }


export interface ABClientData {

    orders: string [];
}
 