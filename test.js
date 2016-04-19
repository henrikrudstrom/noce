

var Jasmine = require('jasmine');
var jasmine = new Jasmine();
jasmine.loadConfig({
  "spec_dir": "spec",
  "spec_files": [
    "*/*Spec.js",
    "**/*Spec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": false
});



var Reporter = require('jasmine-terminal-reporter');
var reporter = new Reporter({ isVerbose: false });
var oldSpecDone = reporter.specDone;
reporter.specDone = function(result) {
  oldSpecDone(result);
  for (var i = 0; i < result.failedExpectations.length; i++) {
    if (result.failedExpectations[i].stack === undefined) return;
    process.stdout.write('\n' + result.failedExpectations[i].stack
    .split('\n')
    .filter((l) => !l.includes('node_modules'))
    .join('\n')
  );
}
};

jasmine.addReporter(reporter);
jasmine.execute();
