/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimesheetLine } from '././timesheetLine';

export class Timesheet {
    /**
    * The Xero identifier for a Timesheet
    */
    'timesheetID'?: string;
    /**
    * The Xero identifier for the Payroll Calandar that the Timesheet applies to
    */
    'payrollCalendarID': string;
    /**
    * The Xero identifier for the Employee that the Timesheet is for
    */
    'employeeID': string;
    /**
    * The Start Date of the Timesheet period (YYYY-MM-DD)
    */
    'startDate': string;
    /**
    * The End Date of the Timesheet period (YYYY-MM-DD)
    */
    'endDate': string;
    /**
    * Status of the timesheet
    */
    'status'?: Timesheet.StatusEnum;
    /**
    * The Total Hours of the Timesheet
    */
    'totalHours'?: number;
    /**
    * The UTC date time that the Timesheet was last updated
    */
    'updatedDateUTC'?: Date;
    'timesheetLines'?: Array<TimesheetLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timesheetID",
            "baseName": "timesheetID",
            "type": "string"
        },
        {
            "name": "payrollCalendarID",
            "baseName": "payrollCalendarID",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Timesheet.StatusEnum"
        },
        {
            "name": "totalHours",
            "baseName": "totalHours",
            "type": "number"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "updatedDateUTC",
            "type": "Date"
        },
        {
            "name": "timesheetLines",
            "baseName": "timesheetLines",
            "type": "Array<TimesheetLine>"
        }    ];

    static getAttributeTypeMap() {
        return Timesheet.attributeTypeMap;
    }
}

export namespace Timesheet {
    export enum StatusEnum {
        Draft = <any> 'Draft',
        Approved = <any> 'Approved',
        Completed = <any> 'Completed'
    }
}
