
export enum ABEmployeeRole {

  /**
     * Restaurant owner / Root account
     */
  OWNER = 'OWNER',
  /**
     * Manager account, all admin access
     */
  MANAGER = 'MANAGER',

  /**
     * Cashier
     */
  CHASHIER = 'CHASHIER',

  /**
     * Waiter
     */
  WAITER = 'WAITER',

  /**
     * Runner
     */
  RUNNER = 'RUNNER',

  /**
     * Cook
     */
  COOK = 'COOK'
}

/**
 * Represents a product that can be ordered
 */
export interface ABEmployee extends ABEmployeeData {

  /**
     * id of the employee
     */
  id: string
}

export interface ABEmployeeData {

  /**
     * The name of the employee
     */
  given_name: string

  /**
     * The surname of the employee
     */
  surename: any

  /**
     * Roles of the employee in different businesses
     */
  business_roles: Map<string, ABEmployeeRole>
}
