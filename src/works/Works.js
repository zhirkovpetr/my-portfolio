import React from "react";
import s from './Works.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.containerWorks}`}>
                <Title title={'My works'}/>
                <div className={s.works}>
                    <Work picture={''} link={'https://zhirkovpetr.github.io/TodoList'}
                          title={'Todo list'} description={'My todo list will help you not to forget about your business'}/>
                    <Work picture={''} link={'https://zhirkovpetr.github.io/social-network'}
                          title={'Social network'} description={'My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances. My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances. My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances.'}/>
                </div>
            </div>
        </div>
    );
}


