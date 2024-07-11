'use client';
import React from 'react';
import style from './../../styles/passordRecovery.module.css';
import Image from 'next/image';
import logo from './../../../img/2048.svg';
import Link from 'next/link';
import Form1 from './form1';
import Form2 from './form2';
import { useRouter } from 'next/navigation';
import { AuthActions } from '@/app/api/auth/utils';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../button/Button';

export default function PasswordRecovery() {

   const { resetPassword, checkCode } = AuthActions();
   const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
   } = useForm();

   const [btnDis, setBtnDisable] = useState(true);

   const [token, setToken] = useState()

   const [emailCheck, setEmailCheck] = useState('')

   const router = useRouter();

   const getResetCode = async (data) => {
      try {
         const response = await resetPassword(data.email);
            setBtnDisable(false);
            setEmailCheck(data.email)
            console.log(data)
      } catch (error) {
         // setError('root', { type: 'manual', message: 'some error', error });
         console.log('incorrect code')
      }
   };

   const CheckResetCode = async (data) => {
      try {
         const response = await checkCode(data.email, data.code);
         setEmailCheck(data.email)
         router.push('/password_recovery/reset');
         console.log(data)
      } catch (error) {}
      
      // setError('root', { type: 'manual', message: 'some error', error });
   };

   return (
      <div className={style.main}>
         <Image className={style.logo} src={logo} alt="2048" />
         <div className={style.background}>
            <form onSubmit={handleSubmit(getResetCode)}>
               <h2 className={style.h2}>Востановление доступа</h2>
               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label
                     className={`${style.inputLabel} ${
                        errors.email?.message
                           ? style.errorLabal
                           : style.inputLabel
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
                     onChange={(e) => setEmailCheck(e.target.value)}
                     {...register('email')}
                  />
               </div>

               <div className={`${style.btn} ${style.mg}`}>
                  <Button children={'Получить код'} />
               </div>
            </form>

            {/* <p className={style.return}>
               Повторить запрос можно через{' '}
               <span className={style.time}>01:59</span>
            </p> */}

            <form value={emailCheck}  onSubmit={handleSubmit(CheckResetCode)}>
               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={style.inputLabel}>Код потверждения</label>
                  <input
                     className={style.input}
                     id="code"
                     type="text"
                     placeholder="Ввести данные"
                     name="code"
                     {...register('code')}
                  />
               </div>

               <div className={style.btn}>
                  <Button children={'Продолжить'} disabled={btnDis}></Button>
               </div>
            </form>

            <Link href={'/'} className={style.back}>
               Вернуться назад
            </Link>
         </div>
      </div>
   );
}
