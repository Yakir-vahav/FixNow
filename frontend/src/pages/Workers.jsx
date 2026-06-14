import { useEffect, useState } from "react";

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/workers")
      .then((res) => res.json())
      .then((data) => setWorkers(data))
      .catch((error) => console.log("Error fetching workers:", error));
  }, []);

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