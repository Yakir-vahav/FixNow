function App() {
  return (
 <div className="container mt-5 text-center">
<h1 className="display-3">FixNow</h1>

<p className="lead">מצא בעל מקצוע במהירות</p>
<button className="btn btn-primary me-2">התחבר</button>
<button className="btn btn-success">הירשם</button>
<hr/>

<div className="row mt-4"> 
  <div className="card p-3">חשמלאי</div>
  <div className="card p-3">אינסטלטור</div>
 <div className="card p-3">מנעולן</div>
  <div className="card p-3">טכנאי מזגנים</div>
  <div className="card p-3">צבעי</div>
</div>
 </div>
  ) ;
}

export default App;