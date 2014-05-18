// Give the JSZip it's saveAs method!
JSZip.prototype.saveAs = function(name, callback) {
  var content = this.generate({type:"blob"});
  if(Meteor.isServer) {
    var fs = Npm.require('fs');
    fs.writeFile(
      name,
      this.generate({type: "nodebuffer"}),
      function(error) {
        if (error) {
          if(typeof callback === "function") {
            callback(error, -1);
          }
          else {
            throw error;
          }
        }
      }
    );
  } else {
    if (JSZip.support.blob) {
      Meteor.saveAs(
        this.generate({type: "blob"}),
        name.replace(/\.zip$/i, "") + ".zip",
        callback
      );
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
