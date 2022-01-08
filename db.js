const mongoClient=require("mongodb").MongoClient

mongoClient.connect("mongodb://18.231.121.204:27017",{useUnifiedTopology:true}
,(error,connection)=>{
    if(error) return console.log(error)
    global.connection=connection.db("aws")
    console.log("mongodb connected")

});

module.exports={}
