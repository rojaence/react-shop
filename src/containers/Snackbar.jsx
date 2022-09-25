import React from 'react';
import Icon from '@components/Icon';
import Button from '@components/Button';
import '@styles/snackbar.scss';

const Snackbar = ({ message = '', color = 'success'}) => {
  return (
    <article className={`snackbar${color ? `snackbar--${color}` : ''}`}>
      <Icon name='alert'/>
      <h2 className='snackbar__message'>
        { message }
      </h2>
      <Button icon='close' fab flat/>
    </article>
  )
}

export default Snackbar;