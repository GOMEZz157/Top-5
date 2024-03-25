import Audi from "./components/Audi";
import Civic from "./components/Civic";
import Galant from "./components/Galant";
import Golf from "./components/Golf";
import Lancer from "./components/Lancer";


export default function App() {
  return (
    <div >
      <h1 className="font-bold text-9xl my-8 text-white" >Top 5 carros para se fazer projeto em 2024</h1>
      <Galant/>
      <Civic/>
      <Audi/>
      <Golf/>
      <Lancer/>
    </div>
  )
}
