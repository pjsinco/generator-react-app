var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');

var ReactApp = yeoman.generators.Base.extend({

    promptUser: function() {
        var done = this.async();

        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name?',
        }, {
            type: 'confirm',
            name: 'addFlux',
            message: 'Would you like to add Flux architecture?',
            default: false,
        }, {
            type: 'confirm',
            name: 'addSass',
            message: 'Would you like to add Sass?',
            default: false,
            
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;
            this.addFlux = props.addFlux;
            this.addSass = props.addSass;

            done();

        }.bind(this));
    },

    scaffoldDefault: function() {
        var context = {
            appName: this.appName
        };

        mkdirp.sync('./src/scripts');
        mkdirp.sync('./src/img');
        mkdirp.sync('./src/scripts/utils');
        mkdirp.sync('./src/scripts/components');
        mkdirp.sync('./dist');

        this.fs.copy(
            this.templatePath('_main.js'),
            this.destinationPath('./src/scripts/main.js')
        );

        this.fs.copy(
            this.templatePath('_app.js'),
            this.destinationPath('./src/scripts/components/app.js')
        );

        this.fs.copy(
            this.templatePath('_gitignore.js'),
            this.destinationPath('./.gitignore')
        );

        this.fs.copy(
            this.templatePath('_gulpfile.js'),
            this.destinationPath('./gulpfile.js')
        );

        this.fs.copy(
            this.templatePath('_style.scss'),
            this.destinationPath('./src/sass/style.scss')
        );

        this.fs.copy(
            this.templatePath('_base_index.scss'),
            this.destinationPath('./src/sass/base/index.scss')
        );

        this.fs.copy(
            this.templatePath('_layout_index.scss'),
            this.destinationPath('./src/sass/layout/index.scss')
        );

        this.fs.copy(
            this.templatePath('_utilities_index.scss'),
            this.destinationPath('./src/sass/utilities/index.scss')
        );

        this.fs.copy(
            this.templatePath('_modules_index.scss'),
            this.destinationPath('./src/sass/modules/index.scss')
        );

        this.fs.copy(
            this.templatePath('_base.scss'),
            this.destinationPath('./src/sass/base/_base.scss')
        );

        this.fs.copy(
            this.templatePath('_variables.scss'),
            this.destinationPath('./src/sass/utilities/_variables.scss')
        );

        this.template('_package.json', './package.json', context);
        this.template('_index.html', './index.html', context);
    },

    scaffoldSass: function() {
        if (this.addSass) {
            mkdirp.sync('./src/sass');
            mkdirp.sync('./src/sass/base');
            mkdirp.sync('./src/sass/layout');
            mkdirp.sync('./src/sass/modules');
            mkdirp.sync('./src/sass/utilities');
        }
    },

    scaffoldFlux: function () {
        if (this.addFlux) {
            mkdirp.sync('./src/scripts/actions');
            mkdirp.sync('./src/scripts/stores');


            this.fs.copy(
                this.templatePath('_app-constants.js'),
                this.destinationPath('./src/scripts/app-constants.js')
            );

            this.fs.copy(
                this.templatePath('_app-bootstrap.js'),
                this.destinationPath('./src/scripts/app-bootstrap.js')
            );

            this.fs.copy(
                this.templatePath('_app-dispatcher.js'),
                this.destinationPath('./src/scripts/app-dispatcher.js')
            );

            this.fs.copy(
                this.templatePath('_example-store.js'),
                this.destinationPath('./src/scripts/stores/example-store.js')
            );

            this.fs.copy(
                this.templatePath('_server-action-creator.js'),
                this.destinationPath('./src/scripts/actions/server-action-creator.js')
            );

            this.fs.copy(
                this.templatePath('_example-web-api-utils.js'),
                this.destinationPath('./src/scripts/utils/example-web-api-utils.js')
            );


        }
    },

});

module.exports = ReactApp;
