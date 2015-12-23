exports.config = {
	//The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // framework: 'jasmine2',
  
  onPrepare: function() {
    browser.driver.manage().window().maximize();

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: 'testresults',
      filePrefix: 'reportXMLoutput'
    }));
  },

 //Here we specify the name of the specs files.
  suites: {
  	healthcheck: 'spec.js'
    current: 'current_spec.js'
  },
  
  jasmineNodeOpts: {
  	showColors: true,
  	//realtimeFailure: true,
    //isVerbose: false
  }
	
};