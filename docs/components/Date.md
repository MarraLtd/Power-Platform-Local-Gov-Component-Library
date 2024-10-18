# Date Component

## Description

The date component can be used whenever a user has to enter a date in the "DD/MM/YYYY" date format. It offers out of the box validation and gives tailored error messages based on input.

The [GDS guidance for dates](https://design-system.service.gov.uk/patterns/dates/) was used as a basis for the component and [WCAG2.2](https://www.w3.org/WAI/WCAG22/Understanding/) compliance is offered out of the box.

## Inputs and Outputs

The component has various custom inputs which dictate the functionality, styling and error handling of the component.

We show the display name of the property as well as its advanced name in the form **Display name - AdvancedName**.

There are also custom output properties which can be used to reference component input values and state in other controls.

### Inputs

- **Title - Title** - Text to be shown as the title.
  - **Default:** What is your date?
- **Subtitle - Subtitle** - Text to be shown as the subtitle.
  - **Default:** Enter a valid date
- **Show title - ShowTitle** - Boolean value that controls the title visibility.
  - **Default:** True
- **Show subtitle - ShowSubtitle** - Boolean value that controls the subtitle visibility.
  - **Default:** True
- **Required - Required** - Boolean value that controls whether the date input is required or optional.
  - **Default:** True
- **Submit enabled - SubmitEnabled** - Enables submit functionality. When this is false, live validation is used. To hook up submit functionality to an external control see [App Integration docs](./../AppIntegration.md).
  - **Default:** True
- **Submit - Submit** - Boolean to trigger the on submit functionality. Only works when SubmitEnabled is set to true.
  - **Default:** False
- **Theme - Theme** - Configures the styling of component elements.
  - **Default:** See [Theme Documentation](../Theme.md).
- **Show day - ShowDay** - Controls the visibility of the day field.
  - **Default:** True
- **Show year - ShowYear** - Controls the visibility of the year field.
  - **Default:** True
- **Max date - MaxDate** - Maximum date that will be accepted as an input into the component, in [DateValue](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datevalue-timevalue) format.
  - **Default:** ""
- **Min date - MinDate** - Minimum date that will be accepted as an input into the component, in [DateValue](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datevalue-timevalue) format.
  - **Default:** ""
- **Disabled - Disabled** - Boolean value that controls whether the date inputs are in edit or disabled mode. While true the inputs are disabled and whilst false the inputs can be typed into.
  - **Default:** False
- **Default - Default** - When set as a [DateValue](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datevalue-timevalue), defines the default date a user sees when they navigate to the component.
  - **Default:** ""
- **Date name - DateName** - String which appears in error messages giving the type of date that has been entered. When left blank or an empty string this defaults to "Date".
  - **Default:** ""

**Note** - For any of the above inputs which have format of [DateValue](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datevalue-timevalue), the language code `en-GB` should be used as the second argument to the DateValue function. This will ensure dates with different orders do not cause component issues.

### Outputs

- **Value - Value** - Outputs the sanitised date input.
- **Has error - HasError** - Boolean value based on whether an error is present in the component.
- **Min height - MinHeight** - Minimum height for all visible elements of the component to be shown. This is responsive to the height of the component, so no part of the component is ever cut off. This is the default value of the component's height property.
- **Raw value - RawValue** - Outputs the unsanitised value in the date input. This is outputted on change of value in each field. There are 3 RawValue outputs:
  - **RawValue.Day** - Outputs the value in the day input.
  - **RawValue.Month** - Outputs the value in the month input.
  - **RawValue.Year** - Outputs the value in the year input.

### Output Sanitisation

The output for the date component (Date.Value) is a DateValue comprising of the day, month and year inputs. There are exceptions to this, where the fields are not visible in the component.

- If the year field is not visible (i.e. ShowYear is false), then the DateValue will use the default year from the Default property. If Default is not set, the value 1900 is used.
- If the day field is not visible (i.e. ShowDay is false), then the DateValue will use the default day from the Default property. If Default is not set, the value 01 is used.

Note, the output sanitisation uses the [DateValue formula](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datevalue-timevalue). This means the year entered must have 4 digits, so any date before the year 1000 is invalid.

The date component's Date.Value property must always be of the DateValue format taking the form DD/MM/YYYY hh:mm. If the component input is [invalid](#error-handling) either for a missing field or an invalid entry (e.g 32nd January), no output is generated. However, a Date.Value output is generated when a [relational date error](#relational-dates) is inputted.

## Error Handling

The format of the day, month and year inputs has been set to numbers only. This restricts the user input, meaning non-numeric values cannot be entered into the inputs.

Below is a list of input cases that the date validation triggers an error for. As per the GDS, empty field errors will be shown first, followed by invalid field errors and then relational date errors. Error messages are specific to the error state, and will give the user more information on which fields need to be corrected.

- **All visible inputs are empty and the date input is required (i.e. Required input property is set to true)** - Triggers when the day, month and year fields are all visible and the user leaves all the inputs empty. For example, the input "Day: , Month: , Year: ".

- **The number of fields with user input is at least 1 but less than the number of visible fields.** - Triggers when the number of fields with user input is greater than 1 but there is at least 1 other field that is visible and empty. For example, the inputs "Day: , Month: 3, Year: " and "Month: , Year: 1996".

- **Field input is 0** - Triggers an error when any field is visible and the user enters a day input of 0. For example, the input "Day: 0, Month: 3, Year: 1996".

- **Day input is greater than the final day of the entered month and year** - Triggers an error when the day input entered is greater than the final day of the entered month. This also takes account of leap years, where the total number of days in February vary. For example, the inputs "Day: 31, Month: 6, Year: 2005" and "Day: 29, Month: 2, Year: 1995" will trigger an error.

- **Year input is less than 4 digits in length** - Triggers when the year field is visible and the user enters a year input which is less than 4 digits in length. For example, the inputs "Day: 31, Month: 3, Year: 165" and "Month: 2, Year: 12".

- **Any of the inputs that are visible are not a positive integer** - Triggers when the user enters a numerical value that is not a positive integer into any of the day, month or year inputs when they are visible. For example, the inputs "Day: -1, Month: 4, Year: -5" and "Day: .2, Month: .4, Year: 1996" will trigger an error.

- **Month input is less than 1 or greater than 12** - Triggers when the user enters a month input which is less than 1 or greater than 12. For example, the inputs "Day: 24, Month: 0, Year: 2021" and "Day: 12, Month: 15, Year: 2008".

### Relational Dates

When using the minimum and maximum date input properties (MinDate and MaxDate respectively), the below list of input cases will also trigger an error.

- **Date is not between the MinDate and the MaxDate (inclusive)** - Triggers when the date input is before the minimum date set in the MinDate input property or after the maximum date set in the MaxDate input property. The error message shown will be dependent on the values of the MinDate and MaxDate input properties (i.e. if the inputs are default values or set to a specific date).
  - For example:
    - If MinDate is DateValue("13/01/2024") and MaxDate is DateValue("20/01/2024"), the inputs "Day: 11, Month: 1, Year: 2024" and "Day: 22, Month: 1, Year: 2024" will trigger an error of "Date must be between 13/01/2024 and 20/01/2024".
    - If the current day is 19th August 2024, the MinDate input property is the default and the MaxDate input property is set as `Today()`, then the the input "Day: 21, Month: 8, Year: 2024" will trigger an error of "Date must be today or in the past".
