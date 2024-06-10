import React from 'react'
import rasm from "/src/img/nd.png";
import rasm1 from "/src/img/sasaa.jpg";
import { Link } from "react-router-dom";
import rasm2 from "/src/img/message.png";
import rasm3 from "/src/img/chat-bubble.png";

function Rector() {
  return (
    <div className="kattadiv">
      <div className="div01">
       
        <div className="divcha10">
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/17002998581248.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Tuxtasinov Ilxomjon Madaminovich</h1>
            <h1 className="h129">
              O'zbekiston davlat jahon tillari universitetining rektori
            </h1>
            <h1 className="h130">
              Dushanba: 15.00-17.00 Telefon: (+99871) 230 12 96 E-mail:
              v.sadiyev@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/17002998965155.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Sadiyev Valijon Alijonovich</h1>
            <h1 className="h129">
              Oʻzbekiston davlat jahon tillari universiteti Yoshlar masalalari
              va maʼnaviy-maʼrifiy ishlar boʻyicha birinchi prorektori
            </h1>
            <h1 className="h130">
              Dushanba: 15.00-17.00 Telefon: (+99871) 230 12 96 E-mail:
              v.sadiyev@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/17002999259144.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Chutpulatov Muxammad Chariyevich</h1>
            <h1 className="h129">
              O'zbekiston davlat jahon tillari universitetining o'quv ishlari
              bo'yicha prorektori
            </h1>
            <h1 className="h130 h013">
              Dushanba: 15.00-17.00 Telefon: (+998 71) 230-12-94 E-mail:
              m.chutpulatov@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/16981453260751.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Nasirov Abduraxim Abdimutalipovich</h1>
            <h1 className="h129">
              Oʻzbekiston davlat jahon tillari universiteti Xalqaro hamkorlik
              masalalari boʻyicha prorektor
            </h1>
            <h1 className="h130">
              Dushanba: 15.00-17.00 Telefon: (+998 71) 230-12-90 E-mail:
              a.nasirov@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/17002999645988.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Yusupov Otabek Yakubovich</h1>
            <h1 className="h129">
              Oʻzbekiston davlat jahon tillari universitetiga Ilmiy ishlar va
              innovatsiyalar prorektor
            </h1>
            <h1 className="h130">
              Dushanba: 15.00-17.00 Telefon: (+998 71) 230-12-93
              E-mail:o.yusupov@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/16862191766455.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Abdullayev Suyun Artikovich</h1>
            <h1 className="h129">
              O'zbekiston davlat jahon tillari universitetining
              moliyaviy-iqtisodiy ishlar bo'yicha prorektori
            </h1>
            <h1 className="h130">
              Payshanba, 16.00-18.00 Telefon: (+998 71) 230-12-97 E-mail:
              s.abdullaev@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/16994364956512.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Ibragimov Otabek Alisherovich</h1>
            <h1 className="h129">
              O‘zbekiston davlat jahon tillari universiteti rektori matbuot
              kotibi – axborot siyosati masalalari bo‘yicha maslahatchisi
            </h1>
            <h1 className="h130">
              Телефон: (+998 97) 777-99-26 E-mail: o.ibragimov@uzswlu.uz
            </h1>
          </div>
          <div className="kichikdiv6">
            <img
              src="https://uzswlu.uz/backend/web/uploads/pageteam/icon/17121408309918.jpg"
              alt=""
              className="rasm11"
            />
            <h1 className="h128">Nurov Azizbek Elmurotovich</h1>
            <h1 className="h129">Rektor yordamchisi</h1>
            <h1 className="h130 h013">
              Telefon:(71) 230-12-97 E-mail: azizbeknur1986@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className="div7">
        <div className="divcha100">
          <img src={rasm} alt="" className="rasm1" />
          <img src={rasm1} alt="" className="rasm2" />
          <h1 className="h10">O‘zbekiston davlat jahon tillari universiteti</h1>
        </div>
        <div className="divcha7">
          <ul className="ul2">
            <li className="li9">Universitet</li>
            <Link to="universitethaqida" className="li10">Universitet haqida</Link>
            <Link to="rectorlar" className="li10">Rektorat</Link>
            <Link to="tuzulma" className="li10">Tuzilma</Link>
            <Link to="nizom" className="li10">Universitet nizomi</Link>
            <Link to="bo'lim" className="li10">Bo‘limlar</Link>
            <Link to="fakultetlar" className="li10">Fakultetlar va kafedralar</Link>
            <Link to="tarix" className="li10">Oliy taʼlim muassasa tarixi</Link>
            <Link to="xodimlar" className="li10">Staff</Link>
            <Link to="siyosat" className="li10">Universitet ta'lim siyosati</Link>
            <Link to="kutubxona" className="li10">Universitet kutubxonasi</Link>
          </ul>
          <ul className="ul2 ul02">
            <li className="li9">Qabul</li>
            <Link to="magitratura" className="li10">Magistratura mutaxassisliklariga</Link>
            <Link to="qabul 2023-2024" className="li10">Qabul 2023-2024</Link>
            <Link to="qo'shmatalim" className="li10">Qo'shma ta'lim dasturlari</Link>
            <Link to="eslatma" className="li10">Abituriyentga eslatma</Link>
            <Link to="o'tishballari" className="li10">O`tish ballari statistikasi</Link>
            <Link to="majmua" className="li10"> Fanlar majmuasi</Link>
            <Link to="ko'ziojizlaruchun" className="li10">Ko'zi ojiz abituriyentlar uchun fanlar</Link>
          </ul>
          <ul className="ul2">
            <li className="li9">Hujjatlar</li>
            <Link to="hujjatlar" className="li10">O‘quv-uslubiy hujjatlar</Link>
            <Link to="ko'chirishvatiklash" className="li10">O'qishni ko'chirish va qayta tiklash</Link>
            <Link to="qonun" className="li10">Qonun va Qarorlar</Link>
            <Link to="meyoriyhujjatlar" className="li10"> Me'yoriy hujjatlar</Link>
            <Link to="targ'ibot" className="li10">Huquqiy targ'ibot</Link>
          </ul>
        </div>
        <div className="divcha8">
          <div className="grid3">
            <h1 className="h124">
              UZSWLU - O‘zbekiston davlat jahon tillari universiteti © 2023
            </h1>
            <h1 className="h124 h0124">
              Akademik xodimlar : 1046 Tashriflar soni : 1629950
            </h1>
          </div>
          <img
            src="https://cnt0.www.uz/counter/collect?id=30222&amp;pg=https%3A//uzswlu.uz&amp;&amp;col=342279&amp;t=ffffff&amp;p=4BC463"
            alt=""
            className="rasm7"
          />
        </div>
      </div>
    </div>
  );
}

export default Rector
