Package.describe({
  summary: "jQuery QR code plugin - a jQuery plugin for generating QR codes"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.qrcode-0.2.js',
  ], 'client'
  );
});