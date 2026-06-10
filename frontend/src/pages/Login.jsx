function Login() {
  return (
    <div className="container mt-5" dir="rtl">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">התחברות</h2>

        <div className="mb-3">
          <label className="form-label">אימייל</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">סיסמה</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-primary w-100">
          התחבר
        </button>
      </div>
    </div>
  );
}

export default Login;