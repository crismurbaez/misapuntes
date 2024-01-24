import React from "react";
import s from "./main.module.css";

const Main = (main) => {
    return (
        <div className={s.principal}>
            {main.children}
        </div>
    )
};

export default Main;