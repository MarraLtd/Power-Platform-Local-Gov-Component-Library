# Accessibility

The component library has been built with accessibility in mind.

The components are compliant with Government Design System [GDS](https://design-system.service.gov.uk/patterns/), and meet the [WCAG](https://www.w3.org/TR/WCAG22/) 2.2 Accessibility Guidelines.

Below, we outline our approach to building for accessibility. We do also realise that accessibility needs can be varied and dependent on individual setups; if you come across an accessibility need which is not met when using our components, please do [raise an issue](https://github.com/MarraLtd/Power-Platform-Local-Gov-Component-Library/issues) and the team will investigate making improvements based on your feedback.

## Accessibility validation

Various tools are used to ensure applications built with our components are accessible

-	[Microsoft Accessibility Insights](https://accessibilityinsights.io/): A full manual and automated assessment currently achieves a 91% passing score for all WCAG 2.1 and 2.2 AA criteria.
-	[Lighthouse Report](https://developer.chrome.com/docs/lighthouse/overview): The report from this tool gives a 100% score.
-	[Axe DevTools](https://www.deque.com/axe/devtools/): This tool detects no issues.

As well as running automated tooling, we manually test our components as they are being developed.

-	NVDA screenreader testing: Verifying tabbing, navigation, headings, error messages, and submission based on WCAG guidelines.
- Screen magnifier testing: Using Windows Magnifier to verify magnification at 6x and 8x, label proximity validation, and synchronisation of magnifier and screenreader feedback. Tested on both desktop and mobile applications.

## Autocomplete

Browsers use the HTML [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute to offer previously entered values to user to automatically fill the input fields without needing to enter from scratch.

As PowerApps is focused on low-code solutions with limited customization, it's not possible to add these attributes to the input controls of our components. Browsers such as Edge do however use other information on the components, for example the labels associated with the input, to suggest which values to autofill based on the context. By using our components across your application, browsers can offer autocomplete to reduce the amount of data needing to be entered manually. For more information see [here](https://web.dev/learn/forms/auto).

## Keyboard input

Browsers use the HTML ['inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) attribute to determine which virtual keyboard to show to a user to input into the field, for example when entering on a mobile device.

Our controls specify the appropriate Text or Numeric input format, to ensure a numeric-only keyboard is shown when entering a date, for example.

## Tab index

Our components set the correct tab index on each input control, to ensure they can be navigated correctly using only the keyboard, for users who do not use a mouse.