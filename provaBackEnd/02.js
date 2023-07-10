const path = require('path')

const adress = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

console.log(path.dirname(adress))
console.log(path.basename(adress))
console.log(path.extname(adress))

console.log(path.parse(adress))
console.log(path.isAbsolute(adress))