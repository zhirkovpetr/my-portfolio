import React from "react";
import s from './Work.module.css';

export const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.icon}>
               <a href={props.link} target="_blank"><img src={props.picture} alt={'picture work'}/></a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}


