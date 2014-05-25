Package.describe({
  summary: "Create, read and edit .zip files on server and client",
  environments: ['server', 'client']
});

Npm.depends({
  'jszip': '2.2.3'
});

Package.on_use(function (api) {
  api.add_files('vendor/blob/Blob.js', 'client');
  api.add_files('.npm/package/node_modules/jszip/dist/jszip.js', 'client');
  api.add_files('lib/ZipZap.js', ['client', 'server']);
  api.add_files('vendor/filesaver/FileSaver.js', 'client');
  api.export(['ZipZap'], ['server', 'client']);
});
