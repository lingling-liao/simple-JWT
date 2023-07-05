
Step 1 : 使用 IDE (如 VS code)，建立一個 node.js 專案

Step 2 : `npm install express` 其中 express.js 可以讓 node.js 使用許多 web api，使開發更便利

Step 3 : `npm install jsonwebtoken` 用來生成 JWT

Step 4 : 建立 index.js

Step 5 : JWT 的 sign 步驟，透過 (1-17) 這些步驟完成

* JWT密鑰設定
* 過期時間
* payload

Step 6 : 登入及驗證 API (17-)

* 登入 API : 驗證使用者是否輸入正確的帳號與密碼，若正確就給予 token
* 驗證 API : 使用者回傳 token 至 server，透過 JWT verify 解析 token 是否正確，若正確且無過期則回傳 **verified**，若過期則回傳 **Token is expired**，若錯誤則回傳 **JWT verify fail**
* Server 可行設定要設在哪個 port，設定好後 `node index.js` 執行 server

Step 7 : 透過 postman 去呼叫 login api，若帳號密碼填寫正確則回傳 token

![image](https://github.com/lingling-liao/simple-JWT/assets/17310038/b8bc66d7-9c96-4581-acf7-1914f093a0e1)


Step 8 : 驗證 token

![image](https://github.com/lingling-liao/simple-JWT/assets/17310038/5c07d5b0-9338-4c76-a84f-522ff7a23af6)


如果您已經完成以上，下次使用僅需執行

Step 1 : `npm install` (載入模塊)

Step 2 : `node index.js` (執行 server)
