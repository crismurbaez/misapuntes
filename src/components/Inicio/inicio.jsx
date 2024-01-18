import React from "react";
import s from './inicio.module.css';


export default function Inicio() {
    return (
        <div className={s.principal}>
            <div className={s.bordetexto}>
                <h1 className={s.titulo}>INTRODUCCIÓN</h1>

                <div className={s.texto}>

                    <p> Es mi intención en este blog, escribir todo lo que aprendí de programación.
                        Lo que me interesa es que sea un resumen que me ayude a tener todo en un mismo lugar,
                        sobre los conceptos básicos que hay que saber para comenzar a confeccionar una página web.
                    </p>
                    <div className={s.iconos}>
                        <div>
                            <img src="./images/html.png" alt="icono de HTML" />

                        </div>
                        <div>
                            <img src="./images/css.png" alt="icono de CSS" />
                        </div>
                        <div>
                            <img src="./images/js.png" alt="icono de Javascrip" />
                        </div>

                    </div>
                    <p>
                        El objetivo de este blog, es además exponer los contenidos básicos sobre HTML, CSS, Javascript,
                        y poder poner en práctica estos conocimientos construyendo este blog a partir de estos conceptos.
                        Sobre todo me interesa poder aplicar todo lo que aquí se escriba, porque lo que no se aplica,
                        no se aprende realmente.
                    </p>

                </div>

            </div>

            <div className={s.bordetexto}>
                <h1 className={s.titulo}>Sobre mí</h1>

                <div className={s.texto}>
                    <p> Soy profesora de matemática, me encanta resolver problemas y que sean desafiantes.
                        Pero más me gusta la programación, porque sigo resolviendo problemas con el valor agregado
                        de que se pueden construir muchas cosas útiles, bonitas y que funcionan.
                    </p>
                    <p>
                        Lo impresionante de la programación es la gran variedad de aplicación. En este momento estoy desarrollándome
                        en páginas web, pero en mis tiempos de profesora desarrollé aplicaciones de escritorio para uso personal
                        que me ayudaban en mi trabajo diario, sobre todo cuando tuve que realizar trabajo administrativo,
                        el cual implica realizar tareas repetitivas, y de gran volumen, las cuales se pueden  agilizar
                        fácilmente con software.
                    </p>
                    <p>
                        En resumen, no importa lo que hayas estudiado, o a qué te hayas dedicado antes.
                        Si te gusta la programación, empezá ya, no te detengas. Hay mucha información gratis en internet para aprender
                        programación.
                    </p>

                </div>
            </div>

        </div>
    )
};