import React from "react";
import s from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skill = (props) => {
    return (
        <div className={s.skill} >
            <div className={s.icons}>
                <FontAwesomeIcon className={s.icon} icon={props.icon}/>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}


