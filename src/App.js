import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import SearchAdd from './components/SearchAdd';

const Cards = [
  {
      id: 1,
      nome: "Neymar Jr.",
      numeroCamisa: 10,
      idade: 30,
      time: 'Paris Saint-Germain',
      imagem: "https://pbs.twimg.com/media/E54lvMJXEAIjKVI.jpg:large"
  },
  {
    id: 2,
    nome: "Hulk.",
    numeroCamisa: 7,
    idade: 36,
    time: 'Atlético MG',
    imagem: "https://s2.glbimg.com/liAdtdK-T2kJz6K38gUxZtVaACg=/0x0:1080x608/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/i/C/st8qzWQQquwv5S6GEmyQ/hulk-100.jpg"
  },
  {
    id: 3,
    nome: "Luva de Pedreiro",
    numeroCamisa: 100,
    idade: 20,
    time: 'Receba/BR',
    imagem: "https://midias.agazeta.com.br/2022/06/22/iran-ferreira-luva-de-pedreiro-786158-article.jpg"
  },
  {
    id: 4,
    nome: "Cristiano Ronaldo",
    numeroCamisa: 7,
    idade: 37,
    time: 'Manchester United',
    imagem: "https://www.infomoney.com.br/wp-content/uploads/2022/06/GettyImages-1373344854.jpg?fit=594%2C449&quality=50&strip=all"
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <SearchAdd />
      <div className='allCards'>
        {Cards.map(card => <Card card={card} />)}
      </div>
    </div>
  );
}

export default App;
