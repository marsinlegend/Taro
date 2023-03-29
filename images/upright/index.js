const fs = require('fs');
const Jimp = require('jimp');

const reversedDir = './reversed';

// Create the "reversed" directory if it doesn't exist
if (!fs.existsSync(reversedDir)) {
  fs.mkdirSync(reversedDir);
}

// Read all image files in the current directory
fs.readdirSync('.')
  .filter(file => file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg'))
  .forEach(file => {
    Jimp.read(file, (err, image) => {
      if (err) throw err;

      // Rotate the image 180 degrees
      image.rotate(180);

      // Save the reversed image to the "reversed" directory
      const reversedPath = `${reversedDir}/${file}`;
      image.write(reversedPath, () => {
        console.log(`Image ${file} reversed and saved to ${reversedPath}`);
      });
    });
  });
