import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function connectMongoDB() {
  try {
    if (global.mongoose && global.mongoose.conn) {
      console.log("Connected from previous.");
      return global.mongoose.conn;
    } else {
      const conString = process.env.MONGODB_URI;
      if (!conString) {
        throw new Error(
          "Please define the MONGODB_URI environment variable inside .env.local"
        );
      }

      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      console.log("Connected to MongoDB...");
      return await promise;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed.");
  }
}

export const disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};
