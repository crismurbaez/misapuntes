import React from "react";
import s from "./nodejs.module.css"
import Main from "../../components/main/main";
import Title from "../../components/title/title";
import Bodytext from "../../components/bodytext/bodytext";
import Code from "../../components/Code/code";
import Highlighted from "../../components/highlighted/highlighted"

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
                <p>Luego necesitaremos instalar dos paquetes: express y cors. En donde express es un framework
                    de código abierto y sin licencia para Node.js que facilita la creación de aplicaciones web y API.
                    Y CORS (Cross-Origin Resource Sharing) permite solicitudes HTTP desde diferentes
                    dominios a nuestra API.
                    Para ello escribiremos
                    <Highlighted>"npm install express cors"</Highlighted>
                    Una vez instalados, se crea un archivo
                    <Highlighted>"app.js"</Highlighted>
                    . Elegimos este nombre ya que el sistema lo coloca como entry point,
                    pero lo puedes cambiar a tu gusto.
                    En este archivo escribiremos el código de nuestro servidor:
                    <Code
                        languaje={'javascript'}
                        code={`
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
                    />
                </p>
                <p>
                    Para proteger nuestra aplicación de vulnerabilidades web comunes
                    como ataques XSS, Clickjacking y MIME Sniffing. Instalaremos
                    <Highlighted>helmet</Highlighted> ¿Por qué es útil? Helmet configura automáticamente
                    varios encabezados HTTP que ayudan a proteger tu aplicación.
                    Entonces debemos escribir:
                    <Highlighted> "npm i helmet" </Highlighted>
                    Un ejemplo de uso sería:
                    <Code
                        languaje={'javascript'}
                        code={`
                        const helmet = require('helmet');

                        app.use(helmet());
                            `
                        }
                    />
                </p>
                <p>
                    Si queremos ayuda para depurar errores, analizar el tráfico
                    y mejorar el rendimiento de tu aplicación. Instalaremos  <Highlighted>morgan</Highlighted>
                    , de la misma manera que las veces anteriores: <Highlighted>"npm i morgan"</Highlighted>
                    Y para utilizarlo escribiremos:
                    <Code
                        languaje={'javascript'}
                        code={`
                        const morgan = require('morgan');

                        app.use(morgan('dev')); // Formato de registro 'dev'
                            `
                        }
                    />
                    Opciones de formato de Morgan:
                    <Code
                        languaje={'javascript'}
                        code={`
                        'tiny': :method :url :status :response-time ms
                        'short': :remote-addr :method :url :status :response-time ms - :res[content-length]
                        'dev': :remote-addr :method :url :status :response-time ms - :res[content-length] :header[referer] :header['user-agent']
                            `
                        }
                    />



                </p>
                <p> Necesitaremos instalar el módulo
                    <Highlighted>dotenv</Highlighted>, que
                    se usa para cargar variables de entorno desde un archivo .env.
                    Esto facilita la gestión de variables sensibles como claves API,
                    tokens de acceso o URLs de bases de datos.
                    Ejemplo de uso:
                    Instala mediante  <Highlighted>npm install dotenv</Highlighted>
                    Crea un archivo <Highlighted>.env</Highlighted>  en la raíz de tu proyecto.
                    Define las variables de entorno en el archivo .env, por ejemplo:
                    <Code
                        languaje={'javascript'}
                        code={`
                        PORT=3001
                        DB_URI=aquí_pegamos_la_url_de_la_base_de_datos_mongo_obtenida_en_mongo_atlas
                            `
                        }
                    />
                    Importa dotenv en tu código y ejecuta dotenv.config()
                    <Code
                        languaje={'javascript'}
                        code={`
                        require('dotenv').config();

                        //Para el puerto haremos

                        const PORT = process.env.PORT || 3001;

                        //Usa las variables de entorno en tu código...
                            `
                        }
                    />
                </p>
                <p>
                    Otro middleware muy útil es
                    <Highlighted> multer </Highlighted>, que se utiliza para manejar la subida de archivos
                    en aplicaciones web creadas con Express.js. Facilita el proceso de recepción,
                    almacenamiento y procesamiento de archivos enviados desde formularios HTML o peticiones HTTP.
                    Como siempre, haremos <Highlighted>"npm i multer"</Highlighted>
                    Un ejemplo de uso:

                    <Code
                        languaje={'javascript'}
                        code={`
                        const multer = require('multer');

                        // Se utiliza multer.diskStorage 
                        // para almacenar los archivos en el disco duro
                        // Se configura la función filename para que los 
                        // archivos conserven su nombre original.

                        const storage = multer.diskStorage({  
                          destination: './uploads',           
                          filename: (req, file, cb) => {
                            cb(null, file.originalname);
                          }
                        });
                        
                        const upload = multer({ storage });
                        
                        // Se define la ruta /upload para recibir 
                        // archivos con el campo file. 
                        // El middleware upload se encarga de analizar 
                        // la solicitud y almacenar el archivo.

                        app.post('/upload', upload.single('file'), (req, res) => {
                          res.send('Archivo subido correctamente');
                        });
                            `
                        }
                    />
                </p>
                <p>
                    Antes de seguir, no debemos olvidarnos de crear un archivo,
                    en la raiz del proyecto <Highlighted>.gitignore</Highlighted>, en el
                    debemos colocar todo aquello que no queremos que se suba al repositorio
                    de github, como la carpeta node_modules y el archivo .env </p>
                <p>Escribiremos entonces, dentro del archivo .gitignore:</p>

                <Code
                    languaje={'javascript'}
                    code={`
                        node_modules/
                        .env
                            `
                    }
                />

                <p>
                    Ahora vamos a crear nuestra estructura de carpetas, es decir, el <Highlighted>Scaffold</Highlighted>
                    que en español significa andamio. En este caso vamos a hacer uso de un patrón llamado <Highlighted>MVC</Highlighted>
                    o Modelo Vista Controlador, entonces la estructura de carpetas será afín a ese patrón.
                </p>
                <p>
                    Las carpetas serán:
                    {/* más adelante crear componentes para las listas */}
                    <ul className={s.list}>
                        <li className={s.point}>
                            <Highlighted>models</Highlighted>
                            : aquí irán los modelos de las bases de datos.
                        </li>

                        <li className={s.point}>
                            <Highlighted>controllers</Highlighted>
                            : en ella se guardarán todos los controladores.
                        </li>

                        <li className={s.point}>
                            <Highlighted>routes</Highlighted>
                            : pondremos las rutas. (porque vamos a construir una API se llamará routes y no views)
                        </li>
                        <li className={s.point}>
                            <Highlighted>config</Highlighted>
                            : porque a lo largo del proyecto vamos a ir utilizando diferentes configuraciones.
                        </li>
                        <li className={s.point}>
                            <Highlighted>utils</Highlighted>
                            : aquí irán los helpers que son funciones "ayudantes", por ejemplo como
                            reemplazar la mayúsculas por minúsculas, o las "eñes"
                        </li>
                        <li className={s.point}>
                            <Highlighted>storage</Highlighted>
                            : como vamos a hacer una carga de archivos, los vamos a almacenar aquí.
                        </li>

                    </ul>


                </p>
                <p>
                    En este punto es una buena práctica ya inicializar el repositorio de github,
                    mediante el comando <Highlighted>"git init"</Highlighted>, el cual escribiremos en
                    nuestra consola.
                </p>
                <p>
                    Como base de datos utilizaremos <Highlighted>MongoDB</Highlighted>, entonces
                    instalaremos el paquete que nos ayudará a gestionar la conección con nuestra
                    base de datos, y en la consola escribiremos: <Highlighted>"npm i mongoose"</Highlighted>
                </p>
                <p>
                    Ahora crearemos la conección con la base de datos de mongo, y lo haremos dentro
                    de la carpeta <Highlighted>config</Highlighted>.
                    Crearemos un archivo llamado  <Highlighted>"mongo.js"</Highlighted>.

                    Dentro del archivo escribiremos:
                    <Code
                        languaje={'javascript'}
                        code={`
                        const mongoose = require('mongoose');
                        const dbConnect = ()=>{
                            const DB_URI = process.env.DB_URI; //La conección a la base de datos
                                                               //la traemos de una variable de entorno

                            mongoose.connect(DB_URI, {      //le pasamos los parámetros 
                                useNewUrlParser: true,      //de configuración
                                useUnifiedTopology: true,
                            }, (err, res) => {
                                    if(!err) {
                                        console.log('****Conexión correcta*****')
                                    } else {
                                        console.log('****Error de conexión*****')
                                    }
                            });
                        }
                        module.exports = dbConnect;
                            `
                        }
                    />

                </p>
                <p>
                    Esta conexión la invocamos desde nuestro <Highlighted>app.js</Highlighted>
                    <Code
                        languaje={'javascript'}
                        code={`
                        const express = require('express');  
                        const cors = require('cors');

                        const dbConnect = require('./config/mongo);  //<----requerimos la conexión.
                        
                        const app = express();              
                        const PORT = 3001;                  
                                                            

                        app.use(express.json());            
                        app.use(cors());                    
                        
                        app.get('/', (req, res) => {        
                            res.send('Hello, world!');       
                        })
                        
                        app.listen(PORT, () => {                    
                            console.log(\`listening on \${PORT}\`);    
                        })

                        dbConnect();  //<------aquí realizamos la conexión.
                            `
                        }
                    />
                </p>
                {/* en el minuto 46:00 comienza con los modelos */}
                <p>

                </p>
            </Bodytext>
        </Main>
    )
};