# NFT Ranks - Server 
[NFT Ranks git book](https://team-raffle.gitbook.io/nftranks-eng/)
<img src="https://user-images.githubusercontent.com/63235104/213915731-98a7d9ba-42f7-4057-9aac-1cd94ab2642f.png"  width="800" height="380">
          
NFT Ranks analyzes users' Ethereum wallets to provide indicators of users' assets and shares users' NFT reliability scores to NFT projects and businesses. 
Through this, we expect to create a healthier NFT/DAO ecosystem.
Based on your metrics, NFT reliability score is divided into three stages based on your wallet's portfolio.

Level metrics represent the transparency and reliability of the wallet owner's transactions, allowing NFT projects and businesses to find candidates for participation (ex. whitelist) on a more solid basis. By whitelisting validated users, NFT projects can further enhance the value of the project.

1. Paper (lower 10%) 
2. General 
3. Diamond Hands (Top 30%)

## Overview
![Landing_1024](https://user-images.githubusercontent.com/63235104/213915969-721ad2c8-9913-4a89-8a82-e153dbeb33ce.png)



## Getting Started

- npm i
- npm i -g yarn
- cd/raffle_server
- yarn dev or yarn start 


## 파일구조 MVP
```D:\NodeJs\RaffleServer\raffle_web\README.md
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # DB models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

현재 구현된 API : User

[보일러플레이트 출처](https://github.com/hagopj13/node-express-boilerplate)
