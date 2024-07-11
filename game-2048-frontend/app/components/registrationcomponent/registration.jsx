"use client"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { AuthActions } from "../../api/auth/utils";
import { useRouter } from "next/navigation";
import style from "./../../styles/registration.module.css";
import logo from './../../../img/2048.svg';
import CreateAccountButtn from "./../button/createAccount"
import Link from "next/link";

export default function Registration() {
   const { register, handleSubmit, formState:{errors}, setError } = useForm()
   const router = useRouter()
   const { registerApi } = AuthActions()

   const onSubmit = (data) => {
      registerApi(data.first_name, data.last_name, data.username, data.email, data.password_1, data.password_2)
         .json(() => {
         })
        
         .catch((err) => {
            setError("root", {
               type: "manual",
               message: err?.json,
            })
         })
   }

   return (
      <div className={style.main}>
         <Image className={style.logo} alt="icon-password" src={logo} />
         <div className={style.background}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <h2 className={style.h2}>Регистрация</h2>
               <span className={style.regError}>{errors.root?.message}</span>
               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.first_name ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Имя
                  </label>
                  {errors.first_name && (<span className={style.validation}>Это обязательное поле</span>)}
                  <input className={`${style.input} ${errors.first_name ? style.errorInput : style.input}`} id='first_name' type="text" placeholder='Ввести данные' {...register("first_name", { required: "Это обязательное поле" })} />
               </div>

               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.last_name ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Фамилия
                  </label>
                  {errors.last_name && (<span className={style.validation}>Это обязательное поле</span>)}
                  
                  <input className={`${style.input} ${errors.last_name ? style.errorInput : style.input}`} id='last_name' type="text" placeholder='Ввести данные' {...register("last_name", { required: "Это обязательное поле" })} />
               </div>

               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.username ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Никнейм
                  </label>{errors.username && (<span className={style.validation}>Это обязательное поле</span>)}
                  
                  <input className={`${style.input} ${errors.username ? style.errorInput : style.input}`} id='username' type="text" placeholder='Ввести данные' {...register("username", { required: "Это обязательное поле" })} />

               </div>
               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.email ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Почта
                  </label>
                  {errors.email && (<span className={style.validation}>Это обязательное поле</span>)}
                  <input className={`${style.input} ${errors.email ? style.errorInput : style.input}`} id='email' type="email" placeholder='Ввести данные' {...register("email", { required: "Это обязательное поле" })} />
               </div>

               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.password_1 ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Введите пароль
                  </label>
                  {errors.password_1 && (<span className={style.validation}>Это обязательное поле</span>)}
                  <input className={`${style.input} ${errors.password_1 ? style.errorInput : style.input}`} type="password" name="password_1" placeholder='Ввести данные' {...register("password_1", { required: "Это обязательное поле" })} />
                  <Link href={'#'} className={style.showPasswordIcon}></Link>
               </div>

               <div className={style.inputGroup}>
                  <label className={`${style.inputLabel} ${errors.password_2 ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Подтвердите пароль
                  </label>
                  {errors.password_2 && (<span className={style.validation}>Это обязательное поле</span>)}
                  <input className={`${style.input} ${errors.password_2 ? style.errorInput : style.input}`} type="password" name="password_2" placeholder='Ввести данные' {...register("password_2", { required: "Это обязательное поле" })} />
                  <Link href={'#'} className={style.showPasswordIcon}></Link>
               </div>

               <div className={style.register}>
                  <span className={style.registerSpan}>Есть аккаунта? </span>
                  <Link href="/" className={style.registerLink}>Войти</Link>
               </div>
               <div className={style.btn}><CreateAccountButtn /></div>
            </form>
         </div>
      </div>
   )
} 