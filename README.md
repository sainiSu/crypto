# Real-Time Crypto Price Tracker

A React + Redux Toolkit application that tracks real-time cryptocurrency prices, simulating WebSocket updates.

## 🚀 Features

- Display of 6 cryptocurrencies with detailed metrics
- Real-time simulated updates every 2 seconds
- Responsive design using Tpure css
- State management with Redux Toolkit.



## 🛠️ Technologies Used

- Vite
- React
- Redux Toolkit

## Project structure 

´´´ bash 

crypto-tracker/
├── public/
│   └── logo
         └── images of currency 
├── src/
│   ├── assets
│   │
│   ├── components/
│   │   └── CryptoTable.jsx
│   ├── features/
│   │   └── cryptoSlice.js
│   │___index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── store.js
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

## Expanation

-I made this project using **vite** ,**React** ,**Redux Toolkit** and **Pure CSS**
 
 For this in terminal of VS code inastall dependecies :
  npm create vite@latest
  Project name
  cd Project name 
  npm install
  npm install @reduxjs/toolkit react-redux
  npm run dev

In this project the folder Component have file name CryptoTable.jsx which contain the table with name, logo,price etc.(as shown in the image) .
display live price data.

Then Folder feature contain file CryptoSlice.js which defines the initial state of crypto data and reducer(update prices randomly)

Redux Toolkitsimplifies state mangement and helps to keep the data in consistency.

Store.js centralize the state store.

websocket used for real time updatation. 



## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sainiSu/crypto.git
   cd "project name"
   npm run dev

   ## vercel demo

   https://crypto-ashen-phi.vercel.app/
 
