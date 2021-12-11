const config = require("../config");

const mongoose = require("mongoose");

require("./models/portfolio")

exports.connect = () =>{

   return mongoose.connect(
        config.DB_URI_AFT,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          // useCreateIndex: true
         // useFindAndModify: false,
        },
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Conected to db");
          }
        }
      );
}

