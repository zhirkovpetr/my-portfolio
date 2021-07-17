import React from 'react';
import s from './Works.module.scss';
import sContainer from '../common/styles/Container.module.css';
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import {InformationSkills} from '../common/components/information/informationSkills';
import socialImage from './../assets/pictures/social1.jpg'
import todolistImage from './../assets/pictures/tdlst.jpg'
import sInformation from "../common/styles/Information.module.css";

export const Works = () => {
    const social= {
        backgroundImage: `url(${socialImage})`
    }
    const todolist= {
        backgroundImage: `url(${todolistImage})`
    }
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.containerWorks}`}>
                <Title title={'My works'}/>
                <div className={sInformation.information}>
                    <InformationSkills titleInfo={'My Recent Works'}
                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}/>
                    <div className={s.myWorks}>
                    <Work style={social} link={'https://zhirkovpetr.github.io/social-network'}
                          title={'Social network'} description={'My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances. My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances. My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances.'}/>
                    <Work style={todolist} link={'https://zhirkovpetr.github.io/TodoList'}
                          title={'To do list'} description={'My todo list will help you not to forget about your business'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


