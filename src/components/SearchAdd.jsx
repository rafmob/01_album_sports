import '../App.css';
import ModalForm from './Modal';

function SearchAdd() {
  return (
    <div className="SearchAdd">
      <div className="input-group mb-3">
        <input type="text" className="form-control form-control-sm search" placeholder="Buscar Jogador" aria-label="Buscar Jogador" aria-describedby="button-addon2" />
        <button className="btn btn-outline-dark" type="button" id="button-addon2">Buscar</button>
      </div>
      <ModalForm />
    </div>
  );
}

export default SearchAdd;
