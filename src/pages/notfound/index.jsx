import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <>
      <Header />
      <div className={styles.notfound}>
        <div className={styles.content}>
          <h2>お探しのページが見つかりません</h2>
        </div>

        <Link to="/">ホームへ戻る</Link>
      </div>
    </>
  );
};

export default NotFound404;
