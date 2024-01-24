import React from 'react';
import s from "./bodytext.module.css"

const Bodytext = (text) => {
    return (
        <section className={s.texto}>
            {text.children}
        </section>
    )
}

export default Bodytext;