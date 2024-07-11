import { AuthActions } from '../../api/auth/utils';
import { useAppDispatch } from '../../redux/hooks';
import authSlice from '../../redux/slices';
import { useRouter } from 'next/navigation';
import exit from '../../../img/exit.svg';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import style from '../../styles/logout.module.css';
import sadImg from '../../../img/sad.svg';
import smileImg from '../../../img/smile.svg';

export default function Logout(props) {
   const [display, setDisplay] = useState('none');
   const router = useRouter();
   const { logout } = AuthActions();
   const dispatch = useAppDispatch();

   const handleLogout = () => {
      logout();
      authSlice.actions.setLogout();
      // dispatch(authSlice.actions.setAuthStatus({ isAuthenticated: true }))
      router.push('/');
   };
   return (
      <div className={style.m}>

         <div className={style.main}>

            <h2 className={style.h2}>Выйти из аккаунта?</h2>

            <div className={style.btnContainer}>
               <button className={style.btn} onClick={handleLogout}>
                  ДА{' '}
                  <Image
                     className={style.img}
                     src={sadImg}
                     alt="sad smyle face"
                  />
               </button>

               <button
                  className={style.btn}
                  onClick={() => {
                     props.onClose();
                  }}
               >
                  Нет{' '}
                  <Image
                     className={style.img}
                     src={smileImg}
                     alt="smilling smyle face"
                  />
               </button>

            </div>

         </div>

      </div>
   );
}
