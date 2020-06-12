/**
 * Bank Feeds API
 * This specifing endpoints Xero Bank feeds API
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CreditDebitIndicator } from '././creditDebitIndicator';

/**
* The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
*/
export class EndBalance {
    'amount'?: number;
    'creditDebitIndicator'?: CreditDebitIndicator;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "creditDebitIndicator",
            "baseName": "creditDebitIndicator",
            "type": "CreditDebitIndicator"
        }    ];

    static getAttributeTypeMap() {
        return EndBalance.attributeTypeMap;
    }
}

