// import logo from './logo.svg';
import './App.css';
import ClassButton from './components/class-components/button/button';
import ClassForm from './components/class-components/form/form';
import ClassHeading from './components/class-components/heading/heading';
import ClassImage from './components/class-components/image/image';
import ClassList from './components/class-components/list/list';
import ClassTable from './components/class-components/table/table';

import CustomButton from "./components/functional-components/button/button";
import CustomForm from "./components/functional-components/form/form";
import Heading from "./components/functional-components/heading/heading";
import CustomImage from "./components/functional-components/image/image";
import CustomList from "./components/functional-components/list/list";
import CustomTable from "./components/functional-components/table/table";

// import ButtonComponent from "./components/class-components/button";
// import CustomButton from './components/functional-components/button/button';
// import CustomImage from './components/functional-components/image/image';

function App() {
  return (
    <>
    {/* <ButtonComponent/>
    <CustomButton/>
    <h4>Login feature</h4>
    <CustomImage/> */}

    <Heading/>
    <CustomButton/>
    <CustomImage/>
    <CustomForm/>
    <CustomList/>
    <CustomTable/>
    <ClassHeading/>
    <ClassButton/>
    <ClassImage/>
    <ClassForm/>
    <ClassList/>
    <ClassTable/>


    </>
  );
}

export default App;
