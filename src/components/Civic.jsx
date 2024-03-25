import CivicImg from "../assets/civicsi.jpg"

export default function Civic() {
  return (
    <div>
      <h2 className="text-xl my-5 font-medium	text-white">Honda Civic Si</h2>
      <p className='text-white'>Exterior: Body kits específicos para o Civic Si, rodas esportivas, pintura personalizada e adesivos decorativos. <br />
Interior: Bancos esportivos, volante de corrida, sistema de áudio premium e detalhes em fibra de carbono. <br />
Performance: Upgrades como kit de admissão de ar frio, sistema de escapamento esportivo, reprogramação da ECU e suspensão ajustável.<br />
Exterior: $1200 - $3500<br />
Interior: $600 - $1800<br />
Performance: $1800 - $5000</p>
<a href="https://www.webmotors.com.br/comprar/honda/civic/20-si-16v-gasolina-4p-manual/4-portas/2007/49864673?pos=c49864673b:&np=2">Ver mais.</a> <br />
      <img src={CivicImg} alt="" width={1280}/>
    </div>
  )
}
