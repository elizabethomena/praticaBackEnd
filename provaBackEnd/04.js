const fs = require('fs')

fs.rename('arquivo.txt', '04.txt', (err) => {
    if (err) throw (err)
    console.log(`O arquivo foi renomeado com sucesso!`)
})