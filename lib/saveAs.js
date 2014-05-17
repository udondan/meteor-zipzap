// Give the JSZip it's saveAs method!
JSZip.prototype.saveAs = function(name, callback) {
  var content = this.generate({type:"blob"});
  if (JSZip.support.blob) {
    Meteor.saveAs(content, name.replace(/\.zip$/i, "") + ".zip", callback);
  } else {
    console.log("Unsupported environment");
  }
};
