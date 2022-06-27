// Import required module csvtojson and mongodb packages
import csvtojson from "csvtojson";
import mongodb from "mongodb";

const csvtojson = require(‘csvtojson’);
const mongodb = require(‘mongodb’);
var url = “mongodb://localhost:50000/SampleDb”;

var dbConn;
mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true,
}).then((client) => {
    console.log(‘DB Connected!’);
    dbConn = client.db();
}).catch(err => {
    console.log(“DB Connection Error: ${err.message}”);
});





// CSV file name
const fileName = “data-sheet.csv”;
var arrayToInsert = [];
csvtojson().fromFile(data-sheet.csv).then(source => {
    // Fetching the all data from each row
    for (var i = 0; i < source.length; i++) {
         var oneRow = {
             agent: source[i][“agent”],
             userType: source[i][“userType”],
             policy_mode: source[i][“policy_mode”],
             producer: source[i][“producer”]
             policy_number: source[i][“policy_number”],
             premium_amount_written: source[i][“premium_amount_written”],
             premium_amount,policy_type: source[i][“premium_amount,policy_type”],
             company_name: source[i][“company_name”]
             category_name: source[i][“category_name”],
             policy_start_date: source[i][“policy_start_date”],
             policy_end_date: source[i][“policy_end_date”],
             csr: source[i][“csr”],
             account_name: source[i][“account_name”],
             email: source[i][“email”],
             gender: source[i][“gender”],
             firstname: source[i][“firstname”]
             city: source[i][“city”],
             account_type: source[i][“account_type”],
             phone: source[i][“phone”],
             address: source[i][“address”]
             state: source[i][“state”],
             zip: source[i][“zip”],
             dob: source[i][“dob”],
             primary: source[i][“primary”],
             Applicant ID: source[i][“Applicant ID”],
             agency_id: source[i][“agency_id”]
             hasActive ClientPolicy: source[i][“hasActive ClientPolicy”],
            };
         arrayToInsert.push(oneRow);
     }
     //inserting into the table “clients”
     var collectionName = ‘employees’;
     var collection = dbConn.collection(collectionName);
     collection.insertMany(arrayToInsert, (err, result) => {
         if (err) console.log(err);
         if(result){
             console.log(“Import CSV into database successfully.”);
         }
     });
});



const polk= require('polka');
polk()
  .get('/create', (req, res) => {
    res.end(`It works`);
  })
  .listen(5000, err => {
    if (err) throw err;
    console.log(`> localhost:5000`);
  });

//Create operation

const polk = require('polka');
const { MongoClient } = require("mongodb");

polk()
  .get('/create', (req, res) => {
    const cl = new MongoClient("mongodb://localhost:5000");
    async function run() {
      try {
        await cl.connect();
        const dbs = client.db("user","account","policy");
       

        const rest = await coll.insertOne({"MaXWell"});
        res.end(JSON.stringify(rest));
      } catch (ex) {
        console.log("Error: " + ex);
      } finally {
        await cl.close();
      }
    }
    run().catch(console.dir);
  })
  .listen(5000, err => {
    if (err) throw err;
    console.log(`> localhost:5000`);
  });

//Retrieve data

.get('/retrieve', (req, res) => {
    const cl = new MongoClient("mongodb://localhost:5000");
    async function run() { 

      try {
        await cl.connect();
        const dbs= client.db("user");
        const coll = dbs.collection("account");

        const cur = coll.find({}, {});

        let items = [];
        await cur.forEach(function(doc){
          items.push(doc);
        });
        res.end(JSON.stringify(items));
      } catch (err){
        console.warn("ERROR: " + err);
        if (errCallback) errCallback(err);
      } finally {
        await cl.close();
      }
    }
    run().catch(console.dir);
  })


//Updata data

.get('/update', (req, res) => {
    const cl = new MongoClient("mongodb://localhost:5000");
    async function run() {
      try {
        await cl.connect();
        const dbs = client.db("user");
        const coll = dbs.collection("account");

        const updateDocument = {
          $set: {
            user:
              "Maxwell",
          },
        };

        const rst = await coll.updateOne({}, updateDocument, {}); 
        res.end("Updated: " + rst.modifiedCount);
      } catch (ex) {
        errCallback(ex);
      } finally {
        await cl.close();
      }
    }
    run().catch(console.dir);
  })


//Deleting Data

.get('/delete', (req, res) => {
    const cl = new MongoClient("mongodb://localhost:5000");
    async function run() {
      try {
        await cl.connect();
        const dbs = cl.db("intro");
        const coll = dbs.collection("quotes");
        const qry = { };
        const rst = await coll.deleteOne(qry);
        if (rst.deletedCount === 1) {
          res.end("One document deleted.");
        } else {
          res.end("No document was deleted.");
        }
      } finally {
        await cl.close();
      }
    }
