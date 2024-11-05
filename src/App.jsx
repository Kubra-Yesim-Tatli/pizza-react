import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const malzemeler = ["Pepperoni", "Kanada Jambonu", "Soğan", "Mısır", "Jalapeno", "Biber", "Ananas", "Sosis", "tavuk Izgara", "Domates", "Sucuk", "Sarımsak", "Kapak"];
const boyutlar = ["Küçük", "Orta", "Büyük"];
const hamurKalinliği =["İnce", "Orta", "Kalın"];
function App() {
  

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
     <div>
      <h2>Position Absolute Acı Pizza</h2>
     </div>
     
    </>
  )
}

export default App
