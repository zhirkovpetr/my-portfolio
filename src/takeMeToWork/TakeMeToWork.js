import React from "react";
import s from './TakeMeToWork.module.css';
import sContainer from "../common/styles/Container.module.css";

export const TakeMeToWork = () => {
    return (
        <div className={s.takeMeToWorkBlock}>
            <div className={sContainer.container}>
                <div className={s.takeMeToWork}>
                    <h3>Considering remote work options</h3>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
    );
}


