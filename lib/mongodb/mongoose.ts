import mongoose from "mongoose";

let isConnected: boolean = false; // Track connection status

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.error("MONGODB_URL is not defined in environment variables");
    return;
  }

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Zone"
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
