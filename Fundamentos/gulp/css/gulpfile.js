const gulp = require('gulp')
const sass = require('gulp-sass')// convert de sass pra css
const uglyfycss = require('gulp-uglifycss')// mimifica,ps: nao é o mesmo do javascript
const concat = require('gulp-concat')// concatena todo código



gulp.task('default',['copiaHtml'],()=>{
    gulp.src('src/sass/index.scss')
    .pipe(sass().on('error',sass.logError))//lanca erro caso tenha
    .pipe(uglyfycss({"uglyComments":true}))//mimifica e melhora as linhas comentadas no código
    .pipe(concat('estilo.min.css'))//concatena o código
    .pipe(gulp.dest('build/css'))//pasta de destino
})

gulp.task('copiaHtml',()=>{
    gulp.src('src/index.html')//copia index
    .pipe(gulp.dest('build'))// pra pasta de destino

})