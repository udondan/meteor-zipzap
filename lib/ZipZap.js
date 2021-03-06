if(Meteor.isServer) {
  ZipZap = Npm.require("jszip");
} else {
  ZipZap = JSZip;
}

ZipZap.prototype.saveAs = function(name, callback) {
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
        else {
          typeof callback === "function" && callback(null, 1);
        }
      }
    );
  } else {
    if (JSZip.support.blob) {
      var result = Meteor.saveAs(
        this.generate({type: "blob"}),
        name.replace(/\.zip$/i, "") + ".zip"
      );
      if(typeof callback == "function") {
        callback(null, result.savedAs);
      }
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
