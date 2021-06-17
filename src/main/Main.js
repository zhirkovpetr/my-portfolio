import s from './Main.module.css';
import sContainer from '../common/styles/Container.module.css'
import MyImage from './../assets/pictures/Fotoram.io.png'

export const Main = () => {
    const myImages = {
        backgroundImage: `url(${MyImage})`
    }
    return (
        <div className={s.main}>
            <div className={`${sContainer.container} ${s.homeBanner}`} style={myImages}>
                <div className={s.container}>
                    <div className={s.row}>
                            <div className={s.bannerInfo}>
                                <h1>Hello, I am</h1>
                                <h2>Zhirkov Petr</h2>
                                <h3>a frontend developer</h3>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


