meteor-zipzap
=============

A Zip package for Meteor.

Zip and unzip files on server and client side.

The package uses [JSZip](https://github.com/Stuk/jszip) and [FileSaver](https://github.com/eligrey/FileSaver.js). It extends JSZip with a saveAs() method on client side.

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
var content = zip.generate({type:"nodebuffer"});
var fs = Npm.require('fs');
fs.writeFile("/path/to/filename.zip", content, function(err) {
  if (err) throw err;
});

// Save to file on client
zip.saveAs("filename.zip")
```

##Limitations
The `saveAs` method on client side is not supported by all browsers. It is safe to use this module on server side, but if you want to support all browsers on client side some more work is required. See todo list below. See [here](https://github.com/eligrey/FileSaver.js/blob/master/README.md#supported-browsers) for list of supported browsers.

##Todo
 - Add [Blob.js](https://github.com/eligrey/Blob.js) as it is a dependency for some browsers.
 - Implement saveAs method on server side, so you don't have to deal with `fs.writeFile` yourself.
 - Find solution for saving file in unsupported browsers. [Downloadify](https://github.com/dcneiner/downloadify) (Flash) might be a solution.
 - Contact [eligrey](https://github.com/eligrey) to implement a clean way to import saveAs method into Meteor. (Same might count for Blob.js)

Feel free to send pull requests. :)
