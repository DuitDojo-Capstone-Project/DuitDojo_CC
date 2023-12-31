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

<br>

# How to Running the Backend API Locally 
To launch the Backend API on your local machine, follow these steps:
1.  Clone the Repository. <br>
	Clone the repository using the following command:
	```
	git clone https://github.com/DuitDojo-Capstone-Project/DuitDojo_CC.git
	```
2.  Navigate to the Project's Root Directory
3.  Set Up Environment Variables <br>
	Create a .env file to configure the port, MongoDB URI, and JWT secret for the application.
4.  Install Dependencies <br>
	Execute the command below in your terminal to install all necessary dependencies:
	```
	npm install
	```
5.  Start the Server in Development Mode <br>
	Initiate the server in development mode using:
	```
	npm run server
	```
6.  Access the Server <br>
	The server will be running on the specified port as set up in your environment variables.

<br>

# How to Running the ML API Locally 
To launch the ML API on your local machine, follow these steps:
1.  Clone the Repository. <br>
	Clone the repository using the following command:
	```
	git clone https://github.com/DuitDojo-Capstone-Project/DuitDojo_CC.git
	```
2.  Navigate to the Project's Root Directory
3. 	Create an Environment <br>
	Create a project folder and a .venv folder within:
	```
	py -3 -m venv .venv
	```
4. 	Activate the Environment <br>
	Before you work on your project, activate the corresponding environment:
	```
	.venv\Scripts\activate
	```
5. 	Install Dependencies <br>
	In your terminal, install the necessary dependencies using:
	```
	pip install --no-cache-dir -r requirements.txt
	```
6. 	Start the Server <br>
	To launch the server, type the following command in your terminal:
	```
	flask run
	```
7. 	Access the Server
	Once the server is running, access it at http://127.0.0.1:5000/.