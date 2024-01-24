
import React from 'react';
import { Link } from 'react-router-dom'
import s from './navbar.module.css';


export default function Navbar() {

    const menu = [
        {
            name: 'INICIO',
            link: "/inicio"
        },
        {
            name: 'HTML',
            link: "/html"
        },
        {
            name: 'CSS',
            link: "/css"
        },
        {
            name: 'JAVASCRIPT',
            link: "/javascript"
        },
        {
            name: 'NODEJS',
            link: "/nodejs"
        }
    ]

    return (
        <div>
            <header className={s.header}>
                <div className={s.logo}>
                    <div className={s.ovalorojo}></div>
                    <div className={s.ovalodorado}></div>
                    {/* <div ><img style={{ width: "200px", }} src="Logo-mis-apuntes-2.png" alt="" /></div> */}
                    <div className={s.logotexto}>MIS APUNTES</div>
                </div>


                {/* <img className={s.logo} src='./Logo-mis-apuntes2.png'></img> */}
                <menu className={s.menu}>

                    {menu?.map((m) => {
                        return (
                            <div >
                                <Link className={s.elementMenu} to={`${m.link}`}>{m.name}</Link>
                            </div>
                        );
                    })}



                </menu>
            </header >
            {/* <div className={s.linedor}></div>
            <div className={s.linered}></div> */}

        </div >

    )
};

