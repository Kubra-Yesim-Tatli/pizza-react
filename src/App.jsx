import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import { Button, Form, FormGroup, Input, Label, ButtonGroup } from 'reactstrap';
import { useState, useEffect } from 'react';

const malzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"];
const boyutlar = ["küçük", "orta", "büyük"];
const hamurSeç = ["ince", "orta", "kalın"];
const malzemeFiyati = 5;
const boyutFiyatlar = {
  küçük: 50,
  orta: 75,
  büyük: 100
};

function App() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  const [formData, setFormData] = useState({
    boyut: "",
    hamur: "",
    malzeme: [],
    not: ""
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, id, type, value, checked } = event.target;

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

    // Validasyon kontrolü
    if (name === "boyut") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        boyut: value ? "" : "Bir boyut seçiniz"
      }));
    } else if (name === "hamur") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        hamur: value ? "" : "Bir hamur kalınlığı seçiniz"
      }));
    } else if (name === "malzeme") {
      const updatedMalzemeList = checked
        ? [...formData.malzeme, id]
        : formData.malzeme.filter((item) => item !== id);
      if (updatedMalzemeList.length < 4 || updatedMalzemeList.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          malzeme: "En az 4 ve en fazla 10 adet malzeme seçiniz"
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, malzeme: "" }));
      }
    }
  };
  useEffect(() => {
    let price = 0;
     price += formData.malzeme.length * malzemeFiyati;
      price *= quantity;
  
    setTotalPrice(price);
  }, [formData, quantity]);


useEffect(() => {
  const isValidForm = formData.boyut && formData.hamur && formData.malzeme.length >= 4 && formData.malzeme.length <= 10 && !Object.values(errors).some((error) => error !== "");
  setIsValid(isValidForm);
}, [formData, errors]);

const handleSubmit = (event) => {
  event.preventDefault();
  if (!isValid) return;

  axios.post("https://reqres.in/api/pizza", formData)
    .then((response) => {
      setFormData({
        boyut: "",
        hamur: "",
        malzeme: [],
        not: ""
      });
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

return (
  <>
    <div className='App'>
      <header>
        <div className='content-lg'>
          <div className='content-container'>
            <img src='Assets/Iteration-1-assets/logo.svg' alt='Teknolojik Yemekler'/>
          </div>
        </div>
        <div className='content-container'>
          Anasayfa
          Sipariş Oluştur
        </div>
      </header>
      <main className='flex column gap-m main container'>
        <div className='content-container'>
          <div class="grid-container">
          <h2>Position Absolute Acı Pizza</h2>
          <div>
          <div class="grid-item">85.50₺</div>
          <div class="grid-item">4.9</div>
          <div class="grid-item">200</div>
          </div>
          </div>
          </div>
          <div className='content-container'>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
          
        </div>
        <div className='flex between'>
          
          <div>
            <Form className='content-container'>
              <Label htmlFor="boyut">Boyut Seç<span style={{color: "red"}}>*</span></Label>
              {boyutlar.map((boyut, index) => (
                <FormGroup key={index}>
                  <Input id={boyut} name="boyut" type="radio" onChange={handleChange} value={boyut} checked={formData.boyut === boyut} />
                  <Label htmlFor={boyut}>{boyut}</Label>
                </FormGroup>
              ))}
              {errors.boyut && <p className="error-message">{errors.boyut}</p>}
            </Form>
          </div>
          <div className='content-container'>
            <div className='flex column'></div>
            <Label htmlFor="hamurlar">Hamur Seç<span style={{color: "red"}}>*</span></Label>
            <Input type="select" name="hamur" onChange={handleChange} value={formData.hamur}>
              <option value="">Seçiniz</option>
              {hamurSeç.map((hamur, index) => (
                <option key={index} value={hamur}>{hamur}</option>
              ))}
            </Input>
            {errors.hamur && <p className="error-message">{errors.hamur}</p>}
          </div>
          <div className='content-container'>
            {malzemeler.map((malz, index) => (
              <FormGroup key={index}>
                <Input id={malz} name="malzeme" type="checkbox" onChange={handleChange} checked={formData.malzeme.includes(malz)} />
                <Label htmlFor={malz}>{malz}</Label>
              </FormGroup>
            ))}
            {errors.malzeme && <p className="error-message">{errors.malzeme}</p>}
          </div>
          <div className='content-container'>
            <FormGroup>
              <Label>Sipariş Notu</Label>
              <Input name="not" type="textarea" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" onChange={handleChange} value={formData.not} />
            </FormGroup>
          </div>
          <div className='flex between'>
            <ButtonGroup>
            <Button onClick={decreaseQuantity}>-</Button>
              <Button disabled>{quantity}</Button>
              <Button onClick={increaseQuantity}>+</Button>
            </ButtonGroup>

            <div className='content-container'>
              <h2>Sipariş Toplamı</h2>
              <div className='content-container'>
                <p>Seçimler</p>
           
           <p>{formData.malzeme.length > 0 && `Malzemeler: ${formData.malzeme.join(", ")}`}</p>
           </div>

           <div className='content-container'>
           <p>Toplam Fiyat</p>
            <p>{totalPrice}₺</p>
         </div>
      </div>
            <Button onClick={handleSubmit} disabled={!isValid}>SİPARİŞ VER</Button>
          </div>
        </div>
      </main>
    </div>
  </>
);
}

export default App;