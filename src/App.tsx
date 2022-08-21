import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickData}>データ取得</button>
    </div>
  );
}
