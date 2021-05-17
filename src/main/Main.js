import s from './Main.module.css';
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <span>Hi There!</span>
                    <h1>I am Zhirkov Petr</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.foto}>
                    <img src={''} alt={'foto'}/>
                </div>
            </div>
        </div>
    );
}


