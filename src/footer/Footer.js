import s from './Footer.module.css';
import sContainer from "../common/styles/Container.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div><h3>Petr Zhirkov</h3></div>
                <div>
                    <div className={s.contacts}>
                        <a href='https://t.me/zhirkovpetr' target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#ed1c24'}} icon={faTelegram}/></a>
                        <a href='https://www.linkedin.com/in/zhirkovpetr/' target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#e10337'}} icon={faLinkedin}/></a>
                        <a href='https://github.com/zhirkovpetr' target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#b90162'}}
                                                                               icon={faGithub}/></a>
                        <a href='https://www.instagram.com/zhirkov_petr/' target='_blank'><FontAwesomeIcon className={s.icon} style={{color: '#873e95'}}
                                                                                  icon={faInstagram}/></a>
                    </div>
                </div>
                <div className={s.reserved}>
                    <span style={{color: '#3c70b4'}}>©2021 All Right Reserved</span>
                </div>
            </div>
        </div>
    );
}