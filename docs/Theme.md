# Theme Customization

## Description

The theme contract defines which styling properties can be customized, to change how the components look.

It is set via the Theme property on each component, which is a Table which maps name to value. A default Table is provided,
and you can modify a subset of properties you wish to change.

```
Table(
    {
        name: "Font",
        value: "Arial"
    },
    {
        name: "Color",
        value: ""#000000
    },
    {
        name: "ErrorBarGap",
        value: 5
    }
    ...
)
```

If a name is missing from the Theme input property, the component will default to the value which was contained in the default Theme Table.

Color values are all provided as Hex text.

Size values are all provided as Number.

### Customizable Properties

#### ErrorFontColor
- **Description**: The color to use for the text in error messages
- **Type**: Color

#### ErrorBarColor
- **Description**: The color to use for the bar displayed when the component has an error
- **Type**: Color

#### ErrorBarWidth
- **Description**: The width of the bar displayed when the component has an error
- **Type**: Size

#### ErrorBarGap
- **Description**: The gap between the error bar and the component when the component has an error
- **Type**: Size

#### ErrorBorderColor
- **Description**: The color to use for the border of the input fields when the component has an error
- **Type**: Color

#### TitleSize
- **Description**: Size of the font used for the component title
- **Type**: Size

#### Size
- **Description**: Size of the font used for the component body
- **Type**: Size

#### Font
- **Description**: Font used for the text of the component. This can be any supported font within Power Apps, e.g. "Arial", "Times New Roman" etc.
- **Type**: Text

#### TitleColor
- **Description**: Color of the text in the component title
- **Type**: Color

#### Color
- **Description**: Color of the text in the component body
- **Type**: Color

#### InputBorderThickness
- **Description**: Thickness of the border around input controls
- **Type**: Size

#### InputBorderRadiusTopLeft
- **Description**: Radius of the border of the top left corner of input controls. 0 is a square corner, increase the value to increase the roundness.
- **Type**: Size

#### InputBorderRadiusTopRight
- **Description**: Radius of the border of the top right corner of input controls. 0 is a square corner, increase the value to increase the roundness.
- **Type**: Size

#### InputBorderRadiusBottomLeft
- **Description**: Radius of the border of the bottom left corner of input controls. 0 is a square corner, increase the value to increase the roundness.
- **Type**: Size

#### InputBorderRadiusBottomRight
- **Description**: Radius of the border of the bottom right corner of input controls. 0 is a square corner, increase the value to increase the roundness.
- **Type**: Size

#### InputBorderColor
- **Description**: Color of the border around input controls
- **Type**: Color

#### InputFill
- **Description**: Color of the background of input controls
- **Type**: Color

#### InputPressedBorderColor
- **Description**: Color of the border around input controls when the input is pressed
- **Type**: Color

#### InputPressedColor
- **Description**: Color of the text in input controls when the input is pressed
- **Type**: Color

#### InputPressedFill
- **Description**: Color of the background of input controls when the input is pressed
- **Type**: Color

#### InputHoverBorderColor
- **Description**: Color of the border around input controls when the input is hovered over
- **Type**: Color

#### InputHoverColor
- **Description**: Color of the text in input controls when the input is hovered over
- **Type**: Color

#### InputHoverFill
- **Description**: Color of the background of input controls when the input is hovered over
- **Type**: Color

#### IconColor
- **Description**: Color of the icon which is optionally shown within the input
- **Type**: Color

#### GapVertical
- **Description**: Gap between controls within the component in the vertical direction
- **Type**: Size

#### GapHorizontal
- **Description**: Gap between controls within the component in the horizontal direction
- **Type**: Size