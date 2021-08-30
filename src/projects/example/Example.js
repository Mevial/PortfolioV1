import React from 'react';
import style from './Example.module.css'

const Example = (props) => {
    return (
        <div className={style.example}>
            <div className={style.picture_button_block}>
                <div className={style.icon}>
                   <img/>
                </div>
                <div className={style.button_example}>
                    <button>Watch</button>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Example;