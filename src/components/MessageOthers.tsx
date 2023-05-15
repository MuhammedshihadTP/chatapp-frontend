import React from 'react'
import style from './style.module.scss'

function MessageOthers() {
  return (
    <div className={style.other_message_container}>
        <div className={style.conversation_container}>
            <p className={style.icon}></p>
            <div className={style.other_text_container}>
                <p className={style.title}>shihad</p>
                <p className={style.last_message}>hhhuiu</p>
                <p className={style.time}>12:00px</p>
            </div>
        </div>

    
    </div>
  )
}

export default MessageOthers