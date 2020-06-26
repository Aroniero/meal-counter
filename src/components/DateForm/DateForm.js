import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const DateForm = () => {
  const { date, setDate } = useContext(UserContext);

  const handleMonthChange = (e) => {
    const currDate = { ...date, [e.target.name]: e.target.value };

    localStorage.setItem("date", JSON.stringify(currDate));
    setDate(currDate);
  };

  const handleListDateChange = (e) => {
    // Creating new tamplate for date instead of having YYYY/MM/DD
    const dateArr = e.target.value.split("-").reverse();
    const day = dateArr[0];
    const month = dateArr[1];
    const year = dateArr[2];
    const fullDate = `${day}/${month}/${year}`;

    // Adding new date to state aswell as in localstorage
    const currDate = { ...date, [e.target.name]: fullDate };
    localStorage.setItem("date", JSON.stringify(currDate));
    setDate(currDate);
  };

  return (
    <div className="field-body container mt-5">
      <div className="field">
        <label className="label">Wybierz datę wykonania zestawienia: </label>
        <div className="control">
          <input
            className="input"
            type="date"
            name="listDate"
            onChange={(e) => {
              handleListDateChange(e);
            }}
          />
          Wybrana data: {date.listDate}
        </div>
      </div>
      <div className="field">
        <label className="label">
          Wybierz datę do kiedy należy dokonać wpłatę (widoczne na karteczkach):
        </label>
        <div className="control">
          <input
            className="input"
            type="date"
            name="cardDate"
            onChangeCapture={(e) => {
              handleListDateChange(e);
            }}
          />
          Wybrana data: {date.cardDate}
        </div>
      </div>
      <div className="field">
        <label className="label">
          Wybierz miesiąc dla obiadów na karteczkach:
        </label>
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
        <label className="label">
          Wybierz miesiąc dla herbat na karteczkach:
        </label>
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
