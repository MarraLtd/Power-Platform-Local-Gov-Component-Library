const fs = require("fs");
const { XMLParser } = require("fast-xml-parser");
const { argv } = require("process");

const args = argv.slice(2);

const solutionRoot = args[0];
const msappFolder = args[1];
const libId = args[2];

const filenameRoot = `${solutionRoot}/CanvasApps/${msappFolder}/Src/Components/`;
const metadataFile = `${solutionRoot}/CanvasApps/${libId}.meta.xml`;

const componentConfigs = [
    {
        component: "Address",
        name: "45eb2655633548b18454a8b97b786121",
        templateOriginalName: "ee51f7506a254ce3a3704f66b4b41dae"
    },
    {
        component: "Date",
        name: "1b253d18009947d8a43cd36c53d36fc5",
        templateOriginalName: "56551d97601c40559b3270beaa9afaa7"
    },
    {
        component: "Email",
        name: "08dd160233244e99a4b3475ec1af5439",
        templateOriginalName: "a59cb9031ea14c6b86ac0ad5413275fd"
    },
    {
        component: "TelephoneNumber",
        name: "54d7cafef2f44e558346caca6b4d977e",
        templateOriginalName: "39c54732cbeb4d2f98f4604535066b49"
    }
]

function updateJson() {
    for (const config of componentConfigs) {
        const filename = `${filenameRoot}${config.component}.json`;
        const file = require(filename);
        file.ComponentManifest.TemplateGuid = config.name;
        file.Name = config.name;
        file.TemplateOriginalName = config.templateOriginalName;
        console.log(`Updating ${config.component} JSON Name to ${config.name}`);
        fs.writeFileSync(filename, JSON.stringify(file, null, 2));
    }
}

function updateXml() {
    const originalXmlContents = fs.readFileSync(metadataFile, 'utf-8');
    const xmlParser = new XMLParser();
    const parsedOriginalXmlContents = xmlParser.parse(originalXmlContents);
    const appComponents = JSON.parse(parsedOriginalXmlContents.CanvasApp.AppComponents);
    for (const config of componentConfigs) {
        const entry = appComponents.find(x => x.displayName === config.component);
        console.log(`Updating ${config.component} XML appComponentName to ${config.name}`);
        entry.appComponentName = config.name;
    }
    const newXmlContents = originalXmlContents.replace(/<AppComponents>.*<\/AppComponents>/, `<AppComponents>${JSON.stringify(appComponents)}</AppComponents>`);
    fs.writeFileSync(metadataFile, newXmlContents);
}

updateJson();
updateXml();