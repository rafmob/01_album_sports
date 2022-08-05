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
    nome: "Neymar Jr.",
    numeroCamisa: 10,
    idade: 30,
    time: 'Paris Saint-Germain',
    imagem: "https://pbs.twimg.com/media/E54lvMJXEAIjKVI.jpg:large"
  },
  {
    id: 3,
    nome: "Neymar Jr.",
    numeroCamisa: 10,
    idade: 30,
    time: 'Paris Saint-Germain',
    imagem: "https://cdn.ome.lt/iPC6g7VegtasIJdu6I3RtBK_7eA=/770x0/smart/uploads/conteudo/fotos/Neymar_camisa_Marilia_Mendonca.png"
  },
  {
    id: 4,
    nome: "Neymar Jr.",
    numeroCamisa: 10,
    idade: 30,
    time: 'Paris Saint-Germain',
    imagem: "https://cdn.ome.lt/iPC6g7VegtasIJdu6I3RtBK_7eA=/770x0/smart/uploads/conteudo/fotos/Neymar_camisa_Marilia_Mendonca.png"
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
