import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./Nopage";
import App from "../App";
import Kpochta from "../Unhaqida/Kpochta"
import Qabul from "../Unhaqida/Qabul"
import Unhaqida from "../Unhaqida/Unhaqida";
import Rector from "../Unhaqida/Rector"
import Tuzilma from "../Unhaqida/Struktura"
import Nizom from "../Unhaqida/Nizom"
import Bulim from "../Unhaqida/Bulim";
import Fakultet from "../Unhaqida/Fakultet"
import Tarix from "../Unhaqida/Tarix"
import Staf from "../Unhaqida/Xodimlar"
import Siyosat from "../Unhaqida/Siyosat"
import Kutibxona from "../Unhaqida/Kutubxona"
import Yangilik from "../Unhaqida/Yangilik"
import Brm1 from "../BRM/Brm1"
import Brm2 from "../BRM/Brm2"
import Brm3 from "../BRM/Brm3"
import Brm4 from "../BRM/Brm4"
import Brm5 from "../BRM/Brm5"
import Brm6 from "../BRM/Brm6"
import Brm7 from "../BRM/Brm7"
import Brm8 from "../BRM/Brm8"
import Brm9 from "../BRM/Brm9"
import Brm10 from "../BRM/Brm10"
import Bdasturlar from "../Abiturent/Bdasurlar"
import Iqtalabalar from "../Abiturent/Iqtalabalar"
import Mdasturlar from "../Abiturent/Mdasturlar"
import Nuniversitet from "../Abiturent/Nuniversitet"
import Rector1 from "../Abiturent/Rector";
import Xmlar from "../Abiturent/Xmlar"
import Xodmlar from "../Unhaqida/Xodimlar"
import Aloqa from "../Unhaqida/Aloqa";
export default function Routerss() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="karparativpochta" element={<Kpochta />} />
          <Route path="virtualqabulxona" element={<Qabul />} />
          <Route path="xodimlar" element={<Xodmlar />} />
          <Route path="universitethaqida" element={<Unhaqida />} />
          <Route path="rectorlar" element={<Rector />} />
          <Route path="tuzulma" element={<Tuzilma />} />
          <Route path="nizom" element={<Nizom />} />
          <Route path="bo'lim" element={<Bulim />} />
          <Route path="fakultetlar" element={<Fakultet />} />
          <Route path="tarix" element={<Tarix />} />
          <Route path="xodimlar" element={<Staf />} />
          <Route path="siyosat" element={<Siyosat />} />
          <Route path="kutibxona" element={<Kutibxona />} />
          <Route path="yangilik" element={<Yangilik />} />
          <Route path="aloqa" element={<Aloqa />} />
          <Route path="brm1" element={<Brm1 />} />
          <Route path="brm2" element={<Brm2 />} />
          <Route path="brm3" element={<Brm3 />} />
          <Route path="brm4" element={<Brm4 />} />
          <Route path="brm5" element={<Brm5 />} />
          <Route path="brm6" element={<Brm6 />} />
          <Route path="brm7" element={<Brm7 />} />
          <Route path="brm8" element={<Brm8 />} />
          <Route path="brm9" element={<Brm9 />} />
          <Route path="btm10" element={<Brm10 />} />
          <Route path="bdsturlar" element={<Bdasturlar />} />
          <Route path="iqtidorlitalabalar" element={<Iqtalabalar />} />
          <Route path="mdasturlar" element={<Mdasturlar />} />
          <Route path="nimauchunbuuniversitet" element={<Nuniversitet />} />
          <Route path="rector" element={<Rector1 />} />
          <Route path="xalqaromunosabatlar" element={<Xmlar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routerss />);