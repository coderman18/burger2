/* eslint-disable no-sequences */
import React from 'react'
import classNames from 'classnames'

import Container from '../Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../store/category/categorySlice'

import styles from './Navigation.module.css'

export default function Navigation() {

  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch()
    
  return (
    <>
      <nav className={styles.navigation}>
      <Container className={classNames(styles.container, styles.container)}>
        <ul className={styles.list}>
          {category.map((item, i) => 
            <li 
              className={styles.item}
            >
              <button 
                className={classNames(
                  styles.button, 
                  activeCategory === i ? styles.button_active : '')}
                style={{ backgroundImage: `url(${item.image})` }}  
                onClick={() => {
                  dispatch(changeCategory({indexCategory: i}))
                }}
              >
                {item.rus}      
              </button>
          </li>
          )}
        </ul>
      </Container>
    </nav>
    </>
  )
}
