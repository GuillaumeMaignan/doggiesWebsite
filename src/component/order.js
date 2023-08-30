import React, { useState } from "react";
import Calendar from "react-calendar";
import "../style/calendar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Order() {
  const [value, setValue] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [disable, setDisable] = useState(true);
  console.log("le jour est :", value);

  function onChange(nextValue) {
    setValue(nextValue);
    setSelectedPeriod(null);
    setDisable(true);
  }
  // var locale = "he-HE";
  var locale = "he-HE";
  // Fonction de gestion des boutton horaire : matin / aprem / soir
  const handleButtonClick = (period) => {
    if (selectedPeriod === period) {
      setSelectedPeriod(null);
      setDisable(false);
    } else {
      setSelectedPeriod(period);
      setDisable(false);
    }
  };

  return (
    <div className="mainContainer">
      <h1 className="title"> Order a walk</h1>
      <div className="orderContainer">
        <div className="calendarContainer">
          <Calendar
            calendarType="hebrew"
            locale={locale}
            onChange={onChange}
            value={value}
          />
        </div>
        <div className="tableContainer">
          <table className="calendarTable">
            <thead>
              <tr>
                <th>Morning</th>
                <th>After-Noon</th>
                <th>Evening</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9H - 12H</td>
                <td>12H - 16H</td>
                <td>16H-19H</td>
              </tr>
              <tr>
                <td>
                  <button
                    className={selectedPeriod === "morning" ? "selected" : ""}
                    onClick={() => handleButtonClick("morning")}
                  >
                    Selected
                  </button>
                </td>

                <td>
                  <button
                    className={selectedPeriod === "afternoon" ? "selected" : ""}
                    onClick={() => handleButtonClick("afternoon")}
                  >
                    Selected
                  </button>
                </td>
                <td>
                  <button
                    className={selectedPeriod === "evening" ? "selected" : ""}
                    onClick={() => handleButtonClick("evening")}
                  >
                    Selected
                  </button>
                </td>
              </tr>
              {/* Ajoutez d'autres lignes au besoin */}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/myWalk">
        <button className="start" disabled={disable}>
          Order
        </button>
      </Link>
    </div>
  );
}
