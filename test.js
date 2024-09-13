const mysql = require('mysql2');
const connection = mysql.createConnection('mysql://root:password@localhost:3306/meu_banco');

connection.connect(err => {
    if (err) {
        console.error('Erro de conexão:', err);
    } else {
        console.log('Conectado com sucesso!');
    }
});