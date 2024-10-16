const fs = require("fs");
const { XMLParser } = require("fast-xml-parser");
const { argv } = require("process");

const args = argv.slice(2);

const solutionRoot = args[0];
const msappFolder = args[1];

// These are the identifiers from the initial version of the component library.
// Subsequent releases need to match these for the update process to work when imported into Power Apps.
const componentConfigs = [
    {
        component: "Address",
        name: "55de981162aa422586854f20020ecfca",
        templateOriginalName: "bc3cb1fadfe04063aebda5a96a8bc24b"
    },
    {
        component: "Date",
        name: "a5187d8589a94c008ab7ebd19097d64e",
        templateOriginalName: "44a1b8d84f3e44909706ef08046dbd2c"
    },
    {
        component: "Email",
        name: "7e5c2c37dc694c4b951278aacef18be1",
        templateOriginalName: "555afa4fe9274ef792b5315235e467d0"
    },
    {
        component: "TelephoneNumber",
        name: "47efd4e80b344d83825b815d090c20a5",
        templateOriginalName: "057428447b724d80bd9c74de1e92658c"
    }
]

function updateJson() {
    const jsonConfigPathRoot = `${solutionRoot}/CanvasApps/${msappFolder}/Src/Components/`;

    for (const config of componentConfigs) {
        const filename = `${jsonConfigPathRoot}${config.component}.json`;
        const file = require(filename);

        const inputFileConfig = {
            ComponentManifest_TemplateGuid: file.ComponentManifest.TemplateGuid,
            Name: file.Name,
            TemplateOriginalName: file.TemplateOriginalName
        };

        console.log(`Updating ${config.component} config from ${JSON.stringify(inputFileConfig)} to ${JSON.stringify(config)}`);

        file.ComponentManifest.TemplateGuid = config.name;
        file.Name = config.name;
        file.TemplateOriginalName = config.templateOriginalName;
        fs.writeFileSync(filename, JSON.stringify(file, null, 2));
    }
}

function updateXml() {
    const metadataFile = `${solutionRoot}/CanvasApps/ma_masterlocalgovcomponents_256ee.meta.xml`;

    const inputFileXmlContents = fs.readFileSync(metadataFile, 'utf-8');
    const xmlParser = new XMLParser();
    const parsedInputFilelXmlContents = xmlParser.parse(inputFileXmlContents);
    const appComponents = JSON.parse(parsedInputFilelXmlContents.CanvasApp.AppComponents);
    for (const config of componentConfigs) {
        const entry = appComponents.find(x => x.displayName === config.component);
        console.log(`Updating ${config.component} XML appComponentName to ${config.name}`);
        entry.appComponentName = config.name;
    }
    const newXmlContents = inputFileXmlContents.replace(/<AppComponents>.*<\/AppComponents>/, `<AppComponents>${JSON.stringify(appComponents)}</AppComponents>`);
    fs.writeFileSync(metadataFile, newXmlContents);
}

updateJson();
updateXml();