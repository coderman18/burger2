import React from 'react'
import Count from '../Count/Count'
import styles from './OrderGoods.module.css'

export default function OrderGoods({ item }) {
  return (
    <li className={styles.item}>
      <img 
        className={styles.image} 
        src="../../assets/img/burger_1.jpg" 
        alt={item} 
      />

        <div className={styles.goods}>
          <h3 className={styles.title}>{item}</h3>

            <p className={styles.weight}>512г</p>

            <p className={styles.price}>1279
              <span className="currency">₽</span>
            </p>
        </div>

        <Count count={1} />
        
    </li>
  )
}
