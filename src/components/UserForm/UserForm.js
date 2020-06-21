import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import UserContext from "../../context/UserContext";

const UserForm = () => {
  const { addUser } = useContext(UserContext);
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        classNum: "",
        dinnerQuantity: "",
        dinnerPrice: "",
        teaQuantity: "",
        teaPrice: "",
      }}
      onSubmit={(values) => {
        addUser(values);
      }}
    >
      {({ handleChange, handleBlur }) => (
        <Form className="container is-fluid mt-6 ">
          <div className="field-body">
            <div className="field">
              <label className="label">Imię</label>
              <div className="control">
                <Field
                  className="input"
                  type="text"
                  placeholder="Wpisz tutaj imię"
                  name="name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nazwisko</label>
              <div className="control">
                <Field
                  className="input"
                  type="text"
                  placeholder="Wpisz tutaj nazwisko"
                  name="surname"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Klasa</label>
              <div className="control">
                <Field
                  name="classNum"
                  as="select"
                  className="select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Wybierz klasę</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Field>
              </div>
            </div>
          </div>

          <div className="field-body">
            <div className="field">
              <label className="label">Liczba obiadów</label>
              <div className="control">
                <Field
                  className="input"
                  type="number"
                  placeholder="Wpisz tutaj liczbę obiadów"
                  name="dinnerQuantity"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Cena jednostkowa obiadu</label>
              <div className="control">
                <Field
                  className="input"
                  type="number"
                  placeholder="Wpisz tutaj cenę jednostkową obiadu"
                  name="dinnerPrice"
                  // value="2.5"
                />
              </div>
            </div>
          </div>
          <div className="field-body">
            <div className="field">
              <label className="label">Liczba herbat</label>
              <div className="control">
                <Field
                  className="input"
                  type="number"
                  placeholder="Wpisz tutaj liczbę herbat"
                  name="teaQuantity"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Cena jednostkowa herbaty</label>
              <div className="control">
                <Field
                  className="input"
                  type="number"
                  placeholder="Wpisz tutaj cenę jednostkową herbaty"
                  name="teaPrice"
                  // value="2.5"
                />
              </div>
            </div>
          </div>

          <div className="panel-block">
            <button
              className="button is-link is-outlined is-fullwidth"
              type="submit"
            >
              Dodaj osobę
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
