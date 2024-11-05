
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Form, FormGroup, Input, Label } from 'reactstrap';

function App() {
  

  return (
    <>
     <div className='App'>
      <header>
        <div className='header-content'>
          <h1>Teknolojik Yemekler</h1>
          <p>
            Anasayfa-Seçenekler - <strong>Sipariş Oluştur</strong>
          </p>
          <main>
            <div className='container-lg'>
              <h2>Position Absolute Acı Pizza</h2>
              <div className="food-rank-price">
                <h3>85.58TL</h3>
                <p>85.58TL</p>
                <p>(200)</p>
              </div>
              <div className="food-description">
                <p>
                  Frontent Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir.Küçük bir pizzaya bazen pizzeta denir.
                </p>
              </div>
            </div>
          </main>
        </div>
      </header>
 
     
     </div>
     
<Form>
  <FormGroup>
    <input type='checkbox' name='pepperoni' id='pepperoni'></input>
    <Label htmlFor='pepperoni'>Pepperoni</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='tavuk' id='tavuk'></input>
    <Label htmlFor='tavuk'>Tavuk Izgara </Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='soğan' id='soğan'></input>
    <Label htmlFor='soğan'>Soğan</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='mısır' id='mısır'></input>
    <Label htmlFor='mısır'>Mısır</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='sarımsak' id='sarımsak'></input>
    <Label htmlFor='sarımsak'>Sarımsak</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='sarımsak' id='sarımsak'></input>
    <Label htmlFor='sarımsak'>Sarımsak</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='ananas' id='ananas'></input>
    <Label htmlFor='ananas'>Ananas</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='sucuk' id='sucuk'></input>
    <Label htmlFor='sucuk'>Sucuk</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='sosis' id='sosis'></input>
    <Label htmlFor='sosis'>Sosis</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='biber' id='biber'></input>
    <Label htmlFor='biber'>Biber</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='kabak' id='kabak'></input>
    <Label htmlFor='kabak'>kabak</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='kanadaJambonu' id='kanadaJambonu'></input>
    <Label htmlFor='kanadaJambonu'>Kanada Jambonu</Label>
  </FormGroup>
  <FormGroup>
    <input type='checkbox' name='jalapeno' id='jalapeno'></input>
    <Label htmlFor='jalapeno'>Jalapeno</Label>
  </FormGroup>
 
</Form>
<div className='flex column'>Sipariş Formu</div>
<Form>
<FormGroup tag="fieldset">
<legend>
      Boyut Seç
    </legend>
    
</FormGroup>
</Form>
    </>
  )
}

export default App
