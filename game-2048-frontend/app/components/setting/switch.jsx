import React from "react";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const AntSwitch = styled(Switch)(({ theme }) => ({
   width: 90,
   height: 45,
   padding: 0,
   border: '5px solid #FFFFFF',
   borderRadius: 100,
   display: 'flex',
   '&:active': {
      '& .MuiSwitch-thumb': {
         width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
         transform: 'translateX(12px)',
      },
   },
   '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
         transform: 'translateX(48px)',
         color: '#4A3857',
         '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
         },
      },
   },
   '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      marginTop: 5,
      marginLeft: 7,
      width: 20,
      height: 20,
      borderRadius: 100,
      transition: theme.transitions.create(['width'], {
         duration: 200,
      }),
   },
   '& .MuiSwitch-track': {
      borderWidth: 10,
      borderColor: '#FFFFFF',
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
         theme.palette.mode === 'dark' ? '#FFFFFF' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
   },
}));

export default function SwitchC() {
	return(
		<AntSwitch defaultChecked color='grey' />
	)

}