var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var cp          = require('child_process');
var prefix      = require('gulp-autoprefixer');
var cssmin      = require('gulp-cssmin');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var ghPages     = require('gulp-gh-pages');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'css-vendor', 'js-vendor', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});



/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }).on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(cssmin({ keepSpecialComments: 0 }))
        .pipe(gulp.dest('css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch([
        '*.html',
        '_layouts/*.html',
        '_posts/*',
        '_includes/*.html',
    ], ['jekyll-rebuild']);
});

/**
 * Deploy
 */

 gulp.task('deploy', ['sass', 'css-vendor', 'js-vendor', 'jekyll-build'], function() {
   return gulp.src('_site/**/*', {dot: true})
     .pipe(ghPages());
 });

 /**
 *  Compile, minify, mobilize vendor css
 */

gulp.task('css-vendor', function () {

    return gulp.src([
            './bower_components/bootstrap/dist/css/bootstrap.css'
        ])
    .pipe(concat("vendors.min.css"))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(cssmin({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('css'));
});

/*
 * Compile and minify js
 */
gulp.task('js-vendor', function () {
    return gulp.src([
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js'
        ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'));
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
