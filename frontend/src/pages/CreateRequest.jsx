import { useState } from "react";

function CreateRequest() {
  const [profession, setProfession] = useState("חשמלאי");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      profession,
      description,
      address,
      phone,
    };

    try {
      const response = await fetch("http://localhost:5000/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("הקריאה נשלחה בהצלחה!");
        setDescription("");
        setAddress("");
        setPhone("");
      } else {
        setMessage("אירעה שגיאה בשליחת הקריאה");
      }
    } catch (error) {
      setMessage("שגיאה בחיבור לשרת");
      console.log(error);
    }
  };

  return (
    <div className="container mt-5" dir="rtl">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">פתיחת קריאת שירות</h2>

        {message && (
          <div className="alert alert-info text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">סוג בעל מקצוע</label>
            <select
              className="form-select"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option>חשמלאי</option>
              <option>אינסטלטור</option>
              <option>מנעולן</option>
              <option>טכנאי מזגנים</option>
              <option>צבעי</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">תיאור התקלה</label>
            <textarea
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">כתובת</label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">טלפון</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            שלח קריאה
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateRequest;