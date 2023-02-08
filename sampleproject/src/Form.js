import React, { useState } from "react";

function Form(props) {
  const { dataAktarma } = props;
  const [formData, setFormData] = useState({
    isim: "",
    email: "",
    rol: "",
  });

  function handleInputChange(event) {
    const { value, id } = event.target;

    const yeniState = {
      ...formData,
      [id]: value,
      // id'yi köşeli parantez ile kullanarak ilgili id'yi value değerine eşitliyoruz
    };
    setFormData(yeniState); //formdata yenistate olarak güncellensin diyorsun
  }

  function handleClearForm() {
    console.log("form temizlendi");
    setFormData({
      isim: "",
      email: "",
      rol: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    return dataAktarma(formData);
  }
  //state her değiştiğinde çalışacağı için bu değişkenin değeri de her seferinde güncellenecek

  // OLMASINI İSTEMEDİĞİN ŞEYLER TRUE OLACAK ŞEKİLDE YAZMALISIN

  const boslukTakibi =
    formData.isim === "" || formData.email === "" || formData.rol === "";

  const mailTakibi = !formData.email.includes("@.com");

  const disabledMi = boslukTakibi || mailTakibi;

  return (
    <div className="Form">
      <p>Yeni Üye Formu</p>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="isim">İsim</label>
          <input
            onChange={handleInputChange}
            type="text"
            autoComplete={false}
            value={formData.isim}
            id="isim"
          />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleInputChange}
            type="text"
            autoComplete={false}
            value={formData.email}
            id="email"
          />
        </p>

        <p>
          <label htmlFor="rol">Rol</label>
          <input
            onChange={handleInputChange}
            type="text"
            autoComplete={false}
            value={formData.rol}
            id="rol"
          />
        </p>

        <button type="button" onClick={handleClearForm}>
          Formu Temizle
        </button>

        <button type="submit" disabled={disabledMi}>
          Gönder
        </button>

        {boslukTakibi && <p style={{ color: "red" }}>Boş alan bırakılmamalı</p>}
        {mailTakibi && (
          <p style={{ color: "red" }}>Geçerli bir mail adresi yazılmalı</p>
        )}
      </form>
    </div>
  );
}

export default Form;
