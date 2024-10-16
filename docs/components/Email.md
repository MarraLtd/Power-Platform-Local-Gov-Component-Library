# Email Component

## Description

The email component can be used whenever a user has to enter an email address. It offers out of the box validation against the standard email address format and gives tailored error messages based on input.

The [GDS guidance for emails](https://design-system.service.gov.uk/patterns/email-addresses/) was used as a basis for the component and [WCAG2.2](https://www.w3.org/WAI/WCAG22/Understanding/) compliance is offered out of the box.

## Inputs and Outputs

The component has various custom inputs which dictate the functionality, styling and error handling of the component. 

We show the display name of the property as well as its advanced name in the form **Display name - AdvancedName**

There are also custom output properties which can be used to reference component input values and state in other controls. 

### Inputs

- **Title - Title** - Text to be shown as the title.
    - **Default:** What is your Email?

- **Subtitle - Subtitle** - Text to be shown as the subtitle.
    - **Default:** Enter a valid email

- **Show title - ShowTitle** - Boolean value that controls the title visibility.
    - **Default:** True

- **Show subtitle - ShowSubtitle** - Boolean value that controls the subtitle visibility.
    - **Default:** True

- **Required - Required** - Boolean value that controls whether the text input is required or optional.
    - **Default:** True

- **Submit enabled - SubmitEnabled** - Enables submit functionality. When this is false, live validation is used. To hook up submit functionality to an external control see [Form Actions docs](./../FormActions.md).

    - **Default:** True

- **Submit - Submit** - Boolean to trigger the on submit functionality. Only works when SubmitEnabled is set to true.
    - **Default:** False

- **Theme - Theme** - Configures the styling of component elements.
    - **Default:** See [Theme Documentation](../Theme.md).

- **Show icon - ShowIcon** - Boolean value that controls visibility of the email icon.
    - **Default:** False

- **Disabled - Disabled** - Boolean value that controls whether the text input is in edit or disabled mode. While true the input is disabled and whilst false the input can be typed into.
    - **Default:** False

- **Default - Default** - When text is set, this defines the default email a user sees when they navigate to the component.
    - **Default:** ""

### Outputs

- **Value** - Outputs the sanitised text input.

- **HasError** - Boolean value based on whether an error is present in the component.

- **RawValue** - Outputs the raw, unsanitised text input. This means exactly how the user enters the value.

- **MinHeight** - Minimum height needed for all visible elements of the component to be shown. This is responsive to the height of the component, so no part of the component is ever cut off. This is the default value of the component's height property.

### Output Sanitisation

The sanitised output (Email.Value) is the result of 2 transformations on the user's input (Email.RawValue)

- **Casing** - All alphabetic input is converted to lower case

- **Whitespace** - All whitespace is removed from the output regardless of whether this is valid whitespace (before or after the email) or invalid (internal to the email string).

## Error Handling

Below is a list of input cases that the email validation triggers an error for. The validation we used is deliberately conservative so that there is no case where a valid email triggers an error. 

Note the username, mail server and domain are not validated against real versions, so "a@b.c" would be a valid email.

All errors beside empty input give the "Enter an email address in the correct format, like name@example.com" error message.

- **Empty Input** - Triggers when user does not enter an input where the field is required. This gives the error message "Enter an email address". Also triggered when whitespace is entered into a required field

- **No Domain** - Triggers when there is no domain on the end of the email. For example, the input "tester@software.".

- **No Mail Server** - Triggers when there is no mail server in the middle of the email. For example, the input "test@.com".

- **No Username** - Triggers when there is no username at the start of the email. For example, the input "@software.com".

- **Multiple @ symbols** - Triggers when there are 2 or more @ symbols anywhere in the email.

- **No @ symbol** - Triggers when no @ symbol in the email since this is a required part of every email address

- **No . symbol** - Triggers when no . symbol in the email since this is a required part of every email address.

- **Internal Whitespace** - Triggers when there is any whitespace separating 2 non-empty sections of the email. Note, whitespace is valid before the first character of the email and after the last, although this is removed under sanitisation.

- **Character Limit** - There is a 254-character limit on the email field as mandated by the [RFC3696](https://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690), it will not allow a user to enter more characters than this. 




