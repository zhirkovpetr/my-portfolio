import s from './Header.module.css';
import sContainer from "../common/styles/Container.module.css";
import React from "react";
import MyImage from '../assets/pictures/photo_2021-06-21_15-26-44.jpg';
import {Nav} from "./nav/Nav";

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
                <Nav/>
                <div className={s.headerBurger}>
                    <div className={`${s.line} ${s.lineOne}`}/>
                    <div className={`${s.line} ${s.lineTwo}`}/>
                    <div className={`${s.line} ${s.lineTree}`}/>
                </div>
            </div>
        </div>
    );
}





