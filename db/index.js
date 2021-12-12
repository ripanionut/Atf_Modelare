const config = require("../config");

const mongoose = require("mongoose");

require("./models/portfolio")

exports.connect = () =>{

   return mongoose.connect(
        'mongodb+srv://ripanionut2:ripanionut@cluster1.aeufk.mongodb.net/portfolioAFT?retryWrites=true&w=majority',
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

