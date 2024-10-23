# Getting Started

Thank you for using the Local Government Component Library. This page provides the information you'll need to get up and running.

The Local Government Component Library is an organized collection of reusable components for front-end development of Canvas Apps in the domain of Local Government. Key benefits of the component library include:
- Faster app delivery
- Consistency
- Simple maintenance and updates
- Built-in accessibility

The library's components are compliant with Government Design System [GDS](https://design-system.service.gov.uk/patterns/) and meet the [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Accessibility Guidelines.

## Solution download
You can download the current release of the component library [here](https://github.com/MarraLtd/Power-Platform-Local-Gov-Component-Library/releases/download/v0.2.0-alpha/Power-Platform-Local-Gov-Component-Library.zip). You don't need to unzip this file, just import it into Power Platform as outlined below.

## Solution contents
When you import the solution into Power Platform, you will gain access to 3 artefacts:
- **Master - LocalGov Components** - The component library containing the [Address](components/Address.md), [Email](components/Email.md), [Telephone Number](components/TelephoneNumber.md) and [Date](components/Date.md) components.
- **Example App** - A typical canvas application which has all the components on 2 separate user journeys. This can be used as guidance when creating custom functionality and theming for your own applications.
- **LocalGov Components Glossary** - A canvas app displaying each component for exploration of the library and component functionality.

## Importing the solution into an environment
1. From Power Apps, go to Solutions tab in Power Apps Studio.
2. Click Import solution and choose the zip file you downloaded then click Import. The import may take some time, be patient.

You can find further information on the official Microsoft documentation on [Importing Solutions](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/import-update-export-solutions)

## Importing the components into an application
The components themselves are contained in the Master - LocalGov Components component library. To use the components in your own canvas application, follow these steps:
1. Open a canvas application in the environment you downloaded and imported the solution in.
2. Go to the Insert menu on the left > Get more components (file and magnifying glass symbol) > Master - LocalGov Components > Select all components needed > Import.
3. Components can be used in a canvas application as Library Components from the Insert menu.

You can find further information on the official Microsoft documentation on [Importing from a Component Library](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/component-library#import-from-a-component-library)

## Moving solutions using the component library between environments
Moving solutions that use the component library from one environment to another environment requires for a solution containing the component library to be imported separately to the target environment before importing the solutions that use it. This is to avoid dependency issues.

## Optimisation notes
The component library is currently optimised for use on Microsoft Edge browsers during the alpha release. Using the component library with other browsers and mobile devices may have issues at this time.

The date component is currently optimised for settings with the "DD/MM/YYYY" date format. There may be issues when using the date component with other date format settings.