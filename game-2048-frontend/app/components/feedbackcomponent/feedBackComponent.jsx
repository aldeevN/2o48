"use client"
import style from './../../styles/feedback.module.css';
import { useForm } from "react-hook-form";
import { AuthActions } from "../../api/auth/utils"
import Button from '../button/Button';
import closeIcon from "../../../img/close.svg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FeedBackComponent(props) {
   const { register, handleSubmit, setError, formState: { errors } } = useForm()



   const { feedback } = AuthActions()
   const router = useRouter()
   const onSubmit = (data) => {

      feedback(data.feedback)
         .json((json) => {
            
         })
         .catch((err) => {
            setError("root", { type: "manual", message: err.json, })
         })
         router.push('/play')
   }
   return (
      <div className={style.main}>
         <div className={style.background}>
            <button onClick={() => { router.push('/play') }} className={style.closeBtn}>
               <Image className={style.closeImg} src={closeIcon} alt="close-btn" />
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>

               <h2 className={style.h2}>Форма обратной связи:</h2>
               <span className={style.regError}>{errors.root?.message}</span>

               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.feedback ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Сообщение
                  </label>
                  {errors.feedback && (<span className={style.validation}>Это обязательное поле</span>)}
                  <textarea className={`${style.input} ${errors.feedback ? style.errorInput : style.input}`} name='feedback' id='feedback' type="text" placeholder='Ввести сообщение' {...register("feedback", { required: "Это обязательное поле" })} />
               </div>

               <div className={style.btn}>
                  <Button children={'Отправить'} />
               </div>
            </form>
         </div>
      </div>
   );
}
