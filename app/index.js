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

    var logo =
        '                   _   \n' +
        '   _ __ ___  _   _(_)  \n' +
        '  | \'_ ` _ \\| | | | |\n' +
        '  | | | | | | |_| | |  \n' +
        '  |_| |_| |_|\\__,_|_| \n' +
        'Welcome to Yeoman. Start your component with mui!\n';

    console.log(logo);
    var defaultConfig = {
        name: 'Component',
        style: 'css',
        author: '',
        email: ''
    };
    var prompts = [
        {
            name: 'name',
            message: 'Component\'s name:',
            default: defaultConfig.name
        },
        {
            type: 'list',
            name: 'style',
            message: 'Choice style engine:',
            choices: ['css', 'less']
        },
        {
            name: 'author',
            message: 'Author\'s name:',
            default: defaultConfig.author
        },
        {
            name: 'email',
            message: 'Author\'s email:',
            default: defaultConfig.email
        }
    ];

    this.prompt(prompts, function (props) {

        this.name = props.name;
        this.author = props.author;
        this.email = props.email;
        this.style = props.style.toLowerCase();
        this.enableLess = (/less/i).test(this.style);
        if (!this.enableLess) {
            this.style = defaultConfig.style;
        }

        cb();
    }.bind(this));
};

MuiGenerator.prototype.app = function app() {
    var src = path.join(this.name, 'src');
    var templates = path.join(this.name, 'templates');

    this.mkdir(this.name);
    this.mkdir(src);
    this.mkdir(templates);

    this.template('example/src/index.js', path.join(src, 'index.js'));
    this.template('example/src/init.js', path.join(src, 'init.js'));
    this.copy('example/src/index.css', path.join(src, 'index.' + this.style));
    this.copy('example/templates/index.html', path.join(templates, 'index.html'));
    this.copy('example/templates/index.php', path.join(templates, 'index.php'));
    this.copy('example/templates/index.vm', path.join(templates, 'index.vm'));
    this.template('_README.md', path.join(this.name, 'README.md'));
    this.template('_package.json', path.join(this.name, 'package.json'));
};