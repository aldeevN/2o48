
import LoginButton from '../button/loginButton';
import style from './../../styles/Auth.module.css';

import Image from 'next/image';
import logo from './../../../img/2048.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { AuthActions } from "../../api/auth/utils"
import { useAppDispatch } from "../../redux/hooks"
import authSlice from "../../redux/slices";


export default function Login() {
   const { register, handleSubmit, setError, formState: { errors } } = useForm()
   const router = useRouter()

   const dispatch = useAppDispatch()

   const { login, storeToken } = AuthActions()

   const onSubmit = (data) => {

      login(data.email, data.password)
         .json((json) => {
            storeToken(json.access, "access")
            storeToken(json.refresh, "refresh")
            dispatch(authSlice.actions.setAuthStatus({ isAuthenticated: true }))
            router.push("/play")
         })
         .catch((err) => {
            setError("root", { type: "manual", message:  err.json.detail, })
         })
   }
   return (
      <div className={style.main}>
         <Image className={style.logo} src={logo} alt='2048' />

         <div className={style.background}>

            <form onSubmit={handleSubmit(onSubmit)}>
               <h2 className={style.h2}>Авторизация</h2>
               <span className={style.regError}>{errors.root?.message}</span>

               <div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={`${style.inputLabel} ${errors.email ? style.errorLabal : style.inputLabel}`} htmlFor="">
                     Почта
                  </label>
                  {errors.email && (<span className={style.validation}>Это обязательное поле</span>)}
                  <input className={`${style.input} ${errors.email ? style.errorInput : style.input}`} id='email' type="email" placeholder='Ввести данные' {...register("email", { required: "Это обязательное поле" })} />
               </div>
               <div className={style.inputGroup}>
                  <label className={style.inputLabel} htmlFor="">
                     Введите пароль
                  </label>
                  {errors.password && (<span className={style.validation}>Это обязательное поле</span>)}
                  <input className={`${style.input} ${errors.password ? style.errorInput : style.input}`} type="password" name="password" placeholder='Ввести данные' {...register("password", { required: "Это обязательное поле" })} />


                  <a href="#" className={style.showPasswordIcon}></a>
               </div>
               <div className={style.register}>
                  <span className={style.registerSpan}>Нет аккаунта? </span>
                  <Link href={"/registration"} className={style.registerLink}>Зарегистрироваться</Link>

               </div>
               <div className={style.btn}><LoginButton /></div>


               <Link href={"/password_recovery"} className={style.forgott}>Забыли пароль?</Link>
            </form>
         </div>
      </div>
   );
}
