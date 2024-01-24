import React from "react";
import s from "./highlighted.module.css";

export default function Highlighted(word) {
    return (
        <span className={s.highlighted}>
            <span className={s.highlightedWord}>
                {word.children}
            </span>
        </span>
    )
}