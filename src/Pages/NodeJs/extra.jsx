// Todo lo que aquí coloque es información extra que puede ser utilizado en el texto
import React from "react";
import Main from "../../components/main/main";
import Title from "../../components/title/title";
import Bodytext from "../../components/bodytext/bodytext";
import Code from "../../components/Code/code";
import Highlighted from "../../components/highlighted/highlighted"

const Extra = () => {
    return (
        <div>
            {/*
            Esta información es de Henry
            esto tengo que colocarlo al costado como un comentario aparte 
            del texto general, como en los libros */}
            <p>
                O también podemos utilizar el generador de projectos de express,
                ejecutando los siguientes comandos:
                <Code
                    language={'javascript'}
                    code={
                        `
                        npx express-generator
                        npm install
                        npm start
                        `
                    } />
            </p>
            <p>De esta manera se crea un template de archivos,
                con varias dependencias de npm de uso común. Y veremos que en el archivo app.js
                se incluyen varios middlewares de uso común. </p>

            <p>
                <Highlighted>Middlewares:</Highlighted>

            </p>
            <p>
                {/* casi toda la información me basé en el video: 
                https://www.youtube.com/watch?v=xRXHQlqA3Ak&t=1611s
                */}
            </p>
        </div>
    )
}
