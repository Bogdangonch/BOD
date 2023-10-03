import "./header.css"
import reactIcon from '../../assets/reactjs-icon.png'


const header = () => {
  return (
    <>
  <header>
    <img src={reactIcon} alt="icon" />
    <p>ReactFacts</p>
  </header>
    </>
  );
}



export default header;