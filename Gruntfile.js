/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    directories: {
      src: 'src',
      lib: 'lib',
      dest: 'dist',
    },

    // Task configuration.
    // concat: {
    //   basic: {
    //     banner: '<%= banner %>',
    //     stripBanners: true,
    //     src: ['<%= directories.src %>/indent_helper.js'],
    //     dest: '<%= directories.dest %>/<%= pkg.name %>-<%= pkg.version %>.js',
    //   }
    // },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['<%= directories.src %>/indent_helper.js'],
        dest: '<%= directories.dest %>/<%= pkg.name %>.min.js'
      }
    },
    // cssmin: {
    //   combine: {
    //     files: {
    //       '<%= directories.dest %>/bootstrap.customized.min.css': ['<%= concat.bootstrap.dest %>']
    //     }
    //   }
    // },
    jshint: {
      options: {
        // curly: true,
        // eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      basic: {
        src: ['<%= directories.src %>/*.js']
      }
    },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      basic: {
        files: '<%= jshint.basic.src %>',
        tasks: ['jshint:basic']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);

};
