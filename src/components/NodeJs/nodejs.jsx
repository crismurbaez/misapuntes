import React from "react";
import s from "./nodejs.module.css"
import Main from "../main/main";
import Title from "../title/title";
import Bodytext from "../bodytext/bodytext";
import Highlighted from "../highlighted/highlighted"
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    tomorrowNightBright,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Nodejs() {
    return (
        <Main>
            <Title>Back-End con NodeJs</Title>
            <Bodytext>
                <p>Para comenzar a escribir código en el Back-End de un proyecto,
                    y si decidimos utilizar javascript, nuestra opción será NodeJs.
                    Este es un entorno de ejecución de javascript, es decir un sitio donde
                    podremos ejecutarlo.
                    NodeJs es la base del Stack MERN.</p>
                <p>Para iniciar y crear el
                    <Highlighted>"package.json"</Highlighted>



                    , en el cual se guardarán todos los datos referentes
                    al proyecto, se deberá escribir en la terminal
                    <Highlighted>"npm init"</Highlighted>


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
                    <Highlighted>"npm install express"</Highlighted>


                    y lo mismo para
                    <Highlighted>"cors"</Highlighted>

                    Una vez instalados, se crea un archivo
                    <Highlighted>"index.js"</Highlighted>

                    . Elegimos este nombre ya que el sistema lo coloca como entry point,
                    pero lo puedes cambiar a tu gusto.
                    En este archivo escribiremos el código de nuestro servidor:
                    <SyntaxHighlighter language="nodejs" className={s.codigo} style={tomorrowNightBright} >
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
                    <SyntaxHighlighter language="nodejs" className={s.codigo} style={tomorrowNightBright} >
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
            </Bodytext>

        </Main>
    )
};