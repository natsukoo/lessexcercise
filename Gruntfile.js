module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                files:{
                	'css/test-min.css':'css/test.less'
                } 
            },
            yuicompress:{
            	files:{
            		'css/test.css':'css/test-min.css'
            	},
            	option:{
            		yuicompress:true
            	}
            }
        },
        watch: {
            scripts:{
            	files:['css/test.less'],
            	tasks:['less'],
            	options:{
            		spawn:false,
            		interrupt:true,
            	},
            },
        },
    });
 	// require("load-grunt-tasks")(grunt);
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Default task(s).
    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', [ 'less','watch']);
 
    //使用watch，实时编译less成功
 
};