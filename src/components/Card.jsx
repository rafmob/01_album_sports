import '../App.css';

export default function Card(props) {

    const { nome, numeroCamisa, idade, time, imagem } = props.card;

    return (
        <button className='a_card'>
            <div class="card">
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
                        {idade} ANOS
                    </div>
                </div>
            </div>
        </button> 
    )
}