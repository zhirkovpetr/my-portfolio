import s from './Footer.module.css';
import sContainer from "../common/styles/Container.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div><h3>Petr Zhirkov</h3></div>
                <div className={s.main}>
                    <div className={s.contacts}>
                        <NavLink to="/telegram" target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#ed1c24'}} icon={faTelegram}/></NavLink>
                        <NavLink to="/linkedId" target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#e10337'}} icon={faLinkedin}/></NavLink>
                        <NavLink to="/github" target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#b90162'}}
                                                                               icon={faGithub}/></NavLink>
                        <NavLink to="/instagram" target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#873e95'}}
                                                                                  icon={faInstagram}/></NavLink>
                    </div>
                </div>
                <div className={s.reserved}>
                    <span style={{color: '#3c70b4'}}>©2021 All Right Reserved</span>
                </div>
            </div>
        </div>
    );
}