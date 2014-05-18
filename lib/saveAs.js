// Give the JSZip it's saveAs method!
JSZip.prototype.saveAs = function(name, callback) {
  var content = this.generate({type:"blob"});
  if(Meteor.isServer) {
    var fs = Npm.require('fs');
    fs.writeFile("/path/to/filename.zip", content, function(error) {
      if (err) {
        if(typeof callback === "function") {
          callback(error, -1);
        }
        else {
          throw error;
        }
      }
    });
  } else {
    if (JSZip.support.blob) {
      Meteor.saveAs(content, name.replace(/\.zip$/i, "") + ".zip", callback);
    } else {
      var error = new Error("This browser does not support Blob");
      if(typeof callback === "function") {
        callback(error, -1);
      } else {
        throw error;
      }
    }
  }
};
