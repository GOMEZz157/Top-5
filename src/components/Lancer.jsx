import LancerImg from '../assets/lancer.jpg'

export default function Lancer() {
  return (
    <div>
      <h2 className="text-xl my-5 font-medium	text-white" >Mitsubishi Lancer</h2>
      <p className='text-white'>Exterior: Opções semelhantes ao Galant, incluindo também a possibilidade de adicionar um body kit específico para o Lancer. <br />
Interior: Mesmas opções de atualização do sistema de áudio, bancos esportivos, volante e detalhes de acabamento.<br />
Performance: Considerar upgrades como turbocharger, sistema de freios de alto desempenho, pneus esportivos e ajustes na suspensão.<br />
Exterior: $1500 - $4000<br />
Interior: $700 - $2000<br />
Performance: $2000 - $6000</p>
<a href="https://www.webmotors.com.br/comprar/mitsubishi/lancer/20-gt-16v-gasolina-4p-automatico/4-portas/2012/51086770?pos=a51086770g:&np=1">Ver mais. </a> <br />
      <img src={LancerImg} alt="" width={1280}/>
    </div>
  )
}
