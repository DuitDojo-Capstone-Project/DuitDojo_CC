# Description
<p>For the backend API, we use <b>express js</b> to make the endpoint. We try to make endpoint that deployed on the <b>cloud function</b>. For the database, we use <b>mongoDB</b> cloud to store the database like the users, user expenses, and user incomes.</p>

# Documentation

## Users

### Register

- Method: POST
- Url: /api/users/
```json
{
	"username": "String",
	"email": "String",
	"password": "String",
	"reconfirmPassword": "String"
}
```

### Login

- Method: POST
- Url: /api/users/login
```json
{
	"username": "String",
	"password": "String"
}
```

### Get User

- Method: GET
- Url: /api/users/me?
- Header: Bearer token

<br>

## User Expenses
- Method: POST, GET, PUT, DELETE
- Url: /api/expenses/
- Header: Bearer token
```json
{
	"namaPengeluaran": "String",
	"besarPengeluaran": "Number",
	"tanggal": "Date",
	"jenisPengeluaran": "[String]", 
	"dompet": "String", 
	"note": "String"
}
```

## User Incomes
- Method: POST, GET, PUT, DELETE
- Url: /api/incomes/expenses/
- Header: Bearer token
```json
{
	"namaPemasukan": "String",
	"besarPemasukan": "Number",
	"tanggal": "Date",
	"jenisPemasukan": "[String]", 
	"dompet": "String", 
	"note": "String"
}
```