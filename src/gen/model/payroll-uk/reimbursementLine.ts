/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ReimbursementLine {
    /**
    * Xero identifier for payroll reimbursement
    */
    'reimbursementTypeID'?: string;
    /**
    * Reimbursement line description
    */
    'description'?: string;
    /**
    * Reimbursement amount
    */
    'amount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reimbursementTypeID",
            "baseName": "reimbursementTypeID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReimbursementLine.attributeTypeMap;
    }
}

