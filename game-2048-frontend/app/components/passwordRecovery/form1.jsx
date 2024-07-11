import React from 'react';
import style from "./../../styles/passordRecovery.module.css"
import Button from '../button/Button';
import { useForm } from 'react-hook-form';
import { AuthActions } from '@/app/api/auth/utils';
import { useState } from 'react';

export default function Form1() {

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	  } = useForm();

     const [btnDis, setBtnDisable] = useState(true);

     const {resetPassword} = AuthActions();

     const getResetCode = async (data) => {
      try {
         const response = await resetPassword(data.email);
         setBtnDisable(false);
      } catch (error) {
         setError('root', { type: 'manual', message: 'some error', error });
      }
   };

   return (
      <>
         <form  onSubmit={handleSubmit(getResetCode)}>
            <h2 className={style.h2}>Востановление доступа</h2>
            <div className={`${style.inputGroup} ${style.margin}`}>
               <label
                  className={`${style.inputLabel} ${
                     errors.email?.message ? style.errorLabal : style.inputLabel
                  }`}
               >
                  Введите почту
               </label>
               <span className={style.validation}>{errors?.message}</span>
               <input
                  className={`${style.input} ${
                     errors.email?.message ? style.errorInput : style.input
                  }`}
                  id="email"
                  type="email"
                  placeholder="Ввести данные"
                  name="email"
                  {...register('email')}
               />
            </div>

            <div className={style.btn}>
               <Button children={'Получить код'} />
            </div>
         </form>
      </>
   );
}
