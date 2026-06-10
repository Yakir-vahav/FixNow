function CreateRequest() {
  return (
    <div className="container mt-5" dir="rtl">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">פתיחת קריאת שירות</h2>

        <div className="mb-3">
          <label className="form-label">סוג בעל מקצוע</label>
          <select className="form-select">
            <option>חשמלאי</option>
            <option>אינסטלטור</option>
            <option>מנעולן</option>
            <option>טכנאי מזגנים</option>
            <option>צבעי</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">תיאור התקלה</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">כתובת</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">טלפון</label>
          <input type="text" className="form-control" />
        </div>

        <button className="btn btn-primary w-100">
          שלח קריאה
        </button>
      </div>
    </div>
  );
}

export default CreateRequest;