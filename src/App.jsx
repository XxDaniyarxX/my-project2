import './App.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'

function App() {

  return (
      <>
          <div className="images">
              <img src={img1} alt='img1'/>
              <img src={img2} alt='img2'/>
              <img src={img3} alt='img3'/>
              <img src={img4} alt='img4'/>
              <img src={img5} alt='img5'/>
              <img src={img6} alt='img6'/>
              <img src={img7} alt='img7'/>
              <img src={img8} alt='img8'/>
          </div>
      </>
  )
}

export default App
