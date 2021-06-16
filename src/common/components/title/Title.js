import React from "react";
import s from './Title.module.scss';

export const Title = (props) => {
    return (
        <div className={s.title}>
            <h1>{props.title}</h1>
        </div>
    );
}


