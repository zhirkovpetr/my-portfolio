import React from "react";
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {InformationSkills} from "../common/components/information/informationSkills";
import {LanguageSkill} from "./languageSkill/LanguageSkill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.containerSkills}`}>
                <Title title={'My skills'} color={'#f26522'}/>
                <div className={s.skills}>
                    <InformationSkills titleInfo={'Experience Skill'}
                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                    />
                    <Skill title={'HTML'}
                           description={'I learn HTML. I learn HTML. I learn HTML. I learn HTML.I learn HTML.'}/>
                    <Skill title={'CSS'} description={'I learn CSS.I learn CSS.I learn CSS'}/>
                    <Skill title={'JS'}
                           description={'I learn JS. I learn JS.I learn JS.I learn JS.I learn JS.I learn JS'}/>
                    <Skill title={'TS'}
                           description={'I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS.'}/>
                    <Skill title={'React'} description={'I learn React'}/>
                    <Skill title={'Redax'} description={'I learn Redax. I learn Redax. I learn Redax. I learn Redax.'}/>
                    <InformationSkills titleInfo={'Language skill'}
                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}/>

                <LanguageSkill/>
                </div>
            </div>
        </div>
    );
}


