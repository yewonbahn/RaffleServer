# Raffle
![NFT_Ranks_Logo](https://user-images.githubusercontent.com/63235104/213915672-2ecfb140-5893-49fc-bbd6-52ebb20b6f95.png)


NFT Ranks analyzes users' Ethereum wallets to provide indicators of users' assets and shares users' NFT reliability scores to NFT projects and businesses. 
Through this, we expect to create a healthier NFT/DAO ecosystem.
Based on your metrics, NFT reliability score is divided into three stages based on your wallet's portfolio.

Level metrics represent the transparency and reliability of the wallet owner's transactions, allowing NFT projects and businesses to find candidates for participation (ex. whitelist) on a more solid basis. By whitelisting validated users, NFT projects can further enhance the value of the project.



1.Paper (lower 10%) 
2.General 
3.Diamond Hands (Top 30%)


처음 git pull 이후 실행시 
```npm i```
```npm i -g yarn```
로 디펜던시 다운 후 raffle_server 파일안에 들어가서
yarn dev 또는 yarn start 실행하면 됨

파일구조 MVP
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
