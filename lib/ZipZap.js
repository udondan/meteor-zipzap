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
