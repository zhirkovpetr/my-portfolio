import s from './Main.module.css';

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
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


