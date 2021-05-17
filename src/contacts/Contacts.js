import React from "react";
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css';


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.containerContacts}`}>
                <h1 className={s.title}>Contacts</h1>
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


