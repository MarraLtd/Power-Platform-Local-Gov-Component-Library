# Telephone Number Component

## Description

The telephone number component can be used whenever a user has to enter a telephone number. It offers out of the box validation against the standard telephone number format and gives tailored error messages based on input.

The [GDS guidance for phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/) was used as a basis for the component and [WCAG2.2](https://www.w3.org/WAI/WCAG22/Understanding/) compliance is offered out of the box.

## Inputs and Outputs

The component has various custom inputs which dictate the functionality, styling and error handling of the component. 

We show the display name of the property as well as its advanced name in the form **Display name - AdvancedName**

There are also custom output properties which can be used to reference component input values and state in other controls. 

### Inputs

- **Title - Title** - Text to be shown as the title.
    - **Default:** What is your telephone number?

- **Subtitle - Subtitle** - Text to be shown as the subtitle.
    - **Default:** Enter a valid telephone number

- **Show title - ShowTitle** - Boolean value that controls the title visibility.
    - **Default:** True

- **Show subtitle - ShowSubtitle** - Boolean value that controls the subtitle visibility.
    - **Default:** True

- **Required - Required** - Boolean value that controls whether the text input is required or optional.
    - **Default:** True

- **Submit enabled - SubmitEnabled** - Enables submit functionality. When this is false, live validation is used. To hook up submit functionality to an extenral control see [Form Actions docs](./../FormActions.md).
    - **Default:** True

- **Submit - Submit** - Boolean to trigger the on submit functionality. Only works when SubmitEnabled is set to true.
    - **Default:** False

- **Theme - Theme** - Configures the styling of component elements. 
    - **Default:** See [Theme Documentation](../Theme.md).

- **Show icon - ShowIcon** - Boolean value that controls visibility of the telephone icon.
    - **Default:** False

### Outputs

- **Value** - Outputs the sanitised text input.

- **HasError** - Boolean value based on whether an error is present in the component.

- **RawValue** - Outputs the raw, unsanitised text input. This means exactly how the user enters the value.

- **MinHeight** - Minimum height needed for all visible elements of the component to be shown. This is responsive to the height of the component, so no part of the component is ever cut off. This is the default value of the component's height property.

### Output Sanitisation

The sanitised output (TelephoneNumber.Value) is the result of a transformation on the user's input (TelephoneNumber.RawValue)

- **Remove non-numeric characters** - All non-numeric characters, for example +, whitespace or brackets, are removed.

## Error Handling

Below is a list of input cases that the telephone number validation triggers an error for. The validation we used is deliberately conservative and allows regularly used characters when inputting telephone numbers in addition to numeric digits.

- **Invalid characters** - Triggers when user enters characters which are not valid. Supported characters are numeric digits, and also whitespace, `+`, `-`, `(` and `)`

- **Character Limit** - Triggers when input length is outside the allowed range. Input must be between 6 and 15 characters in length. 