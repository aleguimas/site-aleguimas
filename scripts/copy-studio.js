const fs = require('fs');
const path = require('path');

const src = 'studio/dist';
const dest = 'out/studio';

if (fs.existsSync(src)) {
  // Remove destination if it exists
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  
  // Create destination directory
  fs.mkdirSync(dest, { recursive: true });
  
  // Copy files recursively
  function copyRecursive(srcPath, destPath) {
    const stats = fs.statSync(srcPath);
    
    if (stats.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      
      const files = fs.readdirSync(srcPath);
      files.forEach(file => {
        copyRecursive(path.join(srcPath, file), path.join(destPath, file));
      });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  
  copyRecursive(src, dest);
  console.log('Studio copied successfully');
} else {
  console.log('Studio dist not found, skipping copy');
}
