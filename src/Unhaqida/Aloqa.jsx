import rasm7 from "/src/img/maps.png";
import rasm8 from "/src/img/phone-call (2).png";
import rasm9 from "/src/img/mailbox.png";
import rasm10 from "/src/img/letter.png";
import rasm from "/src/img/nd.png";
import { Link } from "react-router-dom";
import rasm1 from "/src/img/sasaa.jpg";

function Aloqa() {
  return (
    <div className='kattadiv'>
      <div className="div31">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22681.244386803548!2d69.20389070481806!3d41.28194071881612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6540c5347110c9e4!2z0KPQt9Cx0LXQutGB0LrQuNC5INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCc0LjRgNC-0LLRi9GFINCv0LfRi9C60L7QsiDQo9C30JPQo9Cc0K8!5e0!3m2!1sru!2s!4v1643028552870!5m2!1sru!2s" className="karta1"></iframe>
        <div className="fleks">
          <h1 className="h16">Kontaktlar</h1>
          <h1 className="h17"><img src={rasm7} alt="" className="rasm4" />Address: Toshkent shahri, Kichik Xalqa Yo`li ko`chasi, G-9a mavzesi, 21-a uy.</h1>
          <h1 className="h17"><img src={rasm8} alt="" className="rasm4" />Phone: +998 (71) 230-12-92</h1>
          <h1 className="h17"><img src={rasm9} alt="" className="rasm4" />Postal code: 100138</h1>
          <h1 className="h17 h171"><img src={rasm10} alt="" className="rasm4" />Email: uzdjtu@uzswlu.uz, uzgumya@exat.uz, uzgumya1@exat.uz, uzdjtu_d@edu.uz, uzswluranking@gmail.com</h1>
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
  )
}

export default Aloqa