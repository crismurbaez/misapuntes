import React from "react";
import s from "./title.module.css";

const Title = (title) => {
    return (
        <h1 className={s.titulo}>{title.children}</h1>
    )
};

export default Title;