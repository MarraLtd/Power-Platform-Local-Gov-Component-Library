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
- **Submit enabled - SubmitEnabled** - Enables submit functionality. When this is false, live validation is used. Need to hook up component to a button control to trigger validation with submit functionality.
    - **Default:** True
- **Submit - Submit** - Boolean to trigger the on submit functionality. Only works when SubmitEnabled is set to true.
    - **Default:** False
- **Theme - Theme** - Configures the styling of component elements.
    - **Default:** See [Theme Documentation](../Theme.md).
- **Show day - ShowDay** - Controls the visibility of the day field.
    - **Default:** True
- **Show year - ShowYear** - Controls the visibility of the year field.
    - **Default:** True
- **Default day - DefaultDay** - Day to be used in the date output value when the day field is not visible.
    - **Default:** 01
- **Default year - DefaultYear** - Year to be used in the date output value when the year field is not visible.
    - **Default:** 1972
- **Max date - MaxDate** - Maximum date that will be accepted as an input into the component.
    - **Default:** DateValue("31/12/9999")
        - This is the limit of the maximum date input property, so any date set should not exceed this default.
- **Min date - MinDate** - Minimum date that will be accepted as an input into the component.
    - **Default:** DateValue("01/01/1900")
        - This is the limit of the minimum date input property, so any date set should not precede this default.

### Outputs

- **Value - Value** - Outputs the sanitised date input.
- **Date format - DateFormat** - Outputs common date formats, based on the fields visible in the component.
    - If all fields are visible, the date format output is "dd/mm/yyyy".
    - If the day and month fields are visible but the year field is not visible, the date format output is "dd/mmm".
    - If the month and year fields are visible but the day field is not visible, the date format output is "mmm/yyyy".
- **Has error - HasError** - Boolean value based on whether an error is present in the component.
- **Min height - MinHeight** - Minimum height for all visible elements of the component to be shown. This is responsive to the height of the component, so no part of the component is ever cut off. This is the default value of the component's height property.

### Output Sanitisation

The output for the date component (Date.Value) is a DateValue comprising of the day, month and year inputs. There are exceptions to this, where the fields are not visible in the component.
- If the year field is not visible (i.e. ShowYear is false), then the DateValue will use the default year set as an input property.
- If the day field is not visible (i.e. ShowDay is false), then the DateValue will use the default day set as an input property.

Note, the output sanitisation uses the Date formula. This means when a year is input that is less than 1900, the year output will be the year input + 1900.

Invalid day and month inputs will result in the date output to be incorrect. For example, the input "Day: 31, Month: 13, Year: 2021" will result in an output of "31/1/2022" and the input "Day: -4, Month: 2, Year: 2023" will result in an output of "27/1/2023".

## Error Handling

The format of the day, month and year inputs has been set to numbers only. This restricts the user input, meaning non-numeric values cannot be entered into the inputs.

Below is a list of input cases that the date validation triggers an error for. As per the GDS, empty field errors will be shown first, followed by invalid field errors and then relational date errors.

- **All visible inputs are empty and the date input is required (i.e. Required input property is set to true)** - Triggers when the day, month and year fields are all visible and the user leaves all the inputs empty. For example, the input "Day: , Month: , Year: ".
- **The number of fields with user input is at least 1 but less than the number of visible fields.** - Triggers when the number of fields with user input is greater than 1 but there is at least 1 other field that is visible and empty. For example, the inputs "Day: , Month: 3, Year: " and "Month: , Year: 1996".
- **Day input is 0** - Triggers an error when the day field is visible and the user enters a day input of 0. For example, the input "Day: 0, Month: 3, Year: 1996".
- **Day input is greater than the final day of the entered month and year** - Triggers an error when the day input entered is greater than the final day of the entered month. This also takes account of leap years, where the total number of days in February vary. For example, the inputs "Day: 31, Month: 6, Year: 2005" and "Day: 29, Month: 2, Year: 1995" will trigger an error.
- **Year input is less than 4 digits in length** - Triggers when the year field is visible and the user enters a year input which is less than 4 digits in length. For example, the inputs "Day: 31, Month: 3, Year: 165" and "Month: 2, Year: 12".
- **Any of the inputs that are visible are not a positive integer** - Triggers when the user enters a numerical value that is not a positive integer into any of the day, month or year inputs when they are visible. For example, the inputs "Day: -1, Month: 4, Year: -5" and "Day: .2, Month: .4, Year: 1996" will trigger an error.
- **Month input is less than 1 or greater than 12** - Triggers when the user enters a month input which is less than 1 or greater than 12. For example, the inputs "Day: 24, Month: 0, Year: 2021" and "Day: 12, Month: 15, Year: 2008".

### Relational dates
When using the minimum and maximum date input properties (MinDate and MaxDate respectively), the below list of input cases will also trigger an error.

- **Date is not between the MinDate and the MaxDate (inclusive)** - Triggers when the date input is before the minimum date set in the MinDate input property or after the maximum date set in the MaxDate input property. The error message shown will be dependent on the values of the MinDate and MaxDate input properties (i.e. if the inputs are default values or set to a specific date). 
    - For example:
        - If MinDate is DateValue("13/01/2024") and MaxDate is DateValue("20/01/2024"), the inputs "Day: 11, Month: 1, Year: 2024" and "Day: 22, Month: 1, Year: 2024" will trigger an error of "Date must be between 13/01/2024 and 20/01/2024". 
        - If the current day is 19th August 2024, the MinDate input property is the default and the MaxDate input property is set as DateValue(Today()), then the the input "Day: 21, Month: 8, Year: 2024" will trigger an error of "Date must be today or in the past".