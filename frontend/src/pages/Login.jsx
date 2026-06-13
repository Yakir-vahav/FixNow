import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page" dir="rtl">
      <div className="auth-card">
        <h2 className="text-center mb-3">ברוך הבא ל־FixNow</h2>
        <p className="text-center text-muted mb-4">
          התחבר כדי לנהל קריאות שירות
        </p>

        <div className="mb-3">
          <label className="form-label">אימייל</label>
          <input type="email" className="form-control" placeholder="example@gmail.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">סיסמה</label>
          <input type="password" className="form-control" placeholder="הכנס סיסמה" />
        </div>

        <div className="d-flex justify-content-between mb-3">
          <label>
            <input type="checkbox" className="ms-1" />
            זכור אותי
          </label>

          <a href="#" className="text-decoration-none">שכחת סיסמה?</a>
        </div>

        <button className="btn btn-primary w-100 mb-3">
          התחבר
        </button>

        <p className="text-center">
          אין לך חשבון?{" "}
          <Link to="/register">הירשם כאן</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;