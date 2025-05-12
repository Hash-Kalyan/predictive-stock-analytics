
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import pandas as pd
from prophet import Prophet

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/predict/{ticker}")
def predict_stock(ticker: str):
    data = yf.download(ticker, period='1y')
    df = data['Close'].reset_index()
    df.columns = ['ds', 'y']

    model = Prophet()
    model.fit(df)

    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)

    result = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(30).to_dict('records')
    return result
