# Description
<p>To ensure a secure, scalable, and cost-efficient backend, we propose utilizing a proven technology stack: Express.js for rapid API development, cloud functions for seamless deployment and resource optimization, and MongoDB Cloud for flexible database management, ensuring secure and efficient storage and retrieval of user data, including expenses and incomes.</p>

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
	"dompet": "[String]", 
	"note": "String"
}
```

<br>

## User Incomes
- Method: POST, GET, PUT, DELETE
- Url: /api/incomes/
- Header: Bearer token
```json
{
	"namaPemasukan": "String",
	"besarPemasukan": "Number",
	"tanggal": "Date",
	"jenisPemasukan": "[String]", 
	"dompet": "[String]", 
	"note": "String"
}
```

<br>

## Scan Receipt
- Method: POST
- Url: /donut/
- Body: multipart/form-data

<br>

# Cloud Architecture Design
<p>In our Cloud Architecture Design, we leverage Cloud Function and Cloud Run for deploying APIs. Specifically, we employ Express.js for the local server in Cloud Function and Flask for the local server in Cloud Run.</p>
![CloudArchitectureDesign](https://file.notion.so/f/f/131350dd-0a84-4e3e-94d5-84987d939d86/25b2a552-4527-4942-a0a7-2faa7c976d84/Cloud_Architecture_Overview.png?id=384f6747-2f97-49a7-8c83-3e20edbb7d1b&table=block&spaceId=131350dd-0a84-4e3e-94d5-84987d939d86&expirationTimestamp=1703289600000&signature=cpnSrQQ59JhzEDBIxEqDFKUw4Ag3LarFHXLTgfymSrU&downloadName=Cloud+Architecture+Overview.png)

