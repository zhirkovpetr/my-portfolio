import React from "react";
import s from './Works.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.containerWorks}`}>
                <h1 className={s.title}>My works</h1>
                <div className={s.works}>
                    <Work picture={'https://avatars.mds.yandex.net/get-zen_doc/1780598/pub_5d3eef5a35c8d800b90ad930_5d3ef5f97b4bd200aeadaaa7/scale_1200'}
                          link={'https://zhirkovpetr.github.io/TodoList'}
                          title={'Todo list'} description={'My todo list'}/>
                    <Work picture={'https://avatars.mds.yandex.net/get-zen_doc/3122622/pub_5ea4546301d7556f42e95e42_5ea46100be4daf0fa6cf53ab/scale_1200'}
                          link={'https://zhirkovpetr.github.io/social-network'}
                          title={'Social network'} description={'My social network'}/>
                </div>
            </div>
        </div>
    );
}


