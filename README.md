# angular-ui-grunt-seed

This project is a seed that can be used to build apps based on AngularJS with "ui-router". If you need instructions about the building process, see the next tips.

> This project uses Grunt as task manager.
> Please install Grunt globally for correct
> execution.

### Installation
Clone the current repository with
```sh
$ git clone https://github.com/zombcode/angular-ui-grunt-seed.git
```

Before running, execute the installation command
```sh
$ npm install
```

Simple. At this time you can code your own angularJS - ui-router project with
```sh
$ npm start
```

### Tasks
The current grunt taks are:

```sh
$ grunt css
```
> This "css" task concats, compile and minify all SCSS files.

```sh
$ grunt build
```
> The "build" task compile all ES6 scripts to js, compact all of this
> in one file for uglify, execute "css" task and copy all of this to
> dist directory.

```sh
$ grunt serve
```
> The "serve" task execute all others in order,
> run server and open the browser with livereload.

### Livereload

For use livereload you need install this plugin:

[https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei]

[https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei]: <https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei>

### Version
0.0.1
