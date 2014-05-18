Package.describe({
  summary: "Zip and unzip files on server and clientside",
  environments: ['server', 'client']
});

Npm.depends({
  'jszip': '2.2.2'
});

Package.on_use(function (api) {
  api.add_files('vendor/blob/Blob.js', 'client');
  api.add_files('vendor/jszip/dist/jszip.js', ['client', 'server']);
  api.add_files('lib/saveAs.js', ['client', 'server']);
  api.add_files('vendor/filesaver/FileSaver.js', 'client');
});
