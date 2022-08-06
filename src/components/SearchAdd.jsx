import '../App.css';
import button_add from '../img/button-add.svg'

function SearchAdd() {
  return (
    <div className="SearchAdd">
      <div class="input-group mb-3">
        <input type="text" class="form-control form-control-sm" placeholder="Buscar Jogador" aria-label="Buscar Jogador" aria-describedby="button-addon2" />
        <button class="btn btn-outline-dark" type="button" id="button-addon2">Buscar</button>
      </div>
      <a className='btn_add' href="">
        <img src={button_add} alt="Logotipo Album Sport" />
      </a>
      
    </div>
  );
}

export default SearchAdd;
