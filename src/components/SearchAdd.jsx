import '../App.css';
import ModalForm from './Modal';

function SearchAdd() {
  return (
    <div className="SearchAdd">
      <div class="input-group mb-3">
        <input type="text" class="form-control form-control-sm search" placeholder="Buscar Jogador" aria-label="Buscar Jogador" aria-describedby="button-addon2" />
        <button class="btn btn-outline-dark" type="button" id="button-addon2">Buscar</button>
      </div>
      <ModalForm />
    </div>
  );
}

export default SearchAdd;
