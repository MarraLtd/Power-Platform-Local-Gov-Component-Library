# Getting Started

Thank you for using the component library. This page provides the information you'll need to get up and running.

## Solution contents
The Power-Platform-Local-Gov-Component-Library.zip solution contains:
- **Master - LocalGov Components** - The component library containing the [Address](components/Address.md), [Email](components/Email.md), [Telephone Number](components/TelephoneNumber.md) and [Date](components/Date.md) components.
- **Example App** - A typical canvas application which has all the components on 2 separate user journeys. This can be used as guidance when creating custom functionality and theming for your own applications.
- **LocalGov Components Glossary** - A canvas app displaying each component for exploration of the library and component functionality.

## Importing the solution into an environment
1. From Power Apps, go to Solutions tab in Power Apps Studio.
2. Click Import solution and choose the zip file you downloaded then click Import. The import may take some time, be patient.

## Importing the components into an application
The components themselves are contained in the Master - LocalGov Components component library. To use the components in your own canvas application, follow these steps:
1. Open a canvas application in the environment you downloaded and imported the solution in.
2. Go to the Insert menu on the left > Get more components (file and magnifying glass symbol) > Master - LocalGov Components > Select all components needed > Import.
3. Components can be used in a canvas application as Library Components from the Insert menu.

## Moving solutions using the component library between environments
Moving solutions that use the component library from one environment to another environment requires for a solution containing the component library to be imported separately to the target environment before importing the solutions that use it. This is to avoid dependency issues.

## Optimisation notes
The component library is currently optimised for use on Microsoft Edge browsers during the alpha release. Using the component library with other browsers may have issues at this time.

The date component is currently optimised for settings with the "DD/MM/YYYY" date format. There may be issues when using the date component with other date format settings.