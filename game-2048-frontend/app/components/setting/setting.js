import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../../styles/setting.module.css'
import SwitchC from './switch';
import sound from '../../../img/Sound.svg'
import music from '../../../img/music.svg'
import feedback from '../../../img/feedback.svg'


export default function Setting(props) {
   return (
      <div className={style.main}>
         <div className={style.background}>
            <h2 className={style.h2}>Настройки:</h2>
            <div>

               <div className={style.content}>
                  <div className={style.setting}>
                     <Image className={style.image} src={sound} alt='Sound img' />
                     <span className={style.span}>Звук</span>

                  </div>
                  <SwitchC />
               </div>

               <div className={style.content}>
                  <div className={style.setting}>
                     <Image className={style.image} src={music} alt='Music img' />
                     <span className={style.span}>Музыка</span>

                  </div>
                  <SwitchC />
               </div>

               <div className={style.setting}>
                  <Image className={style.image} src={feedback} alt='FeedBack img' />
                  <Link className={style.Link} href={'/feedback'}>
                     Сообщить о проблеме
                  </Link>
               </div>

            </div>
            <div className={`${style.content} ${style.btncontainer}`}>
               <button className={style.btn} onClick={() => { props.onClose() }}>Назад</button>
            </div>


         </div>
      </div>
   );
}
