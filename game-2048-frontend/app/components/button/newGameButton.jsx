import React from 'react';
import style from './../../styles/newGameButton.module.css';
import Image from 'next/image';
import img from "./../../../icon/newgamebtnicon.svg"

export default function NewGameButton() {
   return (
      <button className={style.btn}>
         <span>Сыграть снова</span>
         <Image 
         src={img}
         width={56} 
         height={50}
         />
      </button>
   );
}
