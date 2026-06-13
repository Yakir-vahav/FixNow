import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("לקוח");

  return (
    <div className="auth-page" dir="rtl">
      <div className="auth-card">
        <h2 className="text-center mb-3">הצטרף ל־FixNow</h2>

        <p className="text-center text-muted mb-4">
          פתח חשבון והתחל להשתמש במערכת
        </p>

        <div className="mb-3">
          <label className="form-label">שם מלא</label>
          <input type="text" className="form-control" placeholder="הכנס שם מלא" />
        </div>

        <div className="mb-3">
          <label className="form-label">אימייל</label>
          <input type="email" className="form-control" placeholder="example@gmail.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">טלפון</label>
          <input type="text" className="form-control" placeholder="050-1234567" />
        </div>

        <div className="mb-3">
          <label className="form-label">סיסמה</label>
          <input type="password" className="form-control" placeholder="בחר סיסמה" />
        </div>

        <div className="mb-3">
          <label className="form-label">אני:</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>לקוח</option>
            <option>בעל מקצוע</option>
          </select>
        </div>

        {role === "בעל מקצוע" && (
          <div className="worker-fields">
            <div className="mb-3">
              <label className="form-label">תחום מקצוע</label>
              <select className="form-select">
                <option>חשמלאי</option>
                <option>אינסטלטור</option>
                <option>מנעולן</option>
                <option>טכנאי מזגנים</option>
                <option>צבעי</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">עיר פעילות</label>
              <input type="text" className="form-control" placeholder="לדוגמה: חולון" />
            </div>

            <div className="mb-3">
              <label className="form-label">שנות ניסיון</label>
              <input type="number" className="form-control" placeholder="לדוגמה: 3" />
            </div>
          </div>
        )}

        <button className="btn btn-success w-100 mb-3">
          צור חשבון
        </button>

        <p className="text-center">
          כבר יש לך חשבון?
          <Link to="/login"> התחבר כאן</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;