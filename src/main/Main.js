import s from './Main.module.css';
import sContainer from '../common/styles/Container.module.css'
import portfolioImage from '../assets/pictures/portfoliophoto.png';


export const Main = () => {
    const portfolioImages = {
        backgroundImage: `url(${portfolioImage})`
    }
    return (
        <div className={s.main}>
            <div className={`${sContainer.container} ${s.containerMain}`}>
              <div className={s.bannerInfo}>
                  <span>Hello, I am</span>
                  <h1>Zhirkov Petr</h1>
                  <p>a frontend developer</p>
              </div>
              <div className={s.photo} style={portfolioImages}>

              </div>
            </div>
        </div>
    );
}


