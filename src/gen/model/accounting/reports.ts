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

import { Report } from '././report';

export class Reports {
    'reports'?: Array<Report>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reports",
            "baseName": "Reports",
            "type": "Array<Report>"
        }    ];

    static getAttributeTypeMap() {
        return Reports.attributeTypeMap;
    }
}

