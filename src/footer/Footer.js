import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.block}>
                    <h2 className={style.title}>Maks Alenkau</h2>
                    <div className={style.block_element}>
                        <div className={style.footer_item}>1</div>
                        <div className={style.footer_item}>2</div>
                        <div className={style.footer_item}>3</div>
                        <div className={style.footer_item}>4</div>
                    </div>

                    <div className={style.copyright}>©2021 Все права защищены</div>
                </div>
            </div>

        </div>
    );
};

export default Footer;