import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import {InformationSkills} from '../common/components/information/informationSkills';


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.containerContacts}`}>
                <Title title={'Contact me'}/>
                <div className={s.contacts}>
                    <InformationSkills titleInfo={'Leave me a message'}
                                       textInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}/>

                    <form className={s.form}>

                        <div className={s.formGroupNameEmail}>
                            <div className={s.formGroup}>
                                <input className={s.formControl}
                                   type='text'
                                   name='name'
                                   placeholder='Name'
                                   required/>
                            </div>

                            <div className={s.formGroup}>
                            <input className={s.formControl}
                                   type='email'
                                   name='email'
                                   placeholder='Email' required/>
                            </div>
                        </div>

                        <div >
                                <input className={s.formControlText}
                                       type='text'
                                       name='subject'
                                       placeholder='Subject'
                                       required/>
                        </div>

                        <div >
                                          <textarea className={s.formControlText} name='message' rows='10' required placeholder='Your Message'/>
                        </div>
                        <div className={s.pushForm}>
                            <input className={s.bottom} type={'submit'} value={'Submit'}/>
                        </div>

                    </form>
                </div>
            </div>
        </div>



        /*<div className={s.contactsBlock}>
       <div className={s.container}>
           <div className={`${sContainer.container} ${s.containerContacts}`}>
               <Title title={'Contact Me'}/>
               <form className={s.form}>
                   <div className={s.columnContainer}>
                       <div className={s.columnInner}>
                           <div className={s.contactsSection}>

                               <div className={s.col}>
                                   <div className={s.minForm}>
                                       <div className={s.formGroup}>
                                           <input className={s.formControl} type='text' name={'your-name'}
                                                  size={'40'}
                                                  placeholder='Your Name' aria-required='true'
                                                  aria-invalid='false'
                                           style={{width: '85%', marginRight: '10px'}}/>
                                       </div>
                                       <div className={s.formGroup}>
                                           <input className={s.formControl} type='text'
                                                  name={'your email address'}
                                                  size={'40'} placeholder='Your Email Address' aria-required='true'
                                                  aria-invalid='false'
                                                  style={{width: '85%'}}/>
                                       </div>
                                   </div>
                                   <div className={s.maxForm}>
                                       <div className={s.formGroup}>
                                           <input className={s.formControl} type='text' name={'subject'}
                                                  size={'40'}
                                                  placeholder='Subject' aria-required='true' aria-invalid='false'
                                                  style={{width: '100%'}}/>
                                       </div>
                                   </div>
                                   <div className={s.maxForm}>
                                       <div className={s.formGroup}>
                                          <textarea style={{resize: 'none', height: '125px', width: '100%'}} className={s.formControl} name='message' cols='40' rows='10' aria-required='true'
                                          aria-invalid='false' placeholder='Your Message'/>
                                       </div>
                                   </div>
                                   <div className={s.pushForm}>
                                       <input className={s.bottom} type={'submit'} value={'Submit'}/>
                                   </div>
                               </div>

                           </div>
                       </div>
                   </div>
               </form>
           </div>

       </div>
   </div>
*/
    )
}


