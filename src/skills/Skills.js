import React from "react";
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {InformationSkills} from "../common/components/information/informationSkills";
import {LanguageSkill} from "./languageSkill/LanguageSkill";
import {
    faHtml5,
    faCss3,
    faReact,
    faJs,
    faTypo3,
    faBattleNet,
    faDashcube,
    faWpforms, faAsymmetrik
} from "@fortawesome/free-brands-svg-icons";
import {faChalkboard, faFillDrip, faListAlt} from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.containerSkills}`}>
                <Title title={'My skills'} color={'#f26522'}/>
                <div className={s.skills}>
                    <InformationSkills titleInfo={'Experience Skill'}
                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                    />
                    <Skill title={'HTML&CSS'} icon={faHtml5} description={'I learn HTML. I learn HTML. I learn HTML. I learn HTML.I learn HTML.'}/>
                    <Skill title={'JavaScript'} icon={faJs} description={'I learn CSS.I learn CSS.I learn CSS'}/>
                    <Skill title={'TypeScript'} icon={faDashcube}
                           description={'I learn JS. I learn JS.I learn JS.I learn JS.I learn JS.I learn JS'}/>
                    <Skill title={'React'} icon={faReact}
                           description={'I learn JS. I learn JS.I learn JS.I learn JS.I learn JS.I learn JS'}/>
                    <Skill title={'Redux'} icon={faBattleNet}
                           description={'I learn TS. I learn TS. I learn TS. I learn TS. I learn TS. I learn TS.'}/>
                    <Skill title={'Axios'} icon={faAsymmetrik} description={'I learn Redax. I learn Redax. I learn Redax. I learn Redax.'}/>
                    <Skill title={'Storybook'} icon={faChalkboard} description={'I learn React'}/>
                    <Skill title={'Material UI'} icon={faFillDrip} description={'I learn React'}/>
                    <Skill title={'Formik'} icon={faWpforms} description={'I learn React'}/>
                    <Skill title={'Unit Test'} icon={faListAlt} description={'I learn React'}/>

                    <InformationSkills titleInfo={'Language skill'}
                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}/>

                <LanguageSkill/>
                </div>
            </div>
        </div>
    );
}


