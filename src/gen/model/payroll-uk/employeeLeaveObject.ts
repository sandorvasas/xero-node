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

import { EmployeeLeave } from '././employeeLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmployeeLeaveObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leave'?: EmployeeLeave;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "leave",
            "baseName": "leave",
            "type": "EmployeeLeave"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeLeaveObject.attributeTypeMap;
    }
}

