import s from './Header.module.css';
import sContainer from "../common/styles/Container.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import MyImage from '../assets/pictures/photo_2021-06-21_15-26-44.jpg';


export const Header = () => {
    const myImages = {
        backgroundImage: `url(${MyImage})`
    }
    return (
        <div className={s.header}>
            <div className={sContainer.container}>

                <div className={s.blockName}>
                    <div className={s.images} style={myImages}/>
                    <div><h3>Petr Zhirkov</h3></div>
                </div>

                <div className={s.nav}>
                    <nav className={s.mainMenu}>
                        <ul className={s.navbar}>
                            <li style={{backgroundColor: '#f26522'}}><a href={''}>HOME</a></li>
                            <li style={{backgroundColor: '#ed1c24'}}><a href={''}>SKILLS</a></li>
                            <li style={{backgroundColor: '#e10337'}}><a href={''}>MY WORKS</a></li>
                            <li style={{backgroundColor: '#b90162'}}><a href={''}>CONTACTS</a></li>
                            <li style={{backgroundColor: '#873e95'}}><a href={''}>RESUME</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={s.main}>
                    <div className={s.contacts}>
                        <NavLink to="/telegram" target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                 style={{color: '#ed1c24'}}
                                                                                 icon={faTelegram}/></NavLink>
                        <NavLink to="/linkedId" target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                 style={{color: '#e10337'}}
                                                                                 icon={faLinkedin}/></NavLink>
                        <NavLink to="/github" target='_blank'><FontAwesomeIcon className={s.icon}
                                                                               style={{color: '#b90162'}}
                                                                               icon={faGithub}/></NavLink>
                        <NavLink to="/instagram" target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                  style={{color: '#873e95'}}
                                                                                  icon={faInstagram}/></NavLink>
                    </div>
                </div>
            </div>
        </div>



















        /*<div className={s.header}>
            <div className={`${sContainer.container} ${s.containerMenu}`}>
                <div className={s.blockName}>
                    <div className={s.name}><h3>Petr Zhirkov</h3></div>
                </div>
                <div className={s.nav}>
                    <nav className={s.mainMenu}>
                        <ul className={s.navbar}>
                            <li style={{backgroundColor: '#f26522'}}><a href={''}>HOME</a></li>
                            <li style={{backgroundColor: '#ed1c24'}}><a href={''}>SKILLS</a></li>
                            <li style={{backgroundColor: '#e10337'}}><a href={''}>MY WORKS</a></li>
                            <li style={{backgroundColor: '#b90162'}}><a href={''}>CONTACTS</a></li>
                            <li style={{backgroundColor: '#873e95'}}><a href={''}>RESUME</a></li>
                        </ul>
                    </nav>
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
                </div>
            </div>
        </div>*/
    );
}


