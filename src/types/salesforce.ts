export interface SalesforceObject {
    name: string;
    label: string;
    custom: boolean;
  }
  
  export interface SalesforceField {
    name: string;
    label: string;
    type: string;
    nillable: boolean;
    length?: number;
    picklistValues: Array<{ value: string }>;
    defaultValue: string | null;
    referenceTo: string[];
  }
  
  export interface SalesforceDescribeResponse {
    name: string;
    label: string;
    fields: SalesforceField[];
    custom: boolean;
  }
  
  export interface SalesforceError {
    statusCode: string;
    message: string;
    fields?: string[];
  }
  
  export interface DMLResult {
    success: boolean;
    id?: string;
    errors?: SalesforceError[] | SalesforceError;
  }