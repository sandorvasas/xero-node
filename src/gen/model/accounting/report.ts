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

import { TenNinteyNineContact } from '././tenNinteyNineContact';

export class Report {
    /**
    * See Prepayment Types
    */
    'reportID'?: string;
    /**
    * See Prepayment Types
    */
    'reportName'?: string;
    /**
    * See Prepayment Types
    */
    'reportType'?: Report.ReportTypeEnum;
    /**
    * See Prepayment Types
    */
    'reportTitle'?: string;
    /**
    * Date of report
    */
    'reportDate'?: string;
    /**
    * Updated Date
    */
    'updatedDateUTC'?: Date;
    'contacts'?: Array<TenNinteyNineContact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reportID",
            "baseName": "ReportID",
            "type": "string"
        },
        {
            "name": "reportName",
            "baseName": "ReportName",
            "type": "string"
        },
        {
            "name": "reportType",
            "baseName": "ReportType",
            "type": "Report.ReportTypeEnum"
        },
        {
            "name": "reportTitle",
            "baseName": "ReportTitle",
            "type": "string"
        },
        {
            "name": "reportDate",
            "baseName": "ReportDate",
            "type": "string"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "contacts",
            "baseName": "Contacts",
            "type": "Array<TenNinteyNineContact>"
        }    ];

    static getAttributeTypeMap() {
        return Report.attributeTypeMap;
    }
}

export namespace Report {
    export enum ReportTypeEnum {
        AgedPayablesByContact = <any> 'AgedPayablesByContact'
    }
}
