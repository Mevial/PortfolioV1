import React from 'react';
import style from './Employ.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Employ = () => {
    return (
        <div className={style.employBlock}>
            <div className={`${styleContainer.container} ${style.employContainer}`}>
                <h2 className={style.title}>Сonsidering options for remote work</h2>
                <div className={style.button_employ}>
                    <button>Employ me</button>
                </div>
            </div>
        </div>
    );
};

export default Employ;