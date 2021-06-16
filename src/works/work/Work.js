import React from 'react';
import s from './Work.module.scss';


export const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.icon} style={props.style}>
                <a className={s.button} href={props.link} target="_blank">Look</a>
            </div>
            <div className={s.projectInfo}>
                <h4 className={s.projectTitle}>{props.title}</h4>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}


