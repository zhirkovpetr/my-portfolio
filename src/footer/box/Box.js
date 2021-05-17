import React from "react";
import s from './Box.module.css';

export const Box = (props) => {
    return (
        <div className={s.box} style={{backgroundColor: props.color}}/>
    );
}


