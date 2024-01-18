
import React from 'react';
import s from './navbar.module.css';

export default function Navbar() {
    return (
        <div>
            <header className={s.header}>
                <div className={s.logo}>
                    <div className={s.ovalorojo}></div>
                    <div className={s.ovalodorado}></div>
                    <div className={s.logotexto}>MIS APUNTES</div>
                </div>


                {/* <img className={s.logo} src='./Logo-mis-apuntes2.png'></img> */}
                <div className={s.menu}>
                    <div>INICIO</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JAVASCRIPT</div>
                </div>

            </header>
            {/* <div className={s.linedor}></div> */}
            {/* <div className={s.linered}></div> */}

        </div>

    )
};

