// That's a dirty hack! Define module. FileSaver will attach the saveAs method to it. Didn't see any other way how to get the method into meteor...
module = module || {};

// Give the JSZip it's saveAs method!
JSZip.prototype.saveAs = function(name) {
  var content = this.generate({type:"blob"});
  if (JSZip.support.blob && typeof module == "object" && typeof module.exports == "function") {
    module.exports(content, name.replace(/\.zip$/i, "") + ".zip");
  } else {
    // saveAs does not work in all browsers (e.g. not in current Safari).
    // We will add downloadify for unsupported browsers later
    console.log("Unsupported environment");
  }
};
