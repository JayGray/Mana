module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      options: {
        paths: 'less'
      },
      default: {
        files: {
          'css/mana.css' : 'less/mana.less'
        }
      },
      compress: {
        options: {
          compress: true
        },
        files: {
          'css/mana.min.css' : 'less/mana.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
