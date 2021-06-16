import s from './LanguageSkill.module.scss'
import React from "react";

export const LanguageSkill = () => {
    return (
        <div className={s.skillSection}>
            <ul className={s.list}>
                <li className={s.chart} data-percent={'50'}>
                   <span className={s.percent} style={{backgroundColor: '#f7941d'}}>50</span>
                    <h5 style={{Color: '#000000'}}>English</h5>
                </li>
                <li className={s.chart} data-percent={'50'}>
                    <span className={s.percent} style={{backgroundColor: '#f26522'}}>90</span>
                    <h5 style={{Color: '#000000'}}>Russia</h5>
                </li>
                <li className={s.chart} data-percent={'50'}>
                    <span className={s.percent} style={{backgroundColor: '#3c70b4'}}>80</span>
                    <h5 style={{Color: '#000000'}}>Belarus</h5>
                </li>
            </ul>
        </div>
    );
}
