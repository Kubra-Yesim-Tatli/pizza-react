import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <div>
        <h1> Teknolojik Yemekler </h1>
      </div>
      <div>
        <button>Anasayfa</button>
        <button>Sipariş Oluştur</button>
      </div>
     </div>
    </>
  )
}

export default App
