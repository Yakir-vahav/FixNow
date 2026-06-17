# FixNow - תכנון בסיס נתונים 

## מטרת המסמך
המסמך הזה מציג את תכנן בסיס הנתונים של פרויקט FixNow,
כולל כל הטבלאות
,העמודות
,סוגי הנתונים
,הקשרים בין הטבלאות
האינדקסיםוסכמה מלאה של הפרויקט

## רשימת טבלאות
1.users
2.workers
3.servicerequests
4.reviews


## Users טבלה 1:
מטרת הטבלה:
שמירת כל המשתמשים במערכת(לקוחות ובעלי מקצוע)

שם העמודה|סוג נתון|תיאור|
-----|----------|---------|
מזדהה משתמש|INT|id
שם מלא|VARCHAR|full_name
כתובת מייל|VARCHAR|email
סיסמא מוצפנת|VARCHAR|password
מספר טלפון|VARCHAR|phone
עיר|VARCHAR|city
סוג משתמש|ENUM('customer','worker')|role

Praimary Key:
-id

index:
-email


## Workers טבלה 2:
מטרת הטבלה:
שמירת מידע נוסף על משתמשים שהם בעלי מקצוע

שם העמודה|סוג נתון|תיאור|
-----|----------|---------|
מזהה בעל מקצוע|INT|ID
Users מזהה המשתמש מטבלת|INT|user_id
תחום מקצוע|VARCHAR|profession
 description | TEXT | תיאור קצר על בעל המקצוע 
 experience_years | INT | שנות ניסיון 
 rating | DECIMAL(2,1) | דירוג ממוצע 

Praimary Key:
-id

Foreign Key:
- user_id מקושר לעמודה id בטבלת User

Indexes:
- user_id
- profession




## טבלה 3: ServiceRequests

מטרת הטבלה:
שמירת כל קריאות השירות שנפתחות על ידי הלקוחות.

| שם העמודה | סוג נתון | תיאור |
|------------|------------|------------|
 id | INT | מזהה קריאה (Primary Key) 
 customer_id | INT | מזהה הלקוח שפתח את הקריאה 
 profession | VARCHAR | סוג בעל המקצוע המבוקש 
 description | TEXT | תיאור התקלה 
 address | VARCHAR | כתובת 
 city | VARCHAR | עיר |
 phone | VARCHAR | טלפון ליצירת קשר 
 status | VARCHAR | מצב הקריאה (Open / Accepted / Completed) 

Primary Key:
- id

Foreign Key:
- customer_id מקושר לעמודה id בטבלת Users

Indexes:
- customer_id
- profession
- city
- status




## טבלה 4: Reviews

מטרת הטבלה:
שמירת דירוגים וביקורות של לקוחות על בעלי מקצוע לאחר סיום עבודה.

| שם העמודה | סוג נתון | תיאור |
|------------|------------|------------|
| id | INT | מזהה ביקורת (Primary Key) |
| request_id | INT | מזהה קריאת השירות |
| customer_id | INT | מזהה הלקוח שנתן את הדירוג |
| worker_id | INT | מזהה בעל המקצוע שקיבל את הדירוג |
| rating | INT | דירוג מספרי מ־1 עד 5 |
| comment | TEXT | הערה או חוות דעת |
| created_at | DATETIME | תאריך יצירת הביקורת |

Primary Key:
- id

Foreign Keys:
- request_id מקושר לעמודה id בטבלת ServiceRequests
- customer_id מקושר לעמודה id בטבלת Users
- worker_id מקושר לעמודה id בטבלת Users

Indexes:
- request_id
- customer_id
- worker_id
- rating

# קשרים בין הטבלאות

## Users ו-ServiceRequests

לכל לקוח במערכת יכולות להיות כמה קריאות שירות.

הקישור מתבצע באמצעות:
- customer_id בטבלת ServiceRequests
- id בטבלת Users



## Users ו-Reviews

לקוח יכול לכתוב כמה ביקורות שונות על עבודות שבוצעו.

הקישור מתבצע באמצעות:
- customer_id בטבלת Reviews
- id בטבלת Users



## בעלי מקצוע ו-Reviews

בעל מקצוע יכול לקבל הרבה ביקורות מלקוחות שונים.

הקישור מתבצע באמצעות:
- worker_id בטבלת Reviews
- id בטבלת Users



## ServiceRequests ו-Reviews

לכל קריאת שירות יכולה להיות ביקורת אחת לאחר שהעבודה הסתיימה.

הקישור מתבצע באמצעות:
- request_id בטבלת Reviews
- id בטבלת ServiceRequests

# סכמה כללית

Users
 |
 |---- ServiceRequests
 |
 |---- Reviews

ServiceRequests
 |
 |---- Reviews