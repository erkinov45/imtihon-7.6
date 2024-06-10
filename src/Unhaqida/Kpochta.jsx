import { useState } from "react";
import rasm from "/src/img/nd.png";
import rasm1 from "/src/img/sasaa.jpg";
import rasm25 from "/src/img/Base.png";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

function Kpochta() {
  const [names, setNames] = useState("");
  const [lname, setLname] = useState("");
  const [namesError, setNamesError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const testEmail = () => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
      setEmailError("Elektronpochta xato");
    } else {
      setEmailError("");
    }
  };

  const testPassword = () => {
    const pattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!pattern.test(password)) {
      setPasswordError("Parol juda qisqa");
    } else {
      setPasswordError("");
    }
  };

  const testName = () => {
    if (names === "") {
      setNamesError("To'ldirish shart");
    } else {
      setNamesError("");
    }
  };

  const testLname = () => {
    if (lname === "") {
      setLnameError("To'ldirish shart");
    } else {
      setLnameError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    testEmail();
    testPassword();
    testName();
    testLname();
    if (!emailError && !passwordError && !namesError && !lnameError) {
      toast.success("Success message", { position: "top-right" });
    }
  };

  return (
    <>
      <div className="notification2"></div>
      <div className="kattadiv">
        <div className="div01 dd01">
          <div className="fleks2">
          </div>
          <div className="urovchi">
            <div className="divcha21">
              <div className="kichikdiv11">
                <svg
                  className="svg3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="281"
                  height="567"
                  viewBox="0 0 281 567"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_41_72286)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.95996 43.1189C2.95996 20.4096 21.3885 2 44.1212 2H236.86C259.593 2 278.022 20.4096 278.022 43.1189V520.881C278.022 543.59 259.593 562 236.86 562H44.1212C21.3885 562 2.95996 543.59 2.95996 520.881V43.1189Z"
                      fill="#3A4245"
                    />
                  </g>
                </svg>
                <svg
                  className="svg4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="269"
                  height="554"
                  viewBox="0 0 269 554"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.227051 38.1189C0.227051 17.2119 17.193 0.263428 38.1215 0.263428H230.861C251.789 0.263428 268.755 17.2119 268.755 38.1189V515.881C268.755 536.788 251.789 553.737 230.861 553.737H38.1215C17.193 553.737 0.227051 536.788 0.227051 515.881V38.1189Z"
                    fill="#121515"
                  />
                </svg>
                <svg
                  className="svg5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="246"
                  height="531"
                  viewBox="0 0 246 531"
                  fill="none"
                >
                  <path
                    d="M219.539 0.612061H26.7637C12.5181 0.612061 0.969727 12.1604 0.969727 26.406V504.273C0.969727 518.518 12.5181 530.067 26.7637 530.067H219.539C233.785 530.067 245.333 518.518 245.333 504.273V26.406C245.333 12.1604 233.785 0.612061 219.539 0.612061Z"
                    fill="white"
                  />
                </svg>
                <img src={rasm25} alt="" className="rasm15" />
                <form className="form3" onSubmit={handleSubmit}>
                  <h1 className="h142">Ro'yxatdan o'tish </h1>
                  <input
                    type="text"
                    id="input1"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    onBlur={testName}
                    className="input1"
                    placeholder="Ism"
                  />
                  {namesError && <span className="xato">{namesError}</span>}
                  <input
                    type="text"
                    id="input2"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    onBlur={testLname}
                    className="input1"
                    placeholder="Familiya"
                  />
                  {lnameError && <span className="xato">{lnameError}</span>}
                  <input
                    type="text"
                    id="input3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={testEmail}
                    className="input1"
                    placeholder="Elektron pochta"
                  />
                  {emailError && <span className="xato">{emailError}</span>}
                  <input
                    type="password"
                    id="input4"
                    className="input1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={testPassword}
                    name="password"
                    placeholder="Parol"
                  />
                  {passwordError && (
                    <span className="xato">{passwordError}</span>
                  )}

                  {!emailError &&
                    !passwordError &&
                    !namesError &&
                    !lnameError && (
                      <>
                        <Toaster position="top-right" />
                        <button
                          type="submit"
                          onClick={handleSubmit} // Call handleSubmit here
                          id="tugma1"
                          className="tugma3"
                        >
                          Ro'yxatdan o'tish
                        </button>
                      </>
                    )}
                </form>
              </div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
              <div id="kch10" className="kichikdiv10"></div>
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
    </>
  );
}

export default Kpochta;