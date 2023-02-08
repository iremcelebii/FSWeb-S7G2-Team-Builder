import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [uyeListesi, setUyeListesi] = useState([
    {
      isim: "irem",
      email: "iremcelebi2404@gmail.com",
      rol: "frontend",
    },
    {
      isim: "sena",
      email: "senacelebi@gmail.com",
      rol: "full stack",
    },
    {
      isim: "oğuzhan",
      email: "oguzhancelebi@gmail.com",
      rol: "backend",
    },
  ]);

  function dataAktarma(yeniUye) {
    const yeniUyeListesi = [...uyeListesi, yeniUye];
    setUyeListesi(yeniUyeListesi);
  }
  console.log(uyeListesi);
  return (
    <div className="App">
      <Form dataAktarma={dataAktarma} />
    </div>
  );
}

export default App;
