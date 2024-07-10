import React from 'react'
import "./assets/css/style.css"
import Dice from './assets/images/icon-dice.svg';
import Img1 from './assets/images/pattern-divider-mobile.svg';
import Img2 from './assets/images/pattern-divider-desktop.svg'
function App() {
  
  //test of comments

  const [isAdvice, setIsAdvice] = React.useState({
     id: "117",
     advice: "It is easy to sit up and take nitice, what's difficult is getting up and taking action."
  })


  const [allAdvice, setAllAdvice] = React.useState({});

  React.useEffect(() => {
      fetch("https://api.adviceslip.com/advice")
      .then(resp => resp.json())
      .then(data => setAllAdvice(data.slip))
  },[isAdvice])



  function hundleClick() {
    setIsAdvice(() =>  {
      return {
        id: allAdvice.id,
        advice: allAdvice.advice
      }
    })
  }


  return (
    <main>
      <article className='advice--container'>
         <h2 className='advice--title'>Advice #{isAdvice.id} </h2>
         <p className='quote--advice'>“{isAdvice.advice}”</p>

    
         <div id='divider'>
            <img src={Img1}  alt='divider' id="divider-mobile" aria-describedby='divider--image'/>
            <img src={Img2}  alt='divider' id="divider-desktop"  aria-describedby='divider--image'/>
         </div>
         <button aria-description='button-to-get-you-advices' className='btn--dice' onClick={hundleClick} ><img src={Dice}  alt='dice--icon' /></button>
      </article>
    </main>
  )
}

export default App
