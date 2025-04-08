import './App.css';
import User from "./comments"
import "./index.css"
// import images
import cactusicon from"./cactus_icon.svg"
import facemanicon from "./face_man_icon.svg"
import maleicon from "./male_icon.svg"

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User image={cactusicon} username="Mr. Cactus" date="04/01/25" usercomment="Great Job!"/>
        <User image={cactusicon} username="Mr. Cactus" date="04/01/25" usercomment="Great Job!"/>
        <User image={cactusicon} username="Mr. Cactus" date="04/01/25" usercomment="Great Job!"/>
      </main>
    </>
  );
}

export default App;