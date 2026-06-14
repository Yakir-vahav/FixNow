import { useState } from "react";

function Workers() {
  const [searchName, setSearchName] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");

  const workers = [
    { id: 1, name: "יוסי כהן", profession: "חשמלאי", city: "חולון", rating: 4.9 },
    { id: 2, name: "אבי לוי", profession: "אינסטלטור", city: "בת ים", rating: 4.8 },
    { id: 3, name: "משה ישראלי", profession: "מנעולן", city: "ראשון לציון", rating: 5.0 },
    { id: 4, name: "דוד מזרחי", profession: "טכנאי מזגנים", city: "תל אביב", rating: 4.7 }
  ];

  const filteredWorkers = workers.filter((worker) => {
    return (
      worker.name.includes(searchName) &&
      (profession === "" || worker.profession === profession) &&
      (city === "" || worker.city === city)
    );
  });

  return (
    <div className="container mt-5" dir="rtl">
      <h2 className="text-center mb-4">בעלי מקצוע זמינים</h2>

      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="חפש לפי שם"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option value="">כל המקצועות</option>
              <option value="חשמלאי">חשמלאי</option>
              <option value="אינסטלטור">אינסטלטור</option>
              <option value="מנעולן">מנעולן</option>
              <option value="טכנאי מזגנים">טכנאי מזגנים</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">כל הערים</option>
              <option value="חולון">חולון</option>
              <option value="בת ים">בת ים</option>
              <option value="ראשון לציון">ראשון לציון</option>
              <option value="תל אביב">תל אביב</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredWorkers.map((worker) => (
          <div className="col-md-4 mb-4" key={worker.id}>
            <div className="card p-4 text-center shadow h-100">
              <h1>👨‍🔧</h1>
              <h4>{worker.name}</h4>
              <p>{worker.profession}</p>
              <p>📍 {worker.city}</p>
              <p>⭐ {worker.rating}</p>
              <button className="btn btn-primary">שלח קריאה</button>
            </div>
          </div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <p className="text-center text-muted">לא נמצאו בעלי מקצוע מתאימים</p>
      )}
    </div>
  );
}

export default Workers;