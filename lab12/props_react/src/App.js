// imported files
import './App.css';
import "./index.css"
import User from "./comments"
import User_feedback from './feedback';
import Modalwindow from "./modalwindow"
// import images 
import cactusicon from "./images/batman_icon.png"
import facemanicon from "./images/male_man_icon.png"
import headseticon from "./images/harley_icon.png"


function App() {
  return (
    <>
      <h1> User Comments</h1>
      <main className='maincontainer'>
        <User_feedback><User image={cactusicon} username= "Batman" date="04/01/25" usercomment="Great Job"/></User_feedback>
        <User_feedback><User image={facemanicon} username= "Clark" date="04/05/25"  usercomment="I need more rest"/></User_feedback>
        <User_feedback><User image={headseticon} username= "Harley" date="04/10/25" usercomment="Glad to"/></User_feedback>
      </main>



    </>
  );
}

export default App;
