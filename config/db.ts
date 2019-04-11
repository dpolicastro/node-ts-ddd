import mongoose from 'mongoose';
import { database as dbConfig } from './environment';
mongoose.Promise = global.Promise;

const db = {
  connect: () => {
    console.log('Connecting to Database...')
    const options = { useNewUrlParser: true };
    mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DATABASE}`, options)
      .then(() => console.log(`Connected to MongoDB at ${dbConfig.HOST}`))
      .catch(error => console.log('Error connecting to database:', error))
  }
}

export default db;
