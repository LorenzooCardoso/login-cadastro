const connection = require('../config/db');

async function login(request, response) {
    const email = Array(request.body.email);

    const query = "SELECT email, password FROM users WHERE email = ?";

    connection.query(query, email, (err, results) => {
        if(results.length > 0) {
            const password = request.body.password;
            const passwordQuery = results[0].password;

            if(password === passwordQuery) {
                response
                .status(200)
                .json({
                    succes: true, 
                    message: "Sucesso!",
                    data: results
                })
            } else {
                response
                .status(400)
                .json({
                    success: false,
                    message: "Senha incorreta",
                    data: err
                })
            }
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Email não cadastrado ou incorreto",
                    data: err
                })
        }
    })
}

module.exports = {
    login
}