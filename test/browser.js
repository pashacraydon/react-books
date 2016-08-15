
global.jsdom = require('jsdom');

global.document = jsdom.jsdom(
  '<!DOCTYPE html data-debug=1>' +
    '<head></head>' +
    '<body>' +
      '<div id="mocha-fixture"></div>' +
    '</body>' +
  '</html>'
);

global.document.activeElement = document.body
global.window = document.defaultView;
global.XMLHttpRequest = global.window.XMLHttpRequest;
global.navigator = window.navigator;
