
---

# 📈 Predictive Analytics Web App for Stock Prices

A web-based platform that leverages machine learning to forecast stock prices, visualize trends, and deliver actionable financial insights. Powered by **Prophet**, **LSTM**, and regression models.

---

## 🚀 Features

- 📊 Interactive visualizations of historical and predicted stock trends
- 🤖 Predictive modeling using **Prophet**, **LSTM**, and **Linear Regression**
- 🧠 Data-driven insights to support investment and trading decisions
- 🌐 REST API powered by **FastAPI**
- ☁️ Deployable to **AWS Lambda**, **Heroku**, or any cloud provider

---

## 🛠️ Tech Stack

- 🐍 **Python** – Core logic and ML modeling
  - [Prophet](https://facebook.github.io/prophet/) for time-series forecasting
  - FastAPI for backend APIs
- ⚛️ **React** – Modern frontend for visualization and interactivity
- 🗄️ **PostgreSQL / AWS RDS** – For storing historical and prediction data
- ☁️ **AWS Lambda** or **Heroku** – For serverless or managed deployments

---

## ⚙️ Setup Instructions

### 🧠 Backend (FastAPI + Prophet)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
````

API will be available at:
👉 `http://localhost:8000/predict/{ticker}`

---

### 🖥️ Frontend (React + Vite)

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install axios
npm run dev
```

Frontend will run at:
👉 `http://localhost:5173`

---

## 🔌 Sample API Call

**Endpoint:**

```
GET http://localhost:8000/predict/{ticker}
```


---

## 📬 Contact

Crafted with 💡 by [Hasvanth Kalyan Gundu](https://www.linkedin.com/in/hasvanth-kalyan-g-13538a148)
📧 [hasvanthkalyan9@gmail.com](mailto:hasvanthkalyan9@gmail.com)

---

## 🙌 Contributions Welcome!

* Add support for more models (ARIMA, XGBoost)
* Expand UI with filters, comparisons, and analytics
* Integrate stock news sentiment alongside price trends

---


