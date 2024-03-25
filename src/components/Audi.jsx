import AudiImg from "../assets/audi.jpg"

export default function Audi() {
  return (
    <div>
      <h2 className="text-xl my-5 font-medium	text-white">Audi A3</h2>
      <p className='text-white'>Exterior: Opções de body kits da Audi Sport, rodas de alto desempenho, spoiler traseiro e detalhes em preto brilhante ou fibra de carbono. <br />
Interior: Bancos esportivos de couro, sistema de áudio premium da Audi, volante esportivo e acabamentos exclusivos.<br />
Performance: Possibilidade de upgrades como chip de potência, sistema de suspensão esportiva ajustável, freios esportivos e pneus de alta performance.<br />
Exterior: $2000 - $5000<br />
Interior: $1000 - $2500<br />
Performance: $2500 - $7000</p>
<a href="https://www.webmotors.com.br/comprar/audi/a3/14-tfsi-sportback-16v-gasolina-4p-s-tronic/4-portas/2014-2015/49706444?pos=e49706444g:&np=1">Ver mais.</a> <br />
      <img src={AudiImg} alt="" width={1280}/>
    </div>
  )
}
