import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import UserContext from "../../context/UserContext";

const UserForm = () => {
  const { addUser } = useContext(UserContext);

  function validateInput(value) {
    let error;
    if (value === "") {
      error = `Zbyt krótkie`;
    }
    return error;
  }
  function validateSelect(value) {
    let error;
    if (value === "Wybierz...") {
      error = `Wybierz jedną z opcji`;
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        classNum: "",
        dinnerQuantity: "",
        dinnerPrice: 2.5,
        teaQuantity: "",
        teaPrice: 2.6,
      }}
      onSubmit={(values) => {
        addUser(values);
      }}
    >
      {({ handleChange, handleBlur, errors, touched, isValidating }) => (
        <Form className="container is-narrow mt-6 ">
          <div className="field-body">
            <div className="field">
              <label className="label">Imię</label>
              <div className="control">
                <Field
                  className={errors.name ? "input is-danger" : "input"}
                  type="text"
                  placeholder="Wpisz tutaj imię"
                  name="name"
                  validate={validateInput}
                />
                {/* {errors.name && touched.name && (
                  <p className="help is-danger">{errors.name}</p>
                )} */}
              </div>
            </div>
            <div className="field">
              <label className="label">Nazwisko</label>
              <div className="control">
                <Field
                  className={errors.surname ? "input is-danger" : "input"}
                  type="text"
                  placeholder="Wpisz tutaj nazwisko"
                  name="surname"
                  validate={validateInput}
                />
                {/* {errors.surname && touched.surname && (
                  <p className="help is-danger">{errors.surname}</p>
                )} */}
              </div>
            </div>
            <div className="field">
              <label className="label">
                Wybierz numer klasy lub pracownika
              </label>
              <div
                className={
                  errors.classNum
                    ? "select is-rounded is-danger"
                    : "select is-rounded"
                }
              >
                <Field
                  name="classNum"
                  as="select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  validate={validateSelect}
                >
                  <option>Wybierz...</option>
                  <option value="Nauczyciel">Nauczyciel</option>
                  <option value="Prac. gosp.">Pracownik gospodarczy</option>
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
              {/* {errors.classNum && touched.classNum && (
                <p className="help is-danger">{errors.classNum}</p>
              )} */}
            </div>
          </div>

          <div className="field-body">
            <div className="field">
              <label className="label">Liczba obiadów</label>
              <div className="control">
                <Field
                  className={
                    errors.dinnerQuantity ? "input is-danger" : "input"
                  }
                  type="number"
                  placeholder="Wpisz tutaj liczbę obiadów"
                  name="dinnerQuantity"
                  validate={validateInput}
                />
                {/*
                {errors.dinnerQuantity && touched.dinnerQuantity && (
                  <p className="help is-danger">{errors.dinnerQuantity}</p>
                )} */}
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
                />
              </div>
            </div>
          </div>
          <div className="field-body">
            <div className="field">
              <label className="label">Liczba herbat</label>
              <div className="control">
                <Field
                  className={errors.teaQuantity ? "input is-danger" : "input"}
                  type="number"
                  placeholder="Wpisz tutaj liczbę herbat"
                  name="teaQuantity"
                  validate={validateInput}
                />
                {/* {errors.teaQuantity && touched.teaQuantity && (
                  <p className="help is-danger">{errors.teaQuantity}</p>
                )} */}
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
