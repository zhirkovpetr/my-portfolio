import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import {InformationSkills} from '../common/components/information/informationSkills';


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <div className={`${sContainer.container} ${s.containerContacts}`}>
                    <Title title={'Contact Me'}/>
                    <form className={s.form}>
                        <div className={s.columnContainer}>
                            <div className={s.columnInner}>
                                <div className={s.contactsSection}>
                                    <InformationSkills titleInfo={'Leave me a message'}
                                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}/>

                                    <div className={s.col}>
                                        <div className={s.minForm}>
                                            <div className={s.formGroup}>
                                                <input className={s.formControl} type={'text'} name={'your-name'}
                                                       value='' size={'40'}
                                                       placeholder='Your Name' aria-required='true'
                                                       aria-invalid='false'/>
                                            </div>
                                        </div>
                                        <div className={s.minForm}>
                                            <div className={s.formGroup}>
                                                <input className={s.formControl} type={'text'}
                                                       name={'your email address'} value=''
                                                       size={'40'} placeholder='Your Email Address' aria-required='true'
                                                       aria-invalid='false'/>
                                            </div>
                                        </div>
                                        <div className={s.maxForm}>
                                            <div className={s.formGroup}>
                                                <input className={s.formControl} type={'text'} name={'subject'}
                                                       value='' size={'40'}
                                                       placeholder='Subject' aria-required='true' aria-invalid='false'/>
                                            </div>
                                        </div>
                                        <div className={s.maxForm}>
                                            <div className={s.formGroup}>
                            <textarea style={{resize: 'none', height: '125px'}} className={s.formControl} name='message' cols='40' rows='10' aria-required='true'
                                      aria-invalid='false' placeholder='Your Message'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.pushForm}>
                                        <input className={s.bottom} type={'submit'} value={'Submit'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}


