# Address Component

## Description

The address component can be used whenever a user has to enter a UK based address. It offers out of the box validation against the standard UK and British overseas territory postcode format and gives tailored error messages for each field based on input.

The [GDS guidance for addresses](https://design-system.service.gov.uk/patterns/addresses/) was used as a basis for the component and [WCAG2.2](https://www.w3.org/WAI/WCAG22/Understanding/) compliance is offered out of the box.

## Inputs and Outputs

The component has various custom inputs which dictate the functionality, styling and error handling of the component.

We show the display name of the property as well as its advanced name in the form **Display name - AdvancedName**.

There are also custom output properties which can be used to reference component input values and state in other controls.

### Inputs

- **Title - Title** - Text to be shown as the title.
    - **Default:** What is your address?
- **Subtitle - Subtitle** - Text to be shown as the subtitle.
    - **Default:** Enter a valid address
- **Show title - ShowTitle** - Boolean value that controls the title visibility.
    - **Default:** - True
- **Show subtitle - ShowSubtitle** - Boolean value that controls the subtitle visibility.
    - **Default:** - True
- **Submit enabled - SubmitEnabled** - Enables submit functionality. When this is false, live validation is used. To hook up submit functionality to an external control see [Form Actions docs](./../FormActions.md).
    - **Default:** - True
- **Submit - Submit** - Boolean to trigger the on submit functionality. Only works when SubmitEnabled is set to true.
    - **Default:** - False
- **Theme - Theme** - Configures the styling of component elements
    - **Default:** - See [Theme Documentation](../Theme.md).

The following input properties are records that control whether the respective text input is required or optional, controls the visibility of the respective field and controls the width proportion of the text input. Note, a width proportion of 1 results in the text input width equal to the width of the component.

- **Address line 1 - AddressLine1** 
    - **Default:** - {Required: true, Visible: true, InputWidthProportion: 1}
- **Address line 2 - AddressLine2**
    - **Default:** - {Required: true, Visible: true, InputWidthProportion: 1}
- **Town/City - TownCity**
    - **Default:** - {Required: true, Visible: true, InputWidthProportion: 2/3}
- **County - County**
    - **Default:** - {Required: true, Visible: true, InputWidthProportion: 2/3}
- **Postcode - Postcode**
    - **Default:** - {Required: true, Visible: true, InputWidthProportion: 1/3}
- **Country - Country**
    - **Default:** - {Required: true, Visible: true, InputWidthProportion: 2/3}

### Outputs
- **Value** - Outputs the sanitised text inputs as a record with column names AddressLine1, AddressLine 2, TownCity, County, Postcode and Country. To access specific values, the user should use Address.Value.'ColumnName' e.g. to access TownCity, use Address.Value.TownCity.
- **HasError** - Boolean value based on whether an error is present in the component.
- **RawValue** - Outputs the raw, unsanitised text inputs as a record. This means exactly how the user enters the value. The record has columns AddressLine1, AddressLine 2, TownCity, County, Postcode and Country. To access specific raw values, the user should use Address.RawValue.'ColumnName' e.g. to access TownCity, use Address.RawValue.TownCity.
- **MinHeight** - Minimum height for all visible elements of the component to be shown. This is responsive to the height of the component, so no part of the component is ever cut off. This is the default value of the component's height property.

### Output Sanitisation

The sanitised output for postcode (Address.Value.Postcode) is the result of 3 transformations on the user's input (Address.RawValue.Postcode).

- **Characters** - Only alphanumeric characters are included in the output. All other characters are removed.
- **Whitespace** - All whitespace is removed from the output regardless of whether this the whitespace is before, within or after the postcode string.
- **Casing** - All alphanumeric input is converted to upper case.

The sanitised output for all other text inputs aside from postcode is the result of 1 transformation on the user's input.

- **Whitespace** - All whitespace is removed from the output aside from single spaces between words.

## Error Handling

Below is a list of input cases that the address validation triggers an error for.

- **Empty Inputs** - Triggers when a user does not enter an input where the field is required. Also triggered when whitespace is entered into a required field. For each field, individual error messages are shown e.g. for address line 1, the error message is "Enter address line 1, typically the building and street".

All errors in the postcode field besides empty input give the "Enter a full UK postcode" error message. The postcode validation we used is deliberately conservative so that there is no case where a valid UK or British overseas territory postcode triggers an error.

- **Minimum character limit** - Triggers when the postcode is shorter than 5 characters. For example, the input "NW3".
- **Starts with more than 2 letters** - Triggers when the postcode starts with more than 2 letters. For example, the input "GEH11 2JJ".
    - There are exceptions to this, where the first part of the postcode (outcode) corresponds to a British overseas territory. Postcodes where the first part is ASCN, BBND, CIQQ, FIQQ, GX11, PCRN, SIQQ, STHL, TDCU or TKCA are all accepted and will not trigger an error.
- **Does not have 2 letters at the end** - Triggers when the postcode does not end in 2 letters or ends in more than 2 letters. For example, the inputs "G1 1D1" or "G1 1DDD".
- **First part (outcode) starts with a number** - Triggers when the first part of the postcode input starts with a number. For example, the input "1AA 3ED".
- **Second half (incode) starts with a letter** - Triggers when the second part of the postcode input starts with a letter. For example, the input "NE33 FDG".
- **Second half (incode) starts with more than 1 number** - Triggers when the second part of the postcode input starts with more than 1 number. For example, the input "NE1 35DT".
- **Punctuation, special characters or whitespace within the postcode, other than at the usual separator** - Triggers when the postcode includes punctuation, special characters or whitespace within the postcode string, other than at the usual separator between the outcode and incode. For example, the inputs "A A1 1WW", "M1 2W-W" and "M@1 5QA".
