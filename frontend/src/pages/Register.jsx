function Register() {
  return (
    <div className="container mt-5" dir="rtl">
      <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">הרשמה</h2>

        <div className="mb-3">
          <label className="form-label">שם מלא</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">אימייל</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">סיסמה</label>
          <input type="password" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">סוג משתמש</label>
          <select className="form-select">
            <option>לקוח</option>
            <option>בעל מקצוע</option>
          </select>
        </div>

        <button className="btn btn-success w-100">
          הירשם
        </button>
      </div>
    </div>
  );
}

export default Register;