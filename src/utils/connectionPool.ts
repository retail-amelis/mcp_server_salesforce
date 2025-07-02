import { createSalesforceConnection } from './connection.js';

let singletonConn: any = null;

/**
 * Returns a cached Salesforce connection, creating it on first use.
 */
export async function getConnection() {
  if (!singletonConn) {
    try {
      singletonConn = await createSalesforceConnection();
    } catch (error) {
      singletonConn = null;
      throw error;
    }
  }
  return singletonConn;
}