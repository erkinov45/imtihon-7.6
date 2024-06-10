import rasm from "/src/img/nd.png";
import rasm1 from "/src/img/sasaa.jpg";
import Slayder from "../Slider/Slayder";
import { Link } from "react-router-dom";

function Brm6() {
  return (
    <div className="kattadiv">
      <div className="div01 divvid2">
        <div className="divcha9">
          <h1 className="h126">
            O`zbekiston davlat jahon tillari UNIVERSITETINING QAYTA TIKLANUVCHI
            ENERGIYA MANBALARIDAN FOYDALANISH KO’RSATKICHI
          </h1>
          <h1 className="h127">
            Yer yuzida taraqqiyotning rivojlanishi foydalanilayotgan energiya
            turi va hajmi bilan har doim chambarchas bogʻliq boʻlib kelgan.
            Bugungi kunda energiyadan foydalanish hajmi shunchalik ortmoqdaki,
            uning kelgusida yanada koʻpayishi biosfera, demakki, kelajakda
            insoniyatning rivojlanishi uchun ham katta xavf tugʻdiradi. Shu
            sababli butun dunyoda oʻtgan asrning oxirgi oʻn yilidan boshlab,
            energiyaning qayta tiklanadigan ekologik toza manbalaridan biri
            hisoblanuvchi quyosh, suv, shamol, biomassa va geotermal energiya
            manbalaridan foydalanishga alohida eʼtibor qaratila boshlandi.
            “O’ZDJTU” universiteti ham yashil energetika siyosatini qo‘llab
            quvvatlaydi va hozirgi dunyo sandartlari asosida elektr energiya
            iste`molini optimizatsiya qilish va qayta tiklanuvchi energiya
            manbalaridan foydalanish yo‘lini tanlamoqda. 2023-yilda
            universitetning barcha o‘quv va o‘quv binolarida umumiy quvvati 1320
            kVt bo‘lgan quyosh fotoelektr stansiyasi o‘rnatildi. O‘rnatilgan
            quyosh batareyalari hisobiga 650 ming kVt qo‘shimcha elektr
            energiyasi ishlab chiqarilib, 585 million so‘m iqtisod qilindi.
            Hozirgi vaqtda u elektr energiyasiga bo'lgan talabning 33 foizini
            qoplaydi; Shuningdek 2023-yil o`rtalarida 2 tonnalik quyosh suv
            isitish moslamalari o‘rnatilib, ishga tushirildi va yiliga 45 000
            000 so`mlik tabiiy gaz tejalmoqda. Quyosh energiyasini
            akkumulyatsiyalash tizimi universitetga o‘rnatildi. Ishlab
            chiqarilgan elektr energiya universitet jihozlarini elektr
            energiyasi bilan taʼminlash uchun foydalaniladi. Bu tizimning
            afzalligi, elektr taʼminotida uzilishlar sodir bo‘lganda
            isteʼmolchilarni ikki soatgacha uzluksiz elektr energiyasi bilan
            taʼminlash imkoni bo‘ladi.
          </h1>
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

export default Brm6;
