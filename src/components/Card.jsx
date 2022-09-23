import '../App.css';

const ano_atual = new Date().getFullYear();

export default function Card(props) {

    const { nome, numeroCamisa, nascimento, time, imagem } = props.card;

    return (
        <button className='a_card'>
            <div className="card">
                <div className='bgImage'>
                    <img src={imagem} alt="" />
                </div>
                <div className='infoCard'>
                    <div>
                        <h2>{nome} - {numeroCamisa}</h2>
                    </div>
                    <div>
                        {time} 
                    </div>
                    <div>
                        {ano_atual - nascimento} ANOS
                    </div>
                </div>
            </div>
        </button> 
    )
}