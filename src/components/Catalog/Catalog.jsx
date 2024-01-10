import React from 'react'
import Order from '../Order/Order'
import Container from '../Container/Container'
import styles from './Catalog.module.css'

import {goodsList} from '../../utils/goods'
import CatalogProduct from '../CatalogProduct/CatalogProduct'


export default function Catalog() {
  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />

        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бургеры</h2>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
              {goodsList.map(i => (
                <li 
                  className={styles.item} 
                  key={i.title}>
                  <CatalogProduct 
                    title={i.title} 
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
