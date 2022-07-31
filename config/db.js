import mongoose from 'mongoose';

// create database connection
const connectDB = async () => {
  try {
    // database name i.e addisSoftware-employee
    const databaseName = 'AddisSoftware-employee';
    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false // `findOneAndUpdate()` and `findOneAndDelete()` DeprecationWarnin
    });
    console.log(`Database Connected : ${conn.connection.host}`);

  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

// Export the modules
export default connectDB;