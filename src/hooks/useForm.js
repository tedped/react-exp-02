// カスタムフックはuseXxxxという命名をつけることが慣例的に決まっています

// ここにカスタムフックの処理を書いていきます
// useState、useEffectなどのReactのフックを使うことができます
import { useState, useEffect } from "react";

export const useForm = () => {
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

  //ここがポイント！以下でreturnというものを使い、他のファイルで呼びさせるようにする記述方法です
  return {
    handleNameChange,
    handleEmailChange,
    name,
    email,
    data,
  };
  // ここから下は消さない
};
