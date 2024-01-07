import React from 'react'
import styles from './Container.module.css'
import classNames from 'classnames';

export default function Container({children, className}) {

  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  )
}
