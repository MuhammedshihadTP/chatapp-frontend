import React from 'react'
import style from './style.module.scss'

function MessageSelf() {
  return (
        <div className={style.self_message_container}>
            <div className={style.messageBox}>
                <p>hai</p>
                <p className={style.self_time}>12:00p</p>
            </div>
        </div>
  )
}

export default MessageSelf