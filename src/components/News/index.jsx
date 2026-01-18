import React from "react";
import styles from "./style.module.scss";

const News = () => {
  return (
    <>
      <div className={styles.news}>
        <dl>
          <dt>2024.xx.</dt>
          <dd>更新あり</dd>
        </dl>
        <dl>
          <dt>2024.xx.</dt>
          <dd>問い合わせあり</dd>
        </dl>
        <dl>
          <dt>2024.xx.</dt>
          <dd>未返信</dd>
        </dl>
        <dl>
          <dt>2024.xx.</dt>
          <dd>重要項目未確認</dd>
        </dl>
      </div>
    </>
  );
};

export default News;
