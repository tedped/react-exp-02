import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        if (parsed.username) {
          setUsername(parsed.username);
        }
      } catch (e) {
        console.error("ユーザーデータの読み取りに失敗しました", e);
      }
    }
  }, []);

  return (
    <div className={styles.header}>
      <h1>管理画面</h1>

      <div className={styles.header__menu}>
        <HomeIcon />

        <Badge badgeContent={100} color="primary">
          <MailIcon color="action" />
        </Badge>

        <p>{username ? `${username} さん` : "ログインされていません"}</p>
      </div>
    </div>
  );
};

export default Header;
