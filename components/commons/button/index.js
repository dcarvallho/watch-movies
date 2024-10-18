import React from 'react'
import style from './style.module.scss'

const ButtonComponent = ({ children, actionButton }) => {
  return (
    <button onClick={actionButton} className={style.button}>{children}</button>
  )
}

export default ButtonComponent;