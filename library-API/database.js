const { MongoClient } = require("mongodb")
const uri = 'mongodb+srv://cat:1234@cluster0.zjzc4hv.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)

module.exports = {
    client: client,
    connectDB : async () => {
        try {
          await client.connect()
          console.log('all good')
          return client
        } catch (error) {
          console.error(error)
        }
      }, 
      closeDBConnection : async () => {
        try {
          await client.close()
          console.log('is closed')
        } catch (error) {
          console.error(error)
        } 
      }
    
};
