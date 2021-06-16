import s from './InformationSkills.module.scss';

export const InformationSkills = (props) => {
    return (<div className={s.BlockInformation}>
            <h3>{props.titleInfo}</h3>
            <div
                className={s.textInfo}>{props.textInfo}
            </div>
        </div>
    )
}