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
      <section className="container my-5">
  <div className="row text-center g-4">
    <div className="col-md-3">
      <div className="stat-box">
        <h2>250+</h2>
        <p>בעלי מקצוע</p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="stat-box">
        <h2>1,500+</h2>
        <p>קריאות שירות</p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="stat-box">
        <h2>4.9</h2>
        <p>דירוג ממוצע</p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="stat-box">
        <h2>15 דק׳</h2>
        <p>זמן תגובה ממוצע</p>
      </div>
    </div>
  </div>
</section>

<section className="container my-5">
  <h2 className="text-center mb-4">איך זה עובד?</h2>

  <div className="row text-center g-4">
    <div className="col-md-4">
      <div className="step-box">
        <h3>1</h3>
        <h5>פותחים קריאה</h5>
        <p>הלקוח ממלא פרטים על התקלה.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="step-box">
        <h3>2</h3>
        <h5>בעל מקצוע מקבל</h5>
        <p>בעל מקצוע מתאים רואה את הקריאה ומאשר אותה.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="step-box">
        <h3>3</h3>
        <h5>העבודה מסתיימת</h5>
        <p>הלקוח מקבל שירות ויכול לדרג.</p>
      </div>
    </div>
  </div>
</section>

<section className="container my-5">
  <h2 className="text-center mb-4">מה הלקוחות אומרים?</h2>

  <div className="row g-4">
    <div className="col-md-4">
      <div className="review-card">
        <p>⭐⭐⭐⭐⭐</p>
        <p>"החשמלאי הגיע מהר ופתר את התקלה במקום."</p>
        <strong>דני, חולון</strong>
      </div>
    </div>

    <div className="col-md-4">
      <div className="review-card">
        <p>⭐⭐⭐⭐⭐</p>
        <p>"שירות נוח, פשוט ומהיר. בדיוק מה שהייתי צריכה."</p>
        <strong>נועה, ראשון לציון</strong>
      </div>
    </div>

    <div className="col-md-4">
      <div className="review-card">
        <p>⭐⭐⭐⭐⭐</p>
        <p>"מצאתי אינסטלטור תוך כמה דקות."</p>
        <strong>אבי, בת ים</strong>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;