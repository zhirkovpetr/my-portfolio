import React from "react";
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {InformationSkills} from "../common/components/information/informationSkills";
import {
    faHtml5,
    faCss3,
    faReact,
    faJs,
    faTypo3,
    faBattleNet,
    faDashcube,
    faWpforms, faAsymmetrik, faGit, faJira
} from "@fortawesome/free-brands-svg-icons";
import {faChalkboard, faFillDrip, faGlobe, faListAlt} from "@fortawesome/free-solid-svg-icons";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.containerSkills}`}>
                <Title title={'My skills'} color={'#f26522'}/>
                <div className={s.skills}>
                    <InformationSkills titleInfo={'Experience Skill'}
                                       textInfo={'Libraries, programming languages, languages & tools'}
                    />
                    <div className={s.blockSkills}>
                    <Skill title={'React'} icon={faReact} description={'A JavaScript library for building user interfaces.'}/>
                    <Skill title={'Redux'} icon={faBattleNet} description={'A Predictable State Container for JS Apps.'}/>
                    <Skill title={'JavaScript'} icon={faJs} description={'JS is a programming language that adds interactivity to your website.'}/>
                    <Skill title={'TypeScript'} icon={faDashcube} description={'TS extends JS by adding types.'}/>
                    <Skill title={'HTML'} icon={faHtml5} description={'HTML is a standardized document markup language for viewing web pages in a browser.'}/>
                    <Skill title={'CSS'} icon={faCss3} description={'CSS is a formal language for describing the appearance of a document written using a markup language.'}/>
                    <Skill title={'Axios'} icon={faAsymmetrik} description={'Axios is a promise based HTTP client for the browser and Node.js.'}/>
                    <Skill title={'Unit Test'} icon={faListAlt} description={'Unit test is to feed something to the input of the unit and check the result at the output'}/>
                    <Skill title={'Storybook'} icon={faChalkboard} description={'Storybook is an open source tool for developing UI components.'}/>
                    <Skill title={'Material UI'} icon={faFillDrip} description={'Material UI is a library that allows you to create Google Material Design apps using React components.'}/>
                    <Skill title={'Formik'} icon={faWpforms} description={'Formik is a library that helps you work with forms. It makes it easy to retrieve data from a form, validate data, display error messages, and more.'}/>
                    <Skill title={'GIT'} icon={faGit} description={'Git is a distributed version control system that allows developers to track changes in files and work on the same project together with colleagues.'}/>
                    <Skill title={'Jira'} icon={faJira} description={'Jira is a commercial bug system used for user interaction, although in some cases it is also used for project management.'}/>
                    <Skill title={'English'} icon={faGlobe} description={` Pre-Intermediate. I am in the process of improving my knowledge of English.`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


