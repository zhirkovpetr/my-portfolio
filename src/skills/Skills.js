import React from "react";
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.containerSkills}`}>
                <h1 className={s.title}>My skills</h1>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'I learn HTML. I learn HTML. I learn HTML. I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.I learn HTML.'}/>
                    <Skill title={'CSS'} description={'I learn CSS.I learn CSS.I learn CSS'}/>
                    <Skill title={'JS'} description={'I learn JS. I learn JS.I learn JS.I learn JS.I learn JS.I learn JS'}/>
                    <Skill title={'TS'} description={'I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. '}/>
                    <Skill title={'React'} description={'I learn React'}/>
                </div>
            </div>
        </div>
    );
}


