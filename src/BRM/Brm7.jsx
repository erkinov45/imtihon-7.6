import useDownloader from "react-use-downloader";
import rasm from "/src/img/nd.png";
import { Link } from "react-router-dom";
import rasm1 from "/src/img/sasaa.jpg";
import Slayder from "../Slider/Slayder";

function Brm7() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/src/img/16741239641577.pdf";
  const filename = "16741239641577.pdf";
  const fileUrl1 = "/src/img/16741239820142 (2).pdf";
  const filename1 = "16741239820142.pdf";
  return (
    <div className="kattadiv">
   
      <div className="div01 divvid21 divvid2">
        <div className="div20">
          <div className="divcha17 dch17 dch1717">
            <div className="divcha18">
              <img
                src="https://uzswlu.uz/frontend/web/uploads/pdf.png"
                alt=""
                className="rasm13"
              />
              <a
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16741239641577.pdf"
                className="h131"
              >
                22.02.2023
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl, filename)}
              >
                Yuklash
              </button>
            </div>
            <div className="divcha18">
              <img
                src="https://uzswlu.uz/frontend/web/uploads/pdf.png"
                alt=""
                className="rasm13"
              />
              <a
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16741239820142.pdf"
                className="h131"
              >
                16.03.2023
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl1, filename1)}
              >
                Yuklash
              </button>
            </div>
          </div>
        </div>
        <Slayder/>
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

export default Brm7;
