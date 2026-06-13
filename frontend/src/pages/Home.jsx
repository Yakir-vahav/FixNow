import { Link } from "react-router-dom";

function Home() {
  return (
    <div dir="rtl">
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            מצא בעל מקצוע במהירות
          </h1>

          <p className="lead mb-4">
            FixNow מחברת בין לקוחות לבין בעלי מקצוע זמינים באזור שלהם
          </p>

          <Link to="/request" className="btn btn-primary btn-lg">
            פתח קריאת שירות
          </Link>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">השירותים שלנו</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card service-card text-center p-4">
              <div className="service-icon">⚡</div>
              <h5>חשמלאי</h5>
              <p>תקלות חשמל, שקעים ותאורה</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card service-card text-center p-4">
              <div className="service-icon">🚰</div>
              <h5>אינסטלטור</h5>
              <p>נזילות, סתימות ותיקונים</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card service-card text-center p-4">
              <div className="service-icon">🔑</div>
              <h5>מנעולן</h5>
              <p>פריצת דלתות והחלפת מנעולים</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card service-card text-center p-4">
              <div className="service-icon">❄️</div>
              <h5>טכנאי מזגנים</h5>
              <p>התקנה, ניקוי ותיקון מזגנים</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;