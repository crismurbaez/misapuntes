import React from "react";
import s from "./nodejs.module.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    tomorrowNightBright,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Nodejs() {
    return (
        <div className={s.principal}>
            <h1 className={s.titulo}>Back-End con NodeJs</h1>
            <section className={s.texto}>
                <p>Para comenzar a escribir código en el Back-End de un proyecto,
                    y si decidimos utilizar javascript, nuestra opción será NodeJs.
                    Este es un entorno de ejecución de javascript, es decir un sitio donde
                    podremos ejecutarlo.
                    NodeJs es la base del Stack MERN.</p>
                <p>Para iniciar y crear el
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            package.json
                        </span>
                    </span>
                    , en el cual se guardarán todos los datos referentes
                    al proyecto, se deberá escribir en la terminal
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            npm init
                        </span>
                    </span>
                    . El sistema nos pedirá un nombre
                    para el proyecto, la versión, una descripcción, el entry point, los comandos para testing,
                    el repositorio de git, keywords, el autor y el tipo de licencia.
                    Pero no se preocupen por completar
                    todo, sólo colocaremos por ahora: el nombre, la descripción, y el autor,
                    mientras que para el resto
                    sólo presionamos enter y se autocompleta.
                </p>
                <p>Luego necesitaremos instalar dos paquetes: express y cors.
                    Para ello escribiremos
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            npm install express
                        </span>
                    </span>
                    y lo mismo para
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            cors
                        </span>
                    </span>
                    .
                    Una vez instalados, se crea un archivo
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            index.js
                        </span>
                    </span>
                    . Elegimos este nombre ya que el sistema lo coloca como entry point,
                    pero lo puedes cambiar a tu gusto.
                    En este archivo escribiremos el código de nuestro servidor:
                    <SyntaxHighlighter language="javascript" className={s.codigo} style={tomorrowNightBright} >
                        {
                            `
                        const express = require('express');  //requerimos las librerías a utilizar
                        const cors = require('cors');
                        
                        const app = express();              //creamos la app del servidor
                        const PORT = 3001;                  //guardamos en una constante el puerto que utilizaremos
                                                            //más adelante crearemos una variable de entorno para esto
                        app.use(express.json());            //le pasamos al servidor el formato JSON
                        app.use(cors());                    //le pasamos las cors
                        
                        app.get('/', (req, res) => {         //creamos una ruta inicial con un Hello World para 
                            res.send('Hello, world!');       //comprobar que funciona nuestro servidor.
                        })
                        
                        app.listen(PORT, () => {                    //escuchamos el servidor
                            console.log(\`listening on \${PORT}\`);    //y mostramos el puerto
                        })
                            `
                        }
                    </SyntaxHighlighter>
                </p>
                {/* esto tengo que colocarlo al costado como un comentario aparte del texto general, como en los libros */}
                <p>
                    O también podemos utilizar el generador de projectos de express,
                    ejecutando los siguientes comandos:
                    <SyntaxHighlighter language="javascript" className={s.codigo} style={tomorrowNightBright} >
                        {
                            `
                        npx express-generator
                        npm install
                        npm start
                        `
                        }
                    </SyntaxHighlighter>
                </p>
                <p>De esta manera se crea un template de archivos,
                    con varias dependencias de npm de uso común. Y veremos que en el archivo app.js
                    se incluyen varios middlewares de uso común. </p>
            </section>

        </div>
    )
};