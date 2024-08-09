const fs = require("fs");
const { XMLParser } = require("fast-xml-parser");
const { argv } = require("process");

const args = argv.slice(2);

const solutionRoot = args[0];
const oldSolutionRoot = args[1];
const msappFolder = args[2];
const libId = args[3];

const filenameRoot = `${solutionRoot}/CanvasApps/${msappFolder}/Src/Components/`;
const metadataFile = `${solutionRoot}/CanvasApps/${libId}.meta.xml`;

const oldSolutionXmlConfig = fs.readFileSync(`${oldSolutionRoot}/CanvasApps/${libId}.meta.xml`, 'utf-8');
const xmlParser = new XMLParser();
const parsedOldSolutionXml = xmlParser.parse(oldSolutionXmlConfig);
const oldAppComponents = JSON.parse(parsedOldSolutionXml.CanvasApp.AppComponents);

const componentConfigs = oldAppComponents.map(x => ({
    component: x.displayName,
    name: x.appComponentName
}));

function updateJson() {
    for (const config of componentConfigs) {
        const filename = `${filenameRoot}${config.component}.json`;
        const file = require(filename);
        file.ComponentManifest.TemplateGuid = config.name;
        file.Name = config.name;
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