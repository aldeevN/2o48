import React from "react";
import style from "./../../styles/Button.module.css"


export default function ContinueButton({children, onClick, disabled, onSubmit, ref}){
	return(
		<button
		onSubmit={onSubmit}
		onClick={onClick}
		ref={ref}
		disabled={disabled}
		 className={style.btn}>
			{children}
			</button>
	)

}