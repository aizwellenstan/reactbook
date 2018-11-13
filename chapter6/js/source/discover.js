"use strict";

import Button from "./components/Button";
import Suggest from "./components/Suggest";
import Rating from "./components/Rating";
import FormInput from "./components/FormInput";
import Logo from "./components/Logo";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div style={{padding: "20px"}}>
    <h1>コンポーネント一覧</h1>

    <h2>Logo</h2>
    <div style={{display: "inline-block", background: "purple"}}>
      <Logo />
    </div>

    <h2>Button</h2>
    <div>onClickが指定されたButton: <Button onClick={() => alert("クリックされました")}>クリック</Button></div>
    <div>hrefが指定されたButton: <Button href="http://reactjs.com">フォローする</Button></div>
    <div>クラス名が指定されたButton: <Button className="custom">何もしません</Button></div>

    <h2>Suggest</h2>
    <div><Suggest options={["eenie", "meenie", "miney", "mo"]} /></div>

    <h2>Rating</h2>
    <div>初期値なし: <Rating /></div>
    <div>初期値4: <Rating defaultValue={4} /></div>
    <div>最大値11: <Rating max={11} /></div>
    <div>読み取り専用: <Rating readonly={true} defaultValue={3} /></div>

    <h2>FormInput</h2>
    <table><tbody>
      <tr>
        <td>単純な入力フィールド</td>
        <td><FormInput /></td>
      </tr>
      <tr>
        <td>デフォルト値</td>
        <td><FormInput defaultValue="デフォルトです" /></td>
      </tr>
      <tr>
        <td>年の入力</td>
        <td><FormInput type="year" /></td>
      </tr>
      <tr>
        <td>評価</td>
        <td><FormInput type="rating" defaultValue={4} /></td>
      </tr>
      <tr>
        <td>入力候補の提示</td>
        <td><FormInput
          type="suggest"
          options={["red", "green", "blue"]}
          defaultValue="green" />
        </td>
      </tr>
      <tr>
        <td>単純なテキストエリア</td>
        <td><FormInput type="text" /></td>
      </tr>
    </tbody></table>

    {/* その他のコンポーネントはここに追加されます */}
  </div>,
  document.getElementById("pad")
);
