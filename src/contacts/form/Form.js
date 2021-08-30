import React from 'react';
import style from './Form.module.css'

const Form = () => {
    return (

        <form className={style.form}>
            <input className={style.input_elem_1}/>
            <input className={style.input_elem_2}/>
            <textarea className={style.textarea_elem_1}/>
        </form>
    );
};

export default Form;