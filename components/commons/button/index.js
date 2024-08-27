import React from 'react'
import style from './style.module.scss'

const ButtonComponent = ({ children, actionButton }) => {
  return (
    <div onClick={actionButton} className={style.button}>{children}</div>
  )
}

export default ButtonComponent;