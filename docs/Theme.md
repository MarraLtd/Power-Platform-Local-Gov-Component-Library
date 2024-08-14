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

If a name is missing from the Theme input property, the component will fall back to an internal default.

Color values are all provided as Hex text.

Size values are all provided as Number, and follow the existing sizes used within Power Platform for font sizes, padding etc.

### Customizable Properties

- **ErrorFontColor** - The color to use for the text in error messages
    - **Type**: Color

- **ErrorBarColor** - The color to use for the bar displayed when the component has an error
    - **Type**: Color

- **ErrorBarWidth** - The width of the bar displayed when the component has an error
    - **Type**: Size

- **ErrorBarGap** - The gap between the error bar and the component when the component has an error
    - **Type**: Size

- **ErrorBorderColor** - The color to use for the border of the input fields when the component has an error
    - **Type**: Color

- **TitleSize** - Size of the font used for the component title
    - **Type**: Size

- **Size** - Size of the font used for all text apart from the component title
    - **Type**: Size

- **Font** - Font used for the text of the component. This can be any supported font within Power Apps, e.g. "Arial", "Times New Roman" etc.
    - **Type**: Text

- **TitleColor** - Color of the text in the component title
    - **Type**: Color

- **Color** - Color of all text apart from the component title and error message
    - **Type**: Color

- **InputBorderThickness** - Thickness of the border around input controls
    - **Type**: Size

- **InputBorderRadiusTopLeft** - Radius of the border of the top left corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size

- **InputBorderRadiusTopRight** - Radius of the border of the top right corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size

- **InputBorderRadiusBottomLeft** - Radius of the border of the bottom left corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size

- **InputBorderRadiusBottomRight** - Radius of the border of the bottom right corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size

- **InputBorderColor** - Color of the border around input controls
    - **Type**: Color

- **InputFill** - Color of the background of input controls
    - **Type**: Color

- **InputPressedBorderColor** - Color of the border around input controls when the input is pressed
    - **Type**: Color

- **InputPressedColor** - Color of the text in input controls when the input is pressed
    - **Type**: Color

- **InputPressedFill** - Color of the background of input controls when the input is pressed
    - **Type**: Color

- **InputHoverBorderColor** - Color of the border around input controls when the input is hovered over
    - **Type**: Color

- **InputHoverColor** - Color of the text in input controls when the input is hovered over
    - **Type**: Color

- **InputHoverFill** - Color of the background of input controls when the input is hovered over
    - **Type**: Color

- **IconColor** - Color of the icon which is optionally shown within the input
    - **Type**: Color

- **GapVertical** - Gap between controls within the component in the vertical direction
    - **Type**: Size

- **GapHorizontal** - Gap between controls within the component in the horizontal direction
    - **Type**: Size