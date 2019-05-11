module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    cfg: grunt.file.readJSON("config.json"),
    browserify: {
      build: {
        src: ['app/js/app.js'],
        dest: 'dist/js/app.compact.js',
        options: {
          browserifyOptions: {
            "detectGlobals": false,
            "standalone": "connectpage"
          },
          transform: [
            ["babelify", {
              presets: "babel-preset-es2015"
            }]
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: [
          {
            src: 'dist/js/app.compact.js',
            dest: 'dist/js/app.min.js'
          }
        ]
      }
    },
    concat: {
      scss: {
        src: 'app/css/*.scss',
        dest: 'app/css/build.scss'
      }
    },
    sass: {
      options: {
        sourceMap: false
      },
      frontend: {
        options: {
          outputStyle: 'nested',
        },
        src: 'app/css/build.scss',
        dest: 'app/css/build.css'
      }
    },
    cssmin: {
      frontend: {
        files: [
          {
            src: 'app/css/build.css',
            dest: 'app/css/build.min.css'
          }
        ]
      }
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        dest: 'dist/',
      },
    },
    clean: {
      build: {
        src: ["dist/js/app.compact.js"]
      }
    },
    connect: {
      keepalive: {
        options: {
          base: './dist/',
          port: '<%= cfg.server.port %>',
          host: "localhost",
          keepalive: true,
          open: "http://localhost:<%= cfg.server.port %>/index.html"
        }
      }
    },
    watch: {
      build: {
        files: ["app/**/*.js", "*.js", "app/**/*.html", "app/**/*.css"],
        tasks: ["build"],
        options: {
          livereload: true
        }
      }
    },
    concurrent: {
      build: {
        tasks: ["connect:keepalive", "watch:build"],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  // Load the npm installed tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Register tasks
  grunt.registerTask('serve', ['build', 'concurrent:build']);
  grunt.registerTask('css', ['concat:scss', 'sass:frontend', 'cssmin:frontend']);
  grunt.registerTask('build', ['browserify:build', 'uglify', 'css', 'copy', 'clean:build']);

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['build']);
};
