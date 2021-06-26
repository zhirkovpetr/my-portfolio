import React from "react";
import s from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skill = (props) => {
    return (
        <div className={s.skill} >
            <div className={s.icons}>
                <FontAwesomeIcon className={s.icon} icon={props.icon}/>
            </div>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}


