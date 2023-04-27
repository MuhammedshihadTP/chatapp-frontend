import React from 'react'
import style from './style.module.scss'
import Sidebar from './Sidebar'
import Workarea from './Workarea'

function Maincontainer() {
  return (
    <div className={style.main_container}>
        <Sidebar/>
        <Workarea/>
    </div>
  )
}

export default Maincontainer