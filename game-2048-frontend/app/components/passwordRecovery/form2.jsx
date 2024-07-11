import React from "react";
import style from "./../../styles/passordRecovery.module.css"
import Button from '../button/Button';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AuthActions } from '@/app/api/auth/utils';
export default function Form2(token) {

   const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
   } = useForm();

   const {checkCode } = AuthActions();

   const [btnDis, setBtnDisable] = useState(true);

   const CheckResetCode = async (data) => {
      try {
         const response = await checkCode(data.email, data.code);
         router.push('/password_recovery/reset');
      } catch (err) {}
      setError('root', { type: 'manual', message: 'some error', err });
   };

   const router = useRouter();

	return(
		<>
			<form action="">
			<div className={`${style.inputGroup} ${style.margin}`}>
                  <label className={style.inputLabel}>Код потверждения</label>
                  <input
                     className={style.input}
                     id="code"
                     type="text"
                     placeholder="Ввести данные"
                     name="code"
                  />
               </div>

               <div className={style.btn}>
                  <Button

                     children={'Продолжить'}
                     disabled={btnDis}
                  ></Button>
               </div>
			</form>
		</>
	)
}