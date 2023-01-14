const database = require('../database.js')
const collection = database.client.db('library').collection('readed_books')

module.exports = {
    getAllBooks: async (req, res) => {
        try{
            database.connectDB()
            let allReadedBooks = await collection.find().toArray()
            
            res.status(200).json({
                status: 'success',
                results: allReadedBooks.length,
                data:{
                    allReadedBooks
                } 
            })
        } catch (err) {
            res.status(404).json({
                status: 'error',
                message: err
            })
        } finally {
            await database.closeDBConnection()
        }
            
    }

}