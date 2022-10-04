import React, { useState } from 'react';
import Input from "@components/Input";
import Button from "@components/Button";
import "@styles/account.scss";

const UserAccount = () => {
  const [disabledForm, setDisabledForm] = useState(true);

  return (
    <section className='profile'>
      <h2 className='profile__title'>My account</h2>
      <form action="#" className='form' disabled>
        <Input hint='' label="User email" block disabled={disabledForm} id='user-email' customClass='form__input'/>
        <Input hint='' label="User name" block disabled={disabledForm} id='user-name' customClass='form__input'/>
        <Input hint='**********' block type='password' disabled={disabledForm} id='user-password' label='Password'/>
        <div className='form__actions'>
          <Button type='submit' text={`${disabledForm ? 'Edit' : 'Save'}`} outlined={disabledForm} customClass='submit-button' onClick={() => setDisabledForm(prevValue => !prevValue)}/>
        </div>
      </form>
    </section>
  )
};

export default UserAccount;