# Prepare release

When ready to release a new version of the component library, we need to ensure that the identifiers used for the components match the previous version, so PowerApps recognise them as the same components when they get updated.

To run this, you should have a zip file of the solution which has been exported from PowerApps, containing the new version of the component library and glossary and example apps. The scripts will process the new release zip file, and produce an output zip file which has updated the identifiers which match the original values.

To run the script:

- Ensure you have npm and node installed. This has been developed using node v21 with npm v10.

- Open a Git bash shell and navigate to the tools directory within this repository.

- Run `npm install`.

- Run `./update_component_identifiers.sh` and pass in the path to the solution zip file, and the path to where you want the output file to be produced. For example, if the new release zip file is located at `C:\Libraries\Input_Release_0_0_0_2.zip` and you want the output to be produced as `C:\Libraries\Output_Release_0_0_0_2.zip`, run `./update_component_identifiers.sh "\Libraries\Input_Release_0_0_0_2.zip" "\Libraries\Output_Release_0_0_0_2.zip"`

- `C:\Libraries\Output_Release_0_0_0_2.zip` now contains the files to add to GitHub as the next release.

