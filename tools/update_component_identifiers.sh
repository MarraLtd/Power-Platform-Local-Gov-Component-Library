#!/bin/bash
set -e

while getopts i:o: flag
do
    case "${flag}" in
        i) NEW_SOLUTION_ZIP=${OPTARG};;
        o) OUTPUT_ZIP=${OPTARG};;
    esac
done

if [ -z "${NEW_SOLUTION_ZIP}" ]; then
    echo "-i arg missing, pass the path to the input solution to upate, e.g -i \"\ComponentLibraries\LocalGovComponentLibrary_1_0_0_1.zip"
    exit 1
fi

if [ -z "${OUTPUT_ZIP}" ]; then
    echo "-o arg missing, pass the path the output solution filename, e.g. -o \"\ComponentLibraries\Release_LocalGovComponentLibrary_1_0_0_1.zip"
    exit 1
fi

if [[ "$NEW_SOLUTION_ZIP" == "$OUTPUT_ZIP" ]]; then
    echo "input zip (-i) and output zip (-o) values must be different"
fi

NEW_SOLUTION_DIR=$(dirname $NEW_SOLUTION_ZIP)
SOLUTION_UNPACKED_FOLDER="${NEW_SOLUTION_DIR}\unpacked_solution"
MSAPP_FILE_PATH="${SOLUTION_UNPACKED_FOLDER}\CanvasApps\ma_masterlocalgovcomponents_256ee_DocumentUri.msapp"
MSAPP_UNPACKED_FOLDER="${SOLUTION_UNPACKED_FOLDER}\CanvasApps\unpacked_msapp"

echo "Unpacking solution"
pac solution unpack --zipfile $NEW_SOLUTION_ZIP --folder $SOLUTION_UNPACKED_FOLDER --packagetype Managed

echo "Unpacking msapp file"
pac canvas unpack --msapp $MSAPP_FILE_PATH --sources $MSAPP_UNPACKED_FOLDER

echo "Deleting Entropy folder"
rm -r "${MSAPP_UNPACKED_FOLDER}\Entropy"

echo "Updating component IDs"
node ./update_msapp_ids.js ${SOLUTION_UNPACKED_FOLDER} "unpacked_msapp"

echo "Packing msapp file"
pac canvas pack --sources ${MSAPP_UNPACKED_FOLDER} --msapp ${MSAPP_FILE_PATH}

echo "Deleting unpacked msapp folder"
rm -r ${MSAPP_UNPACKED_FOLDER}

echo "Packing solution"
pac solution pack --zipfile $OUTPUT_ZIP --folder $SOLUTION_UNPACKED_FOLDER --packagetype Managed

echo "Deleting unpacked solution folder"
rm -r $SOLUTION_UNPACKED_FOLDER