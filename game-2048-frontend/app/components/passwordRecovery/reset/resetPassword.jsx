'use client';
import React from 'react';
import style from '../../../styles/resetPassword.module.css';
import { AuthActions } from '@/app/api/auth/utils';
import { useForm } from 'react-hook-form';
import logo from "../../../../img/2048.svg";
import Image from 'next/image';
import Button from "../../button/Button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function resetPassword(token) {
   const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
   } = useForm();

   const { resetPasswordConfirm } = AuthActions();
   const router = useRouter();

   const onSubmit = async (data) => {
      try {
         const response = await resetPasswordConfirm(data.new_password, data.re_new_password, data.token)
         router.push('/')
      } catch (error) {
         
      }
   }


   return (
      <div className={style.main}>
         <Image className={style.logo} src={logo} alt="2048" />
         <div className={style.background}>
            <form>
            <h2 className={style.h2}>Востановление доступа</h2>
               <div className={style.inputGroup}>
                  <label className={style.inputLabel} htmlFor="">
                     Новый пароль
                  </label>
                  <input
                     className={style.input}
                     type="password"
                     placeholder="Придумайте новый пароль"
                     name="password_1"
                     {...register('new_password', {
                        required: `${
                           errors?.message
                              ? errors.message
                              : 'Это обязательное поле'
                        }`,
                     })}
                  />
                  <Link href={'#'} className={style.showPasswordIcon}></Link>
                  <span>{errors?.message}</span>
                  <a href="#" className={style.showPasswordIcon}></a>
               </div>

               <p className={style.text}>
               Пароль должен содержать от 6 до 20 символов, 
               только латинские буквы и цифры
               </p>

               <div className={style.inputGroup}>
                  <label className={style.inputLabel} htmlFor="">
                     Повторите пароль
                  </label>
                  <input
                     className={style.input}
                     type="password"
                     placeholder="Повторите новый пароль"
                     name="password_2"
                     {...register('re_new_password', {
                        required: `${
                           errors?.message
                              ? errors.message
                              : 'Это обязательное поле'
                        }`,
                     })}
                  />
                  <Link href={'#'} className={style.showPasswordIcon}></Link>
                  <span>{errors?.message}</span>
                  <a href="#" className={style.showPasswordIcon}></a>
               </div>

               <div className={style.btn}>
                  <Button children={'Продолжить'}></Button>
               </div>
            </form>
            <Link href={'/'} className={style.back}>
               Вернуться назад
            </Link>
         </div>
      </div>
   );
}
