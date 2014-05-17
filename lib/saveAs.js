// Give the JSZip it's saveAs method!
JSZip.prototype.saveAs = function(name, fallbackCallback) {
  var content = this.generate({type:"blob"});
  if (JSZip.support.blob) {
    module.exports(content, name.replace(/\.zip$/i, "") + ".zip", fallbackCallback);
  } else {
    console.log("Unsupported environment");
  }
};
