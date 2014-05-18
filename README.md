ZipZap
=============

A Zip package for Meteor. Create, read and edit .zip files on server and client.


##Install
```
mrt add zipzap
```


##Usage
```
var zip = new ZipZap();

// Add content to Zip file
zip.file('textfile.txt', 'Hello World');
zip.file('folder/image.jpg', binaryContent);
zip.file('folder/document.pdf', binaryContentBase64Encoded, {base64: true});

// Save to file on server
zip.saveAs("/path/to/filename.zip");

// Save to file on client
zip.saveAs("filename.zip");
```


##Limitations
The `saveAs` method on client side is not supported by all browsers.

Currently known to not work:
 - Safari 5 on Windows
 - Safari 7 on OS X saves file as "Unknown" due to limited support of opening Blob URL


##Used software
 - [JSZip][1] for working with Zip files
 - [FileSaver.js][2] for saving client side generated files
 - [Blob.js][3] for Blob support in browsers which have no native implementation


##Todo
 - Complete partially implemented callbacks

  [1]: https://github.com/Stuk/jszip
  [2]: https://github.com/eligrey/FileSaver.js
  [3]: https://github.com/eligrey/Blob.js
