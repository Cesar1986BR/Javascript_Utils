const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default',()=>{

    return gulp.src('src/**/*.js')
    .pipe(babel({  //convert codigo caso broser nao suporte um determinado trecho de código
        mimified: true,
        comments: false,
        presets:["env"]
    }))
    .pipe(uglify())//mimifica
    .on('error',function(err){console.log(err)})
    .pipe(concat('codigo.min.js'))//mimifica o código
    .pipe(gulp.dest('build'))// mimifica e manda pra pasta build
})

