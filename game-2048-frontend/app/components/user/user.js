"use client"
import style from "./../../styles/user.module.css"
import Image from "next/image";
import first_nameIcon from "../../../img/name.svg"
import lastnameIcon from "../../../img/lastname.svg"
import usernameIcon from "../../../img/username.svg"
import recordIcon from "../../../img/record.svg"
import myplaceIcon from "../../../img/myplace.svg"
import mailIcon from "../../../img/mail.svg"
import passwordIcon from "../../../img/password.svg"
import useSWR from "swr"
import { useForm } from "react-hook-form";
import { fetcher } from "../../fetcher";
import { useState } from "react";
import {AuthActions} from "../../api/auth/utils"
import { RandomAvatar } from "react-random-avatars"

export default function User(props) {
    const { data: user } = useSWR("/api/v1/user/me", fetcher)
    const apiBack = process.env.BACKEND_API_KEY
    const [edit,setEdit] = useState(true)
    const { register, handleSubmit, formState:{errors}, setError } = useForm()
    const {editUser} = AuthActions()

    const onSubmit = (data) => {
        editUser(data.first_name,data.last_name,data.password)
            .json(()=>{})
            .catch((err) => {
               setError("root", {
                  type: "manual",
                  message: err.json.password,
               })
         })
        setEdit(!edit)
    }
    return (
        <div className={style.container}>
            <button onClick={() => {props.onClose()}} className={style.closeBtn} style={{
            }}>
            </button>
            {user?.profile_pic ? (<img className={style.main__logo} src={`${apiBack}${user?.profile_pic}`} alt="user-jpg" />):(<div className={style.main__logo}><RandomAvatar name={user?.username}  square={true} size={200} /></div>)}
            <span className={style.regError}>{errors.root?.message}</span>
            <div className={style.header__title}>
                <h1 className={style.title}>
                    {user?.first_name}</h1>
                <h1 className={style.title}>
                    {user?.last_name}
                </h1>
            </div>



            <p className={style.headerText}>
                О себе</p>
            <hr className={style.horizontalLine}/>
               {edit?(
                <div className={style.main} >
                 <div className={style.leftContent} >
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={first_nameIcon} alt="first-name-icon" />
                        Имя:
                    </p>
                    <p className={style.leftText} >
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={lastnameIcon} alt="last-name-icon" />
                        Фамилия:</p>
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={recordIcon} alt="my-record-icon" />
                        Никнейм:</p>
                    <p className={style.leftText} >
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={usernameIcon} alt="username-icon" />
                        Мой рекорд:</p>
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={myplaceIcon} alt="my-place-icon" />
                        Мое место в рейтинге:</p>
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={mailIcon} alt="mail-icon" />
                        Почта:</p>
                </div>
                <div className={style.rightContent}>
                    <p className={style.rightText}>{user?.first_name || "Нет данных"}</p>
                    <p className={style.rightText}>{user?.last_name || "Нет данных"}</p>
                    <p className={style.rightText}>{user?.username || "Нет данных"}</p>
                    <p className={style.rightText}>{user?.max_score || "Нет данных"}</p>
                    <p className={style.rightText}>{user?.rating || "Нет данных"}</p>
                    <p className={style.rightText}>{user?.email || "Нет данных"}</p>
                    <button className={style.footerBtn} onClick={()=>{setEdit(!edit)}}>
                 Редактировать
             </button>
                </div>
                </div>
            ): (
                <div className={style.main} >
                 <div className={style.leftContent} >
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={first_nameIcon} alt="first-name-icon" />
                        Имя:
                    </p>
                    <p className={style.leftText} >
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={lastnameIcon} alt="last-name-icon" />
                        Фамилия:</p>
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={recordIcon} alt="my-record-icon" />
                        Никнейм:</p>
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px"}} src={passwordIcon} alt="my-place-icon" />
                        Пароль</p>
                    <p className={style.leftText}>
                        <Image style={{ width: "25px", height: "25px", marginRight: "15px" }} src={mailIcon} alt="mail-icon" />
                        Почта:</p>
                </div>
                <form className={style.rightContent} onSubmit={handleSubmit(onSubmit)}>
                    <input className={style.input} id="firstname" name="firs_tname" type="text" placeholder={user?.first_name} {...register("first_name",{  required: "Это обязательное поле"})} />
                    <br/>
                    <input className={style.input} id="last_name" name="lastname" type="text" placeholder={user?.last_name} {...register("last_name",{  required: "Это обязательное поле"})}/>
                    <p className={style.rightText}>{user?.username}</p>
                    <input className={style.input} id="pass" type="password" name="password" {...register("password", { required: "Это обязательное поле" })}/>
                    <p className={style.rightText}>{user?.email}</p>
                    <button type="submit" className={style.saveBtn} >
                        Сохранить изменения
                    </button>
                </form>
                </div>
                )}
        </div>
    );
}
