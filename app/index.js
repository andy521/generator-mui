'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MuiGenerator = module.exports = function MuiGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MuiGenerator, yeoman.generators.Base);

MuiGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'name',
    message: 'component name:',
  },{
    name: 'author',
    message: 'Author\'s name:',
  },{
    name: 'email',
    message: 'Author\'s email:',
  },{
    name: 'version',
    message: 'Version:',
  }];

  this.prompt(prompts, function (props) {
    this.name = props.name;
    this.author = props.author;
    this.email = props.email;
    this.version = props.version;
    cb();
  }.bind(this));
};

MuiGenerator.prototype.app = function app() {
  this.mkdir(this.name);
  this.mkdir(this.name+'/src');
  this.mkdir(this.name+'/templates');
  this.copy('example/src/index.js', this.name+'/src/index.js');
  this.copy('example/src/style.css', this.name+'/src/style.css');
  this.copy('example/templates/index.html', this.name+'/templates/index.html');

  this.copy('_README.md', this.name + '/README.md');
  this.template('_package.json', this.name + '/package.json');
};

MuiGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', this.name + '/.editorconfig');
  this.copy('jshintrc', this.name + '/.jshintrc');
};
