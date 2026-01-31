import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import CustomerList from "./pages/customer";
import Orders from "./pages/orders";
import Chart from "./pages/chart";
import NotFound from "./pages/notfound";
// 1.別ファイルで切り出したカスタムフックを呼び出すにはimportで書かないといけません
import { useForm } from "./hooks/useForm";

function App() {
  // 2.カスタムフックで切り出した処理を呼び出す
  const { handleNameChange, handleEmailChange, name, email, data } = useForm();

  return (
    <>
      {/* データを表示する方法「map」 */}
      {/* {data.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))} */}

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
