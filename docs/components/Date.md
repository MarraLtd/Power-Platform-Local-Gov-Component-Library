# Date Component

## Description

The date component can be used whenever a user has to enter a date in the UK date format. It offers out of the box validation and gives tailored error messages based on input.

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
- **Default day - DefaultDay** - Day to be used when the day field is not visible.
    - **Default:** 01
- **Default year - DefaultYear** - Year to be used when the year field is not visible.
    - **Default:** 1972
- **Max date - MaxDate** - Maximum date that will be accepted as an input into the component.
    - **Default:** DateValue("31/12/9999")
- **Min date - MinDate** - Minimum date that will be accepted as an input into the component.
    - **Default:** DateValue("01/01/1900")

### Outputs

- **Value - Value** - Outputs the sanitised date input.
- **Date format - DateFormat** - Outputs common date formats, based on the fields visible in the component.
    - If all fields are visible, the date format output is "dd/mm/yyyy".
    - If the day and month fields are visible but the year field is not visible, the date format output is "dd/mm".
    - If the month and year fields are visible but the day field is not visible, the date format output is "mm/yyyy".
- **Has error - HasError** - Boolean value based on whether an error is present in the component.
- **Min height - MinHeight** - Minimum height for all visible elements of the component to be shown. This is responsive to the height of the component, so no part of the component is ever cut off. This is the default value of the component's height property.

### Output Sanitisation

The output for the date component (Date.Value) is a DateValue comprising of the day, month and year inputs. There are exceptions to this, where the fields are not visible in the component.
- If the year field is not visible (i.e. ShowYear is false), then the DateValue will use the default year set as an input property.
- If the day field is not visible (i.e. ShowDay is false), then the DateValue will use the default day set as an input property.

## Error Handling

Below is a list of input cases that the date validation triggers an error for.

- **All visible inputs are empty and the date input is required (i.e. Required input property is set to true)** - Triggers when the day, month and year fields are all visible and the user leaves all the inputs empty. For example, the input "Day: , Month: , Year: ".
- **The number of fields with user input is at least 1 but less than the number of visible fields.** - Triggers when the number of fields with user input is greater than 1 but there is at least 1 other field that is visible and empty. For example, the inputs "Day: , Month: 3, Year: " and "Month: , Year: 1996".
- **Day input is 0** - Triggers an error when the day field is visible and the user enters a day input of 0. For example, the input "Day: 0, Month: 3, Year: 1996".
- **Day input is greater than 30 for a month input of 4, 6, 9 or 11** - Triggers an error when the day field is visible and a user enters a day input greater than 30 with a month input of 4, 6, 9 or 11. For example, the input "Day: 31, Month: 6, Year: 2005".
- **Day input is greater than 31 for a month input of 1, 3, 5, 7, 8, 10 or 12** - Triggers an error when the day field is visible and a user enters a day input greater than 31 with a month input of 1, 3, 5, 7, 8, 10 or 12. For example, the input "Day: 32, Month: 1, Year: 2024".
- **Day input is greater than 28 for a month input of 2 and a year input which is not a leap year** - Triggers when the day and year fields are visible and the user enters a day input greater than 28 for a month input of 2 and a year input which is not a leap year. For example, the input "Day: 29, Month: 2, Year: 1995".
- **Day input is greater than 29 for a month input of 2 and a year input which is a leap year** - Triggers when the day and year fields are visible and the user enters a day input greater than 29 for a month input of 2 and a year input which is a leap year. For example, the input "Day: 30, Month:2, Year: 1996"
- **Year input is less than 4 digits in length** - Triggers when the year field is visible and the user enters a year input which is less than 4 digits in length. For example, the inputs "Day: 31, Month: 3, Year: 165" and "Month: 2, Year: 12".
- **Any of the inputs that are visible are not an integer** - Triggers when the user enters a numerical value that is not an integer into any of the day, month or year inputs when they are visible. For example, the input "Day: -1, Month: 4, Year: -5".
- **Month input is less than 1 or greater than 12** - Triggers when the user enters a month input which is less than 1 or greater than 12. For example, the inputs "Day: 24, Month: 0, Year: 2021" and "Day: 12, Month: 15, Year: 2008".

### Relational dates
When using the minimum and maximum date input properties (MinDate and MaxDate respectively), the below list of input cases will also trigger an error.

- **Date is in the future when it needs to be the current day or in the past** - Triggers when the minimum date set in the MinDate input property is the default, the maximum date set in the MaxDate input property is set as the current day and the date entered by the user is after the current day. For example, if the current day is 19th August 2024, the input "Day: 21, Month: 8, Year: 2024" will trigger an error.
- **Date is in the past when it needs to be the current day or in the future** - Triggers when the minimum date set in the MinDate input property is set as the current day, the maximum date in the MaxDate input property is the default and the date entered by the user is before the current day. For example, if the current day is 14th July 2024, the input "Day: 10, Month: 6, Year: 2023" will trigger an error.
- **Date is not the same as or after the MinDate** - Triggers when the minimum date has been changed from the default in the MinDate input property, the maximum date in the MaxDate input property is the default and the date entered by the user is before the minimum date. For example, if the MinDate is set as 28th February 2024, the input "Day: 24, Month: 2, Year: 2024" will trigger an error.
- **Date is not the same as or before the MaxDate** - Triggers when the minimum date in the MinDate input property is the default, the maximum date has been changed from the default in the MaxDate input property and the date entered by the user is after the maximum date. For example, if the the MaxDate is set as 19th November 2005, the input "Day: 25, Month: 1, Year: 2006" will trigger an error.
- **Date is not between the MinDate and the MaxDate (inclusive)** - Triggers when the date input is before the minimum date set in the MinDate input property or after the maximum date set in the MaxDate input property. For example, if MinDate is DateValue("13/01/2024") and MaxDate is DateValue("20/01/2024"), the inputs "Day: 11, Month: 1, Year: 2024" and "Day: 22, Month: 1, Year: 2024" will trigger an error.