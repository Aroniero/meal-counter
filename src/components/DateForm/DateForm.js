import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const DateForm = () => {
  const { date, setDate } = useContext(UserContext);

  const handleMonthChange = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };
  console.log(date);

  return (
    <div className="field-body container mt-5">
      <div className="field">
        <label className="label">Wybierz miesiąc dla obiadów: </label>
        <div className="control">
          <div className="select">
            <select
              name="dinnerMonth"
              onChange={(e) => {
                handleMonthChange(e);
              }}
              value={date.dinnerMonth}
            >
              <option>Wybierz...</option>
              <option value="styczeń">styczeń</option>
              <option value="luty">luty</option>
              <option value="marzec">marzec</option>
              <option value="kwiecień">kwiecień</option>
              <option value="maj">maj</option>
              <option value="czerwiec">czerwiec</option>
              <option value="lipiec">lipiec</option>
              <option value="sierpień">sierpień</option>
              <option value="wrzesień">wrzesień</option>
              <option value="październik">październik</option>
              <option value="listopad">listopad</option>
              <option value="grudzień">grudzień</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Wybierz miesiąc dla herbat: </label>
        <div className="control">
          <div className="select">
            <select
              name="teaMonth"
              onChange={(e) => {
                handleMonthChange(e);
              }}
              value={date.teaMonth}
            >
              <option>Wybierz...</option>
              <option value="styczeń">styczeń</option>
              <option value="luty">luty</option>
              <option value="marzec">marzec</option>
              <option value="kwiecień">kwiecień</option>
              <option value="maj">maj</option>
              <option value="czerwiec">czerwiec</option>
              <option value="lipiec">lipiec</option>
              <option value="sierpień">sierpień</option>
              <option value="wrzesień">wrzesień</option>
              <option value="październik">październik</option>
              <option value="listopad">listopad</option>
              <option value="grudzień">grudzień</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateForm;
