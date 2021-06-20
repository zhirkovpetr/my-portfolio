import s from './Header.module.css';
import {Nav} from "../nav/Nav";
import sContainer from "../common/styles/Container.module.css";
import React from "react";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={sContainer.container}>
                <div className={s.blockFotoName}>
                    <div className={s.foto}></div>
                    <div className={s.name}><h3>Petr Zhirkov</h3></div>
                </div>
                <Nav/>
            </div>
        </div>
    );
}


