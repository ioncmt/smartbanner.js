import SmartBanner from './smartbanner.js';

let smartbanner;

window.initSmartbanner = function() {
  smartbanner = new SmartBanner();
  smartbanner.publish();
};
