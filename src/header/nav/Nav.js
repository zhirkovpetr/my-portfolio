import s from './Nav.module.css';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";


export const Nav = ({active}) => {

    return (
        <div className={s.nav}>
            <nav className={s.mainMenu}>
                <ul className={active ? s.navbarActive : s.navbar}>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#f4bf00'}} href={''}>home</a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#f7941d'}} href={''}>skills</a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#f26522'}} href={''}>my works</a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#ed1c24'}} href={''}>contacts</a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#e10337'}} href={''}>resume</a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#b90162'}}
                                                      href={'https://t.me/zhirkovpetr'}
                                                      target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                       icon={faTelegram}/></a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#873e95'}}
                                                      href={'https://www.linkedin.com/in/zhirkovpetr/'}
                                                      target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                       icon={faLinkedin}/></a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#3c70b4'}}
                                                      href={'https://github.com/zhirkovpetr'}
                                                      target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                       icon={faGithub}/></a></li>
                    <li className={s.mainMenuItem}><a style={{backgroundColor: '#13376a'}}
                                                      href={'https://www.instagram.com/zhirkov_petr/'}
                                                      target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                       icon={faInstagram}/></a></li>
                </ul>
            </nav>
        </div>
    );
}


