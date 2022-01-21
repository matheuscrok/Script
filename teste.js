const https = require('https');
const request = require("request-promise");
const fs = require('fs');

const express = require('express')
const path = require('path');

const app = express()
const port = 8080


// https://downloadirpf.receita.fazenda.gov.br/irpf/2021/irpf/arquivos/IRPF2021Win32v1.9.exe
const x = request("https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf", (error, res, html) => {
    if (!error && res.statusCode == 200) {

        fs.writeFileSync('/home/crok/Documentos/teste/testesx.html', html, function (erro) {
            if (erro) {
                throw erro;
            }
        });

        console.log("salvo");
        
        

    }
});
console.log(x)



app.get('/', (req, res) => {


    let fileName = '/testesx.html'
    res.sendFile(__dirname + fileName, function (err) {
        if (err) {
            throw err
        } else {
            console.log('Sent:', fileName);
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})