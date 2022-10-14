import Header from "../components/Header"
import ImportanciaMetodologia from "../components/ImportanciaMetodologia"
import FerramentasCase from "../components/FerramentasCase"
import Setinha from "../components/Setinha"
import Scrum from "../components/Scrum"
import EngenhariaDeSoftware from "../components/EngenhariaDeSoftware"
import DiferentesPerfis from "../components/DiferentesPerfis"
import CiclodevidaDev from "../components/CiclodevidaDev"
import Agile from "../components/Agile"
import CaracteristicasSoftware from "../components/CaracteristicasSoftware"
import FerramentasCaseExemplos from "../components/FerramentasExemplos"

export default function Home() {
  return (
    <div>
      <Header />
      <EngenhariaDeSoftware />
      <DiferentesPerfis />
      <CiclodevidaDev />
      <CaracteristicasSoftware />
      <ImportanciaMetodologia />
      <Scrum />
      <Agile />
      <FerramentasCase />
      <FerramentasCaseExemplos />
      <Setinha />
    </div>
  )
}
