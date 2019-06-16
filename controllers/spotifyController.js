// import axios from "axios"
var axios = require('axios');
const spotifyController = {
    
index: function (req, res){
console.log("Route hit!")
axios.get("http://www.dnd5eapi.co/api/spells/").then((res)=>{
console.log(res.data)
res.send("hi")
})

}
};








module.exports = spotifyController;
