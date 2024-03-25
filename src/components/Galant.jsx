import galantimg from "../assets/galant.jpg"

export default function Galant() {
  return (
    <div>
      <h2 className="text-xl my-5 font-medium	text-white">Mitsubishi Galant</h2>
      <p className='text-white'>Exterior: Pode-se considerar a instalação de novos para-choques, saias laterais, spoiler traseiro, rodas esportivas e pintura personalizada. <br />
Interior: Atualização do sistema de áudio, instalação de bancos esportivos, volante esportivo e detalhes em fibra de carbono ou alumínio.<br />
Performance: Upgrades como sistema de escapamento esportivo, filtro de ar de alto fluxo, reprogramação da ECU e suspensão esportiva. <br />
Exterior: $1000 - $3000 <br />
Interior: $500 - $1500 <br />
Performance: $1500 - $5000</p>
<a href="https://mg.olx.com.br/regiao-de-divinopolis/autos-e-pecas/carros-vans-e-utilitarios/mitsubishi-galant-vr-6-carro-top-aceito-troca-por-lote-em-divinopolis-1186749986?lis=listing_2020">Ver mais.</a><br />
      <img src={galantimg} alt="mitsubishi galant" width={1280}/>
      
    </div>
  )
}
