# Theme Customization

## Description

The theme contract defines which styling properties can be customized, to change how the components look.

It is set via the Theme property on each component, which is a Record which maps theme input to value. A default Record is provided, and you can modify a subset of properties you wish to change.

```
{
    Font: "Arial",
    Color: "#000000",
    ErrorBarGap: 5,
...
}
```

If a name is missing from the Theme input property, the component will fall back to an internal default.

Color values are all provided as Hex text.

Size values are all provided as Number, and follow the existing sizes used within Power Platform for font sizes, padding etc.

### Customizable Properties

- **ErrorFontColor** - The color to use for the text in error messages
    - **Type**: Color
    - **Default**: "#d4351c"

- **ErrorBarColor** - The color to use for the bar displayed when the component has an error
    - **Type**: Color
    - **Default**: "#d4351c"

- **ErrorBarWidth** - The width of the bar displayed when the component has an error
    - **Type**: Size
    - **Default**: 5

- **ErrorBarGap** - The gap between the error bar and the component when the component has an error
    - **Type**: Size
    - **Default**: 15

- **ErrorBorderColor** - The color to use for the border of the input controls when the component has an error
    - **Type**: Color
    - **Default**: "#d4351c"

- **TitleSize** - Size of the font used for the component title
    - **Type**: Size
    - **Default**: 32

- **Size** - Size of the font used for all text apart from the component title
    - **Type**: Size
    - **Default**: 16

- **Font** - Font used for the text of the component. This can be any supported font within Power Apps, e.g. "Arial", "Times New Roman" etc.
    - **Type**: Text
    - **Default**: "Arial"

- **TitleColor** - Color of the text in the component title
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **Color** - Color of all text apart from the component title and error message
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **InputBorderThickness** - Thickness of the border around input controls
    - **Type**: Size
    - **Default**: 2

- **InputBorderRadiusTopLeft** - Radius of the border of the top left corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size
    - **Default**: 0

- **InputBorderRadiusTopRight** - Radius of the border of the top right corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size
    - **Default**: 0

- **InputBorderRadiusBottomLeft** - Radius of the border of the bottom left corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size
    - **Default**: 0

- **InputBorderRadiusBottomRight** - Radius of the border of the bottom right corner of input controls. 0 is a square corner, increase the value to increase the roundness
    - **Type**: Size
    - **Default**: 0

- **InputBorderColor** - Color of the border around input controls
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **InputFill** - Color of the background of input controls
    - **Type**: Color
    - **Default**: "#ffffff"

- **InputPressedBorderColor** - Color of the border around input controls when the input is pressed
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **InputPressedColor** - Color of the text in input controls when the input is pressed
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **InputPressedFill** - Color of the background of input controls when the input is pressed
    - **Type**: Color
    - **Default**: "#ffffff"

- **InputHoverBorderColor** - Color of the border around input controls when the input is hovered over
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **InputHoverColor** - Color of the text in input controls when the input is hovered over
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **InputHoverFill** - Color of the background of input controls when the input is hovered over
    - **Type**: Color
    - **Default**: "#ffffff"

- **InputDisabledBorderColor** - Color of the border around input controls when the component is in disabled mode
    - **Type**: Color
    - **Default**: "#a6a6a6"

- **InputDisabledColor** - Color of the text in input controls when the component is in disabled mode
    - **Type**: Color
    - **Default**: "#a6a6a6"

- **InputDisabledFill** - Color of the background of input controls when the component is in disabled mode
    - **Type**: Color
    - **Default**: "#f4f4f4"

- **IconColor** - Color of the icon which is optionally shown within the input
    - **Type**: Color
    - **Default**: "#0b0c0c"

- **GapVertical** - Gap between controls within the component in the vertical direction
    - **Type**: Size
    - **Default**: 10

- **GapHorizontal** - Gap between controls within the component in the horizontal direction
    - **Type**: Size
    - **Default**: 20