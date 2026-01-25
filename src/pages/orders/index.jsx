  import React, { useState } from "react";
  import styles from "./style.module.scss";
  import Header from "../../layout/Header";
  import SideBar from "../../layout/SideBar";
  import ordersData from "../../mock/orders.json";

  const Orders = () => {
    const [orders] = useState(ordersData);

    return (
      <>
        <Header />
        <div className={styles.orders}>
          <SideBar />
          <div className={styles.contents}>
            <h2>注文管理</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>注文ID</th>
                  <th>顧客名</th>
                  <th>注文日</th>
                  <th>合計金額</th>
                  <th>ステータス</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>

  <td>¥{order.total.toLocaleString()}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  export default Orders;
