// import axios from "axios"
var axios = require('axios');

const countController = {
    index: function (req, res) {
        console.log("Hello")
        axios.get('https://api.countapi.xyz/hit/guarded-lake-14667.herokuapp.com/visits?').then((response) => {
            console.log(response.data)
           
            res.send(response.data)
        })
        // Model.find().then(Count => {
        //   res.send(Count)
        // });
    },
};
// index: function (req, res){
// console.log("Route hit!")
// axios.get("http://www.dnd5eapi.co/api/spells/").then((res)=>{
// console.log(res.data)
// res.send("hi")
// })

// }

module.exports = countController;