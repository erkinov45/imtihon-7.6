import { Outlet, Link } from "react-router-dom";
import rasm from "/src/img/nd.png";
import rasm1 from "/src/img/sasaa.jpg";
import rasm2 from "/src/img/message.png";
import rasm3 from "/src/img/chat-bubble.png";
import Hamburger from 'hamburger-react'
import { useState } from "react";

const Layout = () => {

  function handleBurger() {
    const navbar110 = document.querySelector(".navbar11"),
      navbar1110 = document.querySelector('.navbar111');
    navbar110.classList.toggle("navbar111")
  }

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="navbar11">
        <li>
          <Link className="h11" to="/karparativpochta">
            <img src={rasm2} alt="" className="rasm3" />
            Korporativ pochta
          </Link>
        </li>
        <li>
          <Link className="h11" to="/virtualqabulxona">
            <img style={{ width: "30px" }} src={rasm3} alt="" className="rasm3" />
            Virtual qabulxona
          </Link>
        </li>
        <li>
          <Link className="h11 hh11" to="/xodimlar">
            <img src={rasm2} alt="" className="rasm3 raasm1" />
            Universitet xodimlar
          </Link>
        </li>
        <div className="navbar22">
          <ul className="ul1">
            <div className="grid201">
              <li className="li1" to="">
                Universittet
              </li>
              <ul className="ul3">
                <Link to="/universitethaqida" className="li11">Universitet haqida</Link>
                <Link to="/rectorlar" className="li11">Rektorat</Link>
                <Link to="/tuzulma" className="li11">Tuzilma</Link>
                <Link to="/nizom" className="li11">Universitet nizomi</Link>
                <Link to="/bo'lim" className="li11">Bo‘limlar</Link>
                <Link to="/fakultetlar" className="li11">Fakultetlar va kafedralar</Link>
                <Link to="/tarix" className="li11">Oliy taʼlim muassasa tarixi</Link>
                <Link to="/xodimlar" className="li11">Staff</Link>
                <Link to="/siyosat" className="li11"> Universitet ta'lim siyosati</Link>
                <Link to="/kutibxona" className="li11"> Universitet kutubxonasi</Link>
              </ul>
            </div>
            <Link to="/yangilik" className="li2">Yangiliklar</Link>
            <div className="grid202">
              <li className="li3">BRM</li>
              <ul className="ul31">
                <Link to="/brm1" className="li11">
                  BRM 1: O`ta qashshoqlikka barham berish
                </Link>
                <Link to="brm2" className="li11">BRM 2: Ochlikka barham berish</Link>
                <Link to="brm3" className="li11"> BRM 3: Sog`lik va farovonlik</Link>
                <Link to="brm4" className="li11">BRM 4: Sifatli ta`lim</Link>
                <Link to="brm5" className="li11">BRM 5: Gender Tengligi</Link>
                <Link to="brm6" className="li11">BRM 6: Toza suv va sanitariya</Link>
                <Link to="brm7" className="li11"> BRM 7: Arzon va toza energiya</Link>
                <Link to="brmd8" className="li11">
                  BRM 8: Munosib ish o`rinlari va iqtisodiy o`sish
                </Link>
                <Link to="/brmd9" className="li11">BRM 9:</Link>
                <Link to="/brmd10" className="li11">BRM 10: Tengsizlikni kamaytirish</Link>
              </ul>
            </div>
            <div className="grid203">
              <li className="li4">Abituriyentlar </li>
              <ul className="ul32">
                <Link to="/nimauchunbuuniversitet" className="li11">Nima uchun bu Universitet</Link>
                <Link to="/tksh" className="li11">To‘lov-kontrakt shartnomalari</Link>
                <Link to="/te" className="li11"> Talabalarga eslatma</Link>
                <Link to="/iqtidorlitalabalar" className="li11"> Iqtidorli talabalar</Link>
                <Link to="/nsa" className="li11"> Nomdor stipendiyalarga ariza</Link>
                <Link to="/nsa" className="li11">Bitiruvchilar klubi</Link>
                <Link to="/bdasturlar" className="li11">Bakalavr dasturlari </Link>
                <Link to="/mdasturlar" className="li11"> Magistrlik dasturlari</Link>
                <Link to="/xalqaromunosabatlar" className="li11">Xalqaro munosabatlar</Link>
                <Link to="/rector" className="li11"> Rektor tabrigi</Link>
                <Link to="/dsmd" className="li11">Vakansiya</Link>
                <Link to="/sdsd" className="li11">Magistratura mutaxassisliklariga</Link>
                <Link to="/dasassd" className="li11"> Qabul 2023-2024</Link>
                <Link to="/dsad" className="li11">Qo‘shma ta‘lim dasturlari</Link>
                <Link to="/sfdffs" className="li11"> Abituriyentga eslatma</Link>
                <Link to="/fffdsfs" className="li11">O`tish ballari statistikasi</Link>
                <Link to="/dsad" className="li11">Fanlar majmuasi</Link>
                <Link to="/fsdf" className="li11">
                  Ko‘zi ojiz abituriyentlar uchun fanlar
                </Link>
              </ul>
            </div>
            <div className="grid204">
              <li className="li5">Ta`lim yo`nalishlari</li>
              <ul className="ul33">
                <Link to="/balkalavryat" className="li11">Bakalavriyat</Link>
                <Link to="/magistratura" className="li11">Magistratura</Link>
              </ul>
            </div>
            <div className="grid205">
              <li className="li6">Faoliyat</li>
              <ul className="ul34">
                <Link to="/madaniyfaoliyat" className="li11">Madaniy-ma‘rifiy faoliyat</Link>
                <Link to="/xalqaroaloqa" className="li11"> Xalqaro aloqalar</Link>
                <Link to="/moliyaviyfaoliyat" className="li11">Moliyaviy faoliyat </Link>
                <Link to="/ilmiyfaoliyat" className="li11">Ilmiy faoliyat</Link>
              </ul>
            </div>
            <div className="grid206">
              <li className="li7">Hujjatlar</li>
              <ul className="ul35">
                <Link to="/hujjat" className="li11"> O‘quv-uslubiy hujjatlar</Link>
                <Link to="/o'qishni ko'chirish" className="li11">O‘qishni ko‘chirish va qayta tiklash</Link>
                <Link to="/qarorlar" className="li11">Qonun va Qarorlar</Link>
                <Link to="/meyoiyhujjatlar" className="li11">Me‘yoriy hujjatlar</Link>
                <Link to="/huquqiytarg'ibot" className="li11">Huquqiy targ‘ibot</Link>
              </ul>
            </div>
            <Link to="/aloqa" className="li8">Aloqa</Link>
          </ul>
        </div>
      </div>
      <div className="group">
        <ul className="navbar1">
          <li>
            <Link className="divcha1" to="/">
              <img src={rasm} alt="" className="rasm1" />
              <img src={rasm1} alt="" className="rasm2" />
              <h1 className="h10">
                O‘zbekiston davlat jahon tillari universiteti
              </h1>
            </Link>
          </li>
          <div className="urovchi1">
            <li>
              <Link className="h11" to="/karparativpochta">
                <img src={rasm2} alt="" className="rasm3" />
                Korporativ pochta
              </Link>
            </li>
            <li>
              <Link className="h11" to="/virtualqabulxona">
                <img style={{ width: "30px" }} src={rasm3} alt="" className="rasm3" />
                Virtual qabulxona
              </Link>
            </li>
            <li>
              <Link className="h11 hh11" to="/xodimlar">
                <img src={rasm2} alt="" className="rasm3 raasm1" />
                Universitet xodimlar
              </Link>
            </li>
          </div>
          <div onClick={handleBurger} className="burger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </ul>
      </div>
      <div className="navbar2">
        <ul className="ul1">
          <div className="grid201">
            <li className="li1" to="">
              Universittet
            </li>
            <ul className="ul3">
              <Link to="/universitethaqida" className="li11">Universitet haqida</Link>
              <Link to="/rectorlar" className="li11">Rektorat</Link>
              <Link to="/tuzulma" className="li11">Tuzilma</Link>
              <Link to="/nizom" className="li11">Universitet nizomi</Link>
              <Link to="/bo'lim" className="li11">Bo‘limlar</Link>
              <Link to="/fakultetlar" className="li11">Fakultetlar va kafedralar</Link>
              <Link to="/tarix" className="li11">Oliy taʼlim muassasa tarixi</Link>
              <Link to="/xodimlar" className="li11">Staff</Link>
              <Link to="/siyosat" className="li11"> Universitet ta'lim siyosati</Link>
              <Link to="/kutibxona" className="li11"> Universitet kutubxonasi</Link>
            </ul>
          </div>
          <Link to="/yangilik" className="li2">Yangiliklar</Link>
          <div className="grid202">
            <li className="li3">BRM</li>
            <ul className="ul31">
              <Link to="/brm1" className="li11">
                BRM 1: O`ta qashshoqlikka barham berish
              </Link>
              <Link to="brm2" className="li11">BRM 2: Ochlikka barham berish</Link>
              <Link to="brm3" className="li11"> BRM 3: Sog`lik va farovonlik</Link>
              <Link to="brm4" className="li11">BRM 4: Sifatli ta`lim</Link>
              <Link to="brm5" className="li11">BRM 5: Gender Tengligi</Link>
              <Link to="brm6" className="li11">BRM 6: Toza suv va sanitariya</Link>
              <Link to="brm7" className="li11"> BRM 7: Arzon va toza energiya</Link>
              <Link to="brmd8" className="li11">
                BRM 8: Munosib ish o`rinlari va iqtisodiy o`sish
              </Link>
              <Link to="/brmd9" className="li11">BRM 9:</Link>
              <Link to="/brmd10" className="li11">BRM 10: Tengsizlikni kamaytirish</Link>
            </ul>
          </div>
          <div className="grid203">
            <li className="li4">Abituriyentlar </li>
            <ul className="ul32">
              <Link to="/nimauchunbuuniversitet" className="li11">Nima uchun bu Universitet</Link>
              <Link to="/tksh" className="li11">To‘lov-kontrakt shartnomalari</Link>
              <Link to="/te" className="li11"> Talabalarga eslatma</Link>
              <Link to="/iqtidorlitalabalar" className="li11"> Iqtidorli talabalar</Link>
              <Link to="/nsa" className="li11"> Nomdor stipendiyalarga ariza</Link>
              <Link to="/nsa" className="li11">Bitiruvchilar klubi</Link>
              <Link to="/bdasturlar" className="li11">Bakalavr dasturlari </Link>
              <Link to="/mdasturlar" className="li11"> Magistrlik dasturlari</Link>
              <Link to="/xalqaromunosabatlar" className="li11">Xalqaro munosabatlar</Link>
              <Link to="/rector" className="li11"> Rektor tabrigi</Link>
              <Link to="/dsmd" className="li11">Vakansiya</Link>
              <Link to="/sdsd" className="li11">Magistratura mutaxassisliklariga</Link>
              <Link to="/dasassd" className="li11"> Qabul 2023-2024</Link>
              <Link to="/dsad" className="li11">Qo‘shma ta‘lim dasturlari</Link>
              <Link to="/sfdffs" className="li11"> Abituriyentga eslatma</Link>
              <Link to="/fffdsfs" className="li11">O`tish ballari statistikasi</Link>
              <Link to="/dsad" className="li11">Fanlar majmuasi</Link>
              <Link to="/fsdf" className="li11">
                Ko‘zi ojiz abituriyentlar uchun fanlar
              </Link>
            </ul>
          </div>
          <div className="grid204">
            <li className="li5">Ta`lim yo`nalishlari</li>
            <ul className="ul33">
              <Link to="/balkalavryat" className="li11">Bakalavriyat</Link>
              <Link to="/magistratura" className="li11">Magistratura</Link>
            </ul>
          </div>
          <div className="grid205">
            <li className="li6">Faoliyat</li>
            <ul className="ul34">
              <Link to="/madaniyfaoliyat" className="li11">Madaniy-ma‘rifiy faoliyat</Link>
              <Link to="/xalqaroaloqa" className="li11"> Xalqaro aloqalar</Link>
              <Link to="/moliyaviyfaoliyat" className="li11">Moliyaviy faoliyat </Link>
              <Link to="/ilmiyfaoliyat" className="li11">Ilmiy faoliyat</Link>
            </ul>
          </div>
          <div className="grid206">
            <li className="li7">Hujjatlar</li>
            <ul className="ul35">
              <Link to="/hujjat" className="li11"> O‘quv-uslubiy hujjatlar</Link>
              <Link to="/o'qishni ko'chirish" className="li11">O‘qishni ko‘chirish va qayta tiklash</Link>
              <Link to="/qarorlar" className="li11">Qonun va Qarorlar</Link>
              <Link to="/meyoiyhujjatlar" className="li11">Me‘yoriy hujjatlar</Link>
              <Link to="/huquqiytarg'ibot" className="li11">Huquqiy targ‘ibot</Link>
            </ul>
          </div>
          <Link to="aloqa" className="li8">Aloqa</Link>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;