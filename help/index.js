'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MuiGenerator = module.exports = function MuiGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  this.on('end', function () {
    //this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MuiGenerator, yeoman.generators.Base);

MuiGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  console.log('Hello');
};