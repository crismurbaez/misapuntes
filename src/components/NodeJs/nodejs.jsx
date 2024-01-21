import React from "react";
import s from "./nodejs.module.css"

export default function Nodejs() {
    return (
        <div className={s.principal}>
            <h1 className={s.titulo}>Iniciamos con NodeJs</h1>
            <section className={s.texto}>
                <p>Para comenzar a escribir código en el backend de un proyecto,
                    y si decidimos utilizar javascript, nuestra opción será
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            NodeJs
                        </span>
                    </span>.
                    Este es un entorno de ejecución de javascript, es decir un sitio donde
                    podremos ejecutarlo.
                    NodeJs es la base del Stack
                    <span className={s.destacado}>
                        <span className={s.palabraDestacada}>
                            MERN
                        </span>
                    </span>
                    .</p>
                <p>Para iniciar y crear el package.json, en el cual se guardarán todos los datos referentes
                    al proyecto, se deberá escribir en la terminal npm init. El sistema nos pedirá un nombre
                    para el proyecto, la versión, una descripcción, el entry point, los comandos para testing,
                    el repositorio de git, keywords, el autor y el tipo de licencia.
                    Pero no se preocupen por completar
                    todo, sólo colocaremos por ahora: el nombre, la descripción, y el autor,
                    mientras para el resto
                    sólo presionamos enter y se autocompleta.
                </p>
                <p></p>
            </section>

        </div>
    )
};