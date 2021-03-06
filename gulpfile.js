// IMPORT MODULES
var fs = require( 'fs' );
var del = require( 'del' );
var gulp = require( 'gulp' );


// DEFINE TASKS
gulp.task( 'default', [ 'write-files', 'delete-files' ], function() {
	console.log( 'INSIDE GULP TASK: `default`' );
} );

gulp.task( 'write-files', function() {
	for ( var i = 0, x = 10; i < x; i++ ) {
		fs.writeFileSync( __dirname + '/src/test-' + i + '.txt', 'Test 123\n', function( err ) {
		} );
	}

	console.log( 'DONE WRITING FILES!' );
	return;
} );

gulp.task( 'delete-files', function() {
	del( [ __dirname + '/src/*' ] )
		.then(
			function( paths ) {
				console.log( 'LOGGING OUT `paths`' );
				console.log( paths );
			}
		);
} );
