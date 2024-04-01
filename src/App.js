// import logo from './logo.svg';
import './App.css';

import ButtonComponent from "./components/class-components/button";
import CustomButton from './components/functional-components/button/button';
import CustomImage from './components/functional-components/image/image';

function App() {
  return (
    <>
    <ButtonComponent/>
    <CustomButton/>
    <h4>Login feature</h4>
    <CustomImage/>
    </>
  );
}

export default App;
