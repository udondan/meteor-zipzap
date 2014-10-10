ZipZap
=============

A Zip package for Meteor. Create, read and edit .zip files on server and client.

##Status

**Experimental!** This module is not stable due to lack of Browser support.

The raw zip data can be generated just fine. The problem is, there is no cross-browser support for saving local content to a file. Please do not ask for specific browser fixes here. The problem needs to be addressed in [FileSaver.js][2].

See browser limitations below.

##Online Demo
https://zipzap.meteor.com/

Code for demo: https://github.com/udondan/meteor-zipzap-demo


##Install
```
meteor add udondan:zipzap
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

Currently known to **not work**:
 - **Internet Explorer** < 10
 - **Safari** 5 on Windows
 - All browsers on **iOS**
     - You could force Safari to show an open-with dialog if you'd overwrite the native Blob() with the shipped one. But as iOS can not handle Zip files there is not much left to do, other than sending it to an app like Google Drive, Dropbox or Box.
     - All others have no reaction

**Limited** support:
 - **Safari** 7 on OS X, due to limited support of opening Blob URLs:
     - files up to ~150MB are saved with name "Unknown" (loaded with data-uri). It's not recommended to create such big files, Safari is unresponsive for several minutes before the file is finally saved. It's probably hardware specific, but for me it loads for about 1~2 seconds per zipped MB.
     - Bigger files are simply ignored by Safari, again after blocking some time.



##Used software
 - [JSZip][1] for working with Zip files
 - [FileSaver.js][2] for saving client side generated files
 - [Blob.js][3] for Blob support in browsers which have no native implementation


  [1]: https://github.com/Stuk/jszip
  [2]: https://github.com/eligrey/FileSaver.js
  [3]: https://github.com/eligrey/Blob.js
