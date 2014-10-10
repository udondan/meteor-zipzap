Package.describe({
  summary: "Create, read and edit .zip files on server and client",
  version: "2.2.2_1",
  git: "https://github.com/udondan/meteor-zipzap.git",
  environments: ['server', 'client']
});

Npm.depends({
  'jszip': '2.2.2'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('vendor/blob/Blob.js', 'client');
  api.add_files('.npm/package/node_modules/jszip/dist/jszip.js', 'client');
  api.add_files('lib/ZipZap.js', ['client', 'server']);
  api.add_files('vendor/filesaver/FileSaver.js', 'client');
  api.export(['ZipZap'], ['server', 'client']);
});
