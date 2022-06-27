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