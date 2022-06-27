# API
uploading csv file to MongoDB 

step 1 : Create a node.js project using “npm init”, If you want to create without asking any options then use — “npm init -y”.

step 2 : Save the “data-sheet.csv” file in the same folder.

step 3: 3. Install packages “csvtojson” and “mongodb” using the following command:
npm i --save csvtojson mongodb

step 4 :  Now just create a file like “index.js” and write down the code

step 5 : Import csvtojson and mongodb.

step 6:  Define the URL of your local or remote MongoDB instance

step 7:  Then, establish a connection to the database.

step 8. Fetch CSV file and insert all rows into the database.

step 9 : At last, Run the index.js file using the following command:  node index.js

10. After successfully importing the CSV file, you will see the following output in the console:

![db](https://user-images.githubusercontent.com/49945053/175867793-e3be9aa7-24bd-42c3-867f-c39498bfb293.png)

