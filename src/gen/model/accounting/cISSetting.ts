/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class CISSetting {
    /**
    * Boolean that describes if the contact is a CIS Subcontractor
    */
    'cISEnabled'?: boolean;
    /**
    * CIS Deduction rate for the contact if he is a subcontractor. If the contact is not CISEnabled, then the rate is not returned
    */
    'rate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cISEnabled",
            "baseName": "CISEnabled",
            "type": "boolean"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CISSetting.attributeTypeMap;
    }
}

