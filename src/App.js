import logo from './logo.svg';
import './global.css';
import Home from './views/home'
import MyTree from './views/myTree'
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      {/* <div className={ styles.lessClass }> 我是less - class </div> */}
      {/* <div>我是App组件</div>
      <Button type="primary">我是button</Button>
      <Home/> */}
      <MyTree/>
    </div>
  );
}

export default App;
