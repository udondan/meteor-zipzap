zipzap
=============

A Zip package for Meteor to zip and unzip files on server and clientside.

##Install
```
mrt add zipzap
```

##Usage
```
var zip = new JSZip();

// Add content to Zip file
zip.file('textfile.txt', 'Hello World');
zip.file('folder/image.jpg', binaryContent);
zip.file('folder/document.pdf', binaryContentBase64Encoded, {base64: true});

// Save to file on server
zip.saveAs("/tmp/filename.zip");

// Save to file on client
zip.saveAs("filename.zip");
```

##Limitations
The `saveAs` method on client side is not supported by all browsers.

Currently known to not work:
 - Safari 5 on Windows
 - Safari 7 on OS X saves file as "Unknown" due to limited support of opening Blob URL
