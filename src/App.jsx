import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import { Button, Form, FormGroup, Input, Label, ButtonGroup } from 'reactstrap';
import { useState } from 'react';

const malzemeler = ["Pepperoni","Sosis", "Kanada Jambonu","Tavuk Izgara","Soğan","Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"];
const boyutlar = ["küçük", "orta", "büyük"];
const hamurSeç = ["ince", "orta", "kalın"];

function App() {
  const [formData, setFormData] = useState({
    boyut: "",
    hamur: "",
    malzeme: [],
    not: ""
  });
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState (false);

  const handleChange = (event) => {
    const { name, id, type, value, checked } = event.target;
    console.log("type, name, value, checked:", type, name, value, checked);

    const initialErrorMessages = {
      boyut: "Lütfen bir boyut seçin.",
      hamur: "Lütfen bir hamur tipi seçin.",
      malzeme: "En az beş malzeme seçmelisiniz."
    };
    
    

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        malzeme: checked
          ? [...prevFormData.malzeme, id]
          : prevFormData.malzeme.filter((item) => item !== id)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
 
  return (
    <>
      <div className='container-lg'>
        <header>
          <div className='content-container'><img src='Assets/Iteration-1-assets/logo.svg' alt='Teknolojik Yemekler'/></div>
          <div className='content-container'>
          <button>Anasayfa</button>
          <button>Sipariş Oluştur</button>
        </div>
        </header>
        
      </div>
      <div className='content-container'>
        <h2>Position Absolute Acı Pizza</h2>
        <div>
          <p>85.50₺</p>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <div className='content-container'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkla pişirilen, genelikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir</div>
      </div>
      <div>
        <Form className='content-container'>
          <Label htmlFor="boyut">Boyut Seç<span style={{color: "red"}}>*</span></Label>
          {boyutlar.map((boyut, index) => (
            <FormGroup key={index}>
              <Input id={boyut} name="boyut" type="radio" onChange={handleChange} value={boyut} checked={formData.boyut === boyut} />
              <Label htmlFor={boyut}>{boyut}</Label>
            </FormGroup>
          ))}
        </Form>
        <div className='content-container'>
          <Label htmlFor="hamurlar">Hamur Seç<span style={{color: "red"}}>*</span></Label>
          <Input type="select" name="hamur" onChange={handleChange} value={formData.hamur}>
            {hamurSeç.map((hamur, index) => (
              <option key={index} value={hamur}>{hamur}</option>
            ))}
          </Input>
        </div>
        <div className='content-container'>
          {malzemeler.map((malz, index) => (
            <FormGroup key={index}>
              <Input id={malz} name="malzeme" type="checkbox" onChange={handleChange} checked={formData.malzeme.includes(malz)} />
              <Label htmlFor={malz}>{malz}</Label>
            </FormGroup>
          ))}
        </div>
        <div className='content-container'>
          <FormGroup>
            <Label>Sipariş Notu</Label>
            <Input name="not" type="textarea" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" onChange={handleChange} value={formData.not} />
          </FormGroup>
        </div>
        <div className='content-container'>
          <ButtonGroup>
            <Button>-</Button>
            <Button>1</Button>
            <Button>+</Button>
          </ButtonGroup>

          <div className='content-container'>
            <h2>Sipariş Toplamı</h2>
            <div className='content-container'>
              <p>Seçimler</p>
              <p>25</p>
            </div>

            <div className='content-container'>
              <p>Toplam</p>
              <p>110</p>
            </div>
          </div>
          <Button>SİPARİŞ VER</Button>
        </div>
      </div>
    </>
  );
}

export default App;