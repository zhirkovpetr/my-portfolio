import React from "react";
import s from './Work.module.css';


export const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.icon}>
                <a className={s.button} href={props.link} target="_blank">Look</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}


