import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/News";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import CalendarItem from "./components/CalendarItem";
import BarChart from "./components/Chart";

function App() {
  // inputが2個あるので、入力したものを保持するためにuseStateが2つ必要
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");

  // イベント処理=クリックしたら〜する、マウスを動かしたら〜する、マウスが離れたら〜する、・・・
  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(e);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e);
  };

  useEffect(() => {
    //この中に書きます
    console.log("順番2");
    //この下は消さない
  }, []);

  console.log("順番1");

  return (
    <>
      {/*  */}
      <Header />
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
      <News />
      <CalendarItem />
      <BarChart />
      <div>
        <p>名前が入ります</p>
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {/*  */}
    </>
  );
}

export default App;
