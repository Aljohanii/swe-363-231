const fs = require('fs');
const path = require('path');

// Check command-line arguments
if (process.argv.length !== 4) {
    console.error('Usage: node copyFiles.js <source_directory> <target_directory>');
    process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

// Check if target directory exists, if not, create it
if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory);
}

// Extensions to filter for
const validExtensions = ['.txt', '.jpg'];

// Read the source directory
fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter files by extensions
    const matchingFiles = files.filter((file) => {
        const fileExtension = path.extname(file);
        return validExtensions.includes(fileExtension);
    });

    // Copy the matching files to target directory
    matchingFiles.forEach((file) => {
        const sourceFilePath = path.join(sourceDirectory, file);
        const targetFilePath = path.join(targetDirectory, file);

        fs.copyFile(sourceFilePath, targetFilePath, (err) => {
            if (err) {
                console.error(`Error copying file ${file}: ${err}`);
            } else {
                console.log(`Copied ${file} to ${targetDirectory}`);
            }
        });
    });
});
