import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import CustomerList from "./pages/customer";
import Orders from "./pages/orders";
import Chart from "./pages/chart";
import NotFound from "./pages/notfound";

function App() {
  // inputが2個あるので、入力したものを保持するためにuseStateが2つ必要
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");
  //APIのデータを表示するときは 必ず配列
  const [data, setData] = useState([]);

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

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        console.log(response, "response");
        //jsonに変換
        const data = await response.json();
        console.log(data, "中身");
        //取得したjsのデータをuseStateの更新処理で上書きする
        setData(data);
      } catch (error) {}

      // おまじないの処理の終わり、下は消さない
    };
    fetchData();

    //この下は消さない
  }, []);

  console.log("順番1");

  return (
    <>
      {/* データを表示する方法「map」 */}
      {data.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}

      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<CustomerList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* <div>
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
      </div> */}
      {/*  */}
    </>
  );
}

export default App;
