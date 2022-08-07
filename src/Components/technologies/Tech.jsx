import React from "react";
import { IoRadioButtonOnSharp } from 'react-icons/io5'


export function Tech({ item }) {
  return (
    <div className='tech__item'>
      <IoRadioButtonOnSharp />
      <h4>{item}</h4>
    </div>
  );
}
