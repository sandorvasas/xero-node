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


export class BrandingTheme {
    /**
    * Xero identifier
    */
    'brandingThemeID'?: string;
    /**
    * Name of branding theme
    */
    'name'?: string;
    /**
    * The location of the image file used as the logo on this branding theme
    */
    'logoUrl'?: string;
    /**
    * Always INVOICE
    */
    'type'?: BrandingTheme.TypeEnum;
    /**
    * Integer – ranked order of branding theme. The default branding theme has a value of 0
    */
    'sortOrder'?: number;
    /**
    * UTC timestamp of creation date of branding theme
    */
    'createdDateUTC'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brandingThemeID",
            "baseName": "BrandingThemeID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "logoUrl",
            "baseName": "LogoUrl",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "BrandingTheme.TypeEnum"
        },
        {
            "name": "sortOrder",
            "baseName": "SortOrder",
            "type": "number"
        },
        {
            "name": "createdDateUTC",
            "baseName": "CreatedDateUTC",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return BrandingTheme.attributeTypeMap;
    }
}

export namespace BrandingTheme {
    export enum TypeEnum {
        INVOICE = <any> 'INVOICE'
    }
}
