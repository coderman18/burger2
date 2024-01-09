import React from 'react'
import OrderGoods from '../OrderGoods/OrderGoods'
import { orderList } from '../../utils/orderList'
import styles from './Order.module.css'


export default function Order(props) {
  return (
    <div className={styles.order}>
          <section className={styles.wrapper}>
            <div className={styles.header} tabIndex="0" role="button">
              <h2 className={styles.title}>Корзина</h2>

              <span className={styles.count}>4</span>
            </div>

            <div className={styles.wrap__list}>
              <ul className={styles.list}>
                {orderList.map(i => <OrderGoods title={i} />)}
              </ul>

              <div className={styles.total}>
                <p>Итого</p>
                <p>
                  <span className={styles.amount}>1279</span>
                  <span className={styles.currency}>₽</span>
                </p>
              </div>

              <button className={styles.submit}>Оформить заказ</button>

              <div className={styles.apeal}>
                <p className={styles.text}>Бесплатная доставка</p>
                <button className={styles.close}>Свернуть</button>
              </div>
            </div>
          </section>
        </div>
  )
}
