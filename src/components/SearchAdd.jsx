import '../App.css';
import button_add from '../img/button-add.svg'

function SearchAdd() {
  return (
    <div className="SearchAdd">
      <div class="input-group mb-3">
        <input type="text" class="form-control form-control-sm" placeholder="Buscar Jogador" aria-label="Buscar Jogador" aria-describedby="button-addon2" />
        <button class="btn btn-outline-dark" type="button" id="button-addon2">Buscar</button>
      </div>
      <img src={button_add} alt="Logotipo Album Sport" />
      
    </div>
  );
}

export default SearchAdd;
