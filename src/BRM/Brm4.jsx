import useDownloader from "react-use-downloader";
import rasm from "/src/img/nd.png";
import rasm1 from "/src/img/sasaa.jpg";
import { Link } from "react-router-dom";
import Slayder from "../Slider/Slayder";
function Brm4() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/src/img/16989971272676.pdf";
  const filename = "16989971272676.pdf";
  const fileUrl1 = "/src/img/16989971456592.pdf";
  const filename1 = "16989971456592.pdf";
  const fileUrl2 = "/src/img/16989969978289.pdf";
  const filename2 = "16989969978289.pdf";
  const fileUrl3 = "/src/img/16989970196477.pdf";
  const filename3 = "16989970196477.pdf";
  const fileUrl4 = "/src/img/16989971048105.pdf";
  const filename4 = "16989971048105.pdf";
  const fileUrl5 = "/src/img/16740452948848.pdf";
  const filename5 = "16740452948848.pdf";
  return (
    <div className="kattadiv">
    
      <div className="div01">
        
        <div className="divcha20">
          <div className="kichikdiv9">
            <h1 className="h141">
              Дискриминация холати бўйича ишонч рақамлари: +99899 804 76 84
            </h1>
          </div>
          <div className="divcha17">
            <h1 className="h140">2023</h1>
            <div className="divcha18">
              <img
                src="https://uzswlu.uz/frontend/web/uploads/pdf.png"
                alt=""
                className="rasm13"
              />
              <a
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16989971272676.pdf"
                className="h131"
              >
                14.03.23. talaba qizlar sport musoboqasi
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
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16989971456592.pdf"
                className="h131"
              >
                16.03.23 TALABA QIZLARIMIZ UNIVERSIADADA
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl1, filename1)}
              >
                Yuklash
              </button>
            </div>
          </div>
          <div className="divcha17">
            <h1 className="h140">2022</h1>
            <div className="divcha18">
              <img
                src="https://uzswlu.uz/frontend/web/uploads/pdf.png"
                alt=""
                className="rasm13"
              />
              <a
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16989969978289.pdf"
                className="h131"
              >
                19.10.22 зуравонликка қаршимиз
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl2, filename2)}
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
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16989970196477.pdf"
                className="h131"
              >
                31.10.22 us embassy
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl3, filename3)}
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
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16989971048105.pdf"
                className="h131"
              >
                26.12.2022 yil ayoli
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl4, filename4)}
              >
                Yuklash
              </button>
            </div>
          </div>
          <div className="divcha17">
            <div className="divcha18">
              <img
                src="https://uzswlu.uz/frontend/web/uploads/pdf.png"
                alt=""
                className="rasm13"
              />
              <a
                href="https://uzswlu.uz/backend/web/uploads/pagepdf/icon/16740452948848.pdf"
                className="h131"
              >
                Хотин-қизлар масалалари бўйича маслахат-кенгашларини тузиш
                тўғрисида буйруқ
              </a>
              <button
                className="tugma2"
                onClick={() => download(fileUrl5, filename5)}
              >
                Yuklash
              </button>
            </div>
          </div>
          <div className="divcha17">
            <a href="" className="kichikdiv5">
              <img
                src="https://uzswlu.uz/backend/web/uploads/page/icon/16681505953902.png"
                alt=""
                className="rasm5"
              />
              <h1 className="h122"> Ishonch</h1>
            </a>
            <a href="" className="kichikdiv5">
              <img
                src="https://uzswlu.uz/backend/web/uploads/page/icon/16681514117437.png"
                alt=""
                className="rasm5"
              />
              <h1 className="h122">statistika</h1>
            </a>
            <a href="" className="kichikdiv5">
              <img
                src="https://uzswlu.uz/backend/web/uploads/page/icon/16681536532082.png"
                alt=""
                className="rasm5"
              />
              <h1 className="h122"> Advisory board</h1>
            </a>
            <a href="" className="kichikdiv5">
              <img
                src="https://uzswlu.uz/backend/web/uploads/page/icon/16681556017078.png"
                alt=""
                className="rasm5"
              />
              <h1 className="h122"> Rag'batlantirish</h1>
            </a>
          </div>
          <Slayder/>
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

export default Brm4;
