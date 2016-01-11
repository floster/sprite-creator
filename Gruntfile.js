'use strict';
var prefix = 'sprite-';
var	dir = 'ogo';
var mainClass = '.' + prefix + dir;				// = ".sprite-ogo"

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sprite:{
      all: {
        src: 'src/' + dir + '/*.png',
        dest: 'images/dev/' + prefix + dir + '.png',
        destCss: 'css/' + prefix + dir + '.css',
        imgPath: '/images/sprites/' + prefix + dir + '.png',
        padding: 2,
        cssOpts: {
        	cssSelector: function (sprite) { return  mainClass + '.' + sprite.name; }
        }
      }
    },

    imagemin: {                         // Task
	    dynamic: {                        // Target
	      options: {                       // Target options
	        optimizationLevel: 7
	      },
	      files: [{                       // Dictionary of files
	      	expand: true,
	        cwd: 'images/dev/',								// Src matches are relative to this path
	        src: '*.png',						// Actual patterns to match
	        dest: 'images/'						// Destination path prefix
	      }]
		  }
		}

  });

  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('build', ['sprite', 'imagemin']);

};