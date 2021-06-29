import React from "react";
import s from './Resume.module.css';
import sContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {InformationSkills} from "../common/components/information/informationSkills";

export const Resume = () => {
    return (
        <div className={s.resumeBlock}>
            <div className={`${sContainer.container} ${s.containerResume}`}>
                <Title title={'My Resume'}/>
                <div className={s.resume}>

                    <div>
                        <div className={s.Inform}>
                            <h3>Educational Background:</h3>
                            <div>
                                <h5>Mechanical engineer @ Belarusian National Technical University</h5>
                                <p>2012-2017</p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Automotive Electrical Electronic Engineer @ Belarusian National Technical
                                    University</h5>
                                <p>2014-2017</p>
                            </div>
                            <hr/>
                        </div>

                        <div className={s.Inform}>
                            <h3>Work History:</h3>
                            <div>
                                <h5>Front-end developer @ Freelance</h5>
                                <p>2021-present</p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Occupational safety engineer @ RUPE'GRANIT'</h5>
                                <p>2017-2020</p>
                            </div>
                            <hr/>
                        </div>
                        <InformationSkills titleInfo={'Full resume'}
                                           textInfo={'For more information, see the attached resume.'}/>

                        <div className={s.buttonBlock}><a href={'./cv/CVЖирковПётр.pdf'} className={s.resumeButton} download>{'Download My Resume as a .pdf file'}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


