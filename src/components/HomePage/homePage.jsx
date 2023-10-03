import './homePage.css';
import reactIcon from '../../assets/reactjs-icon 2.png';

const homePage = () => {
  return (
    <>
    <div className="container">
      <h1 className="h1">Fun facts about React</h1>
      <ul className="ul">
      <li className="li">Was first released in 2013</li>
      <li className="li">Was originally created by Jordan Walke</li>
      <li className="li">Has well over 100K stars on GitHub</li>
      <li className="li">Is maintained by Facebook</li>
      <li className="li">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className='react_icon' src={reactIcon} alt="" />
    </div>
    </>
  )
}


export default homePage;