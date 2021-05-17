import s from './Footer.module.css';
import sContainer from "../common/styles/Container.module.css";
import React from "react";
import {Box} from "./box/Box";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={sContainer.container}>
                <div className={s.footer}>
                    <h3>Petr Zhirkov</h3>
                    <div className={s.box}>
                        <Box color={'black'}/>
                        <Box color={'white'}/>
                        <Box color={'black'}/>
                        <Box color={'white'}/>
                        <Box color={'black'}/>
                        <Box color={'white'}/>
                        <Box color={'black'}/>
                    </div>
                    <p>©2021 All rights reserved</p>
                </div>
            </div>
        </div>
    );
}


