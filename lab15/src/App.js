import './App.css';
import {useState} from 'react'

function App() {
  // set up an initial counter for the slice 
  // let counter = 1
  // set up state
  const [counter, setCounter] = useState(1)
  // list of three messages
  const messages = ["I think, therefore I am", "I have a dream", "The only thing I fear is fear itself"]
  
  // set state for open and close button
  const [isopen, setIsopen] = useState(false)

  // function to open a 'read more' paragraph
  const readmore = function(){
    setIsopen(!isopen)
  }

  return (
    <>
      <h1 className='title'> Slide App By Joseph Bernabe</h1>
      <section className='slicewrapper'>
        <div className='numberWrapper'>
          <div className={counter==1? "active":""}><p>1</p></div>
          <div className={counter==2? "active":""}><p>2</p></div>
          <div className={counter==3? "active":""}><p>3</p></div>
        </div>
        <p className="msg"><em>{messages[counter-1]}</em></p>
        <div className='btngroup'>
          <button onClick={function(){if(counter>1)setCounter(counter-1)}}> Previous </button>
          <button onClick={function(){if(counter<messages.length)setCounter(counter+1)}}> Next </button>
        </div>
      </section>

      <h1 className='title'>Open and Close</h1>
      <div className='info'>
        <p><b>Cat (Felis Catus)</b>, commonly referred to as the domestic cat or house cat</p>
        <button className='readmore_btn' onClick={readmore}>{isopen?"Hide":"Read More"}</button>
      </div>

      <section>
        {
        (isopen) &&
        <p>The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Its retractable claws are adapted to killing small prey species such as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator.</p>
        }
      </section>
    </>
  );
}

export default App;
