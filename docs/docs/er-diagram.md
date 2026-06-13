# ER Diagram - FixNow

## ישויות במערכת

### Users
- id
- fullName
- email
- password
- phone
- role

---

### ServiceRequests
- id
- customerId
- workerId
- profession
- description
- address
- phone
- status
- createdAt

---

### Reviews
- id
- requestId
- customerId
- workerId
- rating
- comment
- createdAt

---

## קשרים בין הישויות

Users (Customer)
        │
        │ 1
        │
        │ N
ServiceRequests
        │
        │ 1
        │
        │ 1
Reviews
        ▲
        │
        │ N
Users (Worker)
