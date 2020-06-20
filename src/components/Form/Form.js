import React from "react";

const Form = () => {
  return (
    <form className="container is-fluid mt-6  ">
      <div className="field-body ">
        <div className="field">
          <label className="label">Imię</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Wpisz tutaj imię"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Nazwisko</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Wpisz tutaj nazwisko"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Klasa</label>
          <div className="control">
            <div className="select">
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="field-body">
        <div className="field">
          <label className="label">Liczba obiadów</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Wpisz tutaj liczbę obiadów"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Cena jednostkowa obiadu</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value="2.5"
              placeholder="Wpisz tutaj cenę jednostkową obiadu"
            />
          </div>
        </div>
      </div>
      <div className="field-body">
        <div className="field">
          <label className="label">Liczba herbat</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Wpisz tutaj liczbę herbat"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Cena jednostkowa herbaty</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value="2.5"
              placeholder="Wpisz tutaj cenę jednostkową herbaty"
            />
          </div>
        </div>
      </div>

      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          Dodaj osobę
        </button>
      </div>
    </form>
  );
};

export default Form;
