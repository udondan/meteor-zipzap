Package.describe({
  summary: "A Zip package for Meteor",
  environments: ['server', 'client']
});

Package.on_use(function (api) {
  api.add_files('vendor/jszip/lib/dist/jszip.js', ['client', 'server']);
  api.add_files('lib/saveAs.js', 'client');
  api.add_files('vendor/filesaver/FileSaver.js', 'client');
});
