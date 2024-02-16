import React from "react";
import Main from "../../components/main/main";
import Title from "../../components/title/title";
import Bodytext from "../../components/bodytext/bodytext";
import Highlighted from "../../components/highlighted/highlighted";
import Code from "../../components/Code/code";


const Css = () => {
    return (
        <Main>
            <Title>
                CSS
            </Title>
            <Bodytext>
                <p>CSS</p>
                <p>La propiedad float no es compatible con position absolute. En este artículo: https://lenguajecss.com/css/mascaras-y-recortes/shape-outside/
                    enseña cómo usar shape-outside, que se debe utilizar junto con float. </p>
                <p>Investigar qué es --webKit</p>
                <p>En https://lenguajecss.com/css/mascaras-y-recortes/formas-basicas/ muestra como con clip-path recortar formas básicas de cualquier div,
                    está bueno porque también recorta el texto, imágenes y todo lo que contiene el div, es decir, todos
                    sus hijos </p>

            </Bodytext>
        </Main>
    )
}

export default Css;