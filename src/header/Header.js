import s from './Header.module.css';
import sContainer from "../common/styles/Container.module.css";
import React from "react";
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
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#f4bf00'}} href={''}>HOME</a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#f7941d'}} href={''}>SKILLS</a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#f26522'}} href={''}>MY WORKS</a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#ed1c24'}} href={''}>CONTACTS</a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#e10337'}} href={''}>RESUME</a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#b90162'}} href={'https://t.me/zhirkovpetr'} target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                                                                           icon={faTelegram}/></a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#873e95'}} href={'https://www.linkedin.com/in/zhirkovpetr/'} target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                                                                           icon={faLinkedin}/></a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#3c70b4'}} href={'https://github.com/zhirkovpetr'} target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                                                                         icon={faGithub}/></a></li>
                            <li className={s.mainMenuItem}><a style={{backgroundColor: '#13376a'}} href={'https://www.instagram.com/zhirkov_petr/'} target='_blank'><FontAwesomeIcon className={s.icon}
                                                                                                                                            icon={faInstagram}/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}


