import React from "react";
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.containerContacts}`}>
                <Title title={'Contacts'}/>
                    <form className={s.form}>
                        <input type={'text'} placeholder="Full name"/>
                        <input type={'text'} placeholder="Name company"/>
                        <textarea rows="10" cols="45" name="text" placeholder="Message"/>
                    </form>
                <button>Send</button>
            </div>
        </div>

    );
}


