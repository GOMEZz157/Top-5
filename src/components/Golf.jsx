import GolfImg from '../assets/golfgti.jpg'

export default function Golf() {
  return (
    <div>
      <h2 className="text-xl my-5 font-medium	text-white">VW Golf GTI</h2>
      <p className='text-white'>Exterior: Spoiler dianteiro e traseiro, saias laterais esportivas, rodas exclusivas do GTI e pintura personalizada. <br />
Interior: Bancos esportivos com logotipo GTI, volante multifuncional, sistema de áudio premium e detalhes em vermelho.<br />
Performance: Upgrades como aumento de potência através de chip tuning, sistema de escape esportivo, freios de alto desempenho e ajustes na suspensão para uma condução mais esportiva.<br />
Exterior: $1500 - $4000<br />
Interior: $800 - $2000<br />
Performance: $2000 - $6000</p> <br />
<a href="https://www.webmotors.com.br/comprar/volkswagen/golf/20-tsi-gti-16v-turbo-gasolina-4p-automatico/4-portas/2014-2015/51063834?pos=l51063834g:&np=1"> Ver mais.</a> <br />
      <img src={GolfImg} alt="" width={1280}/>
    </div>
  )
}
