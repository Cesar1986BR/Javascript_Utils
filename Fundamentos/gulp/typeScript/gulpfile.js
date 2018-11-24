const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsproject = ts.createProject('tsconfig.json')
 gulp.task('default',()=>{
     return tsproject.src().pipe(tsproject())
     .pipe(gulp.dest('build'))
 })