import mongoose from "mongoose";

const cached: {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
} = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI);

  cached.conn = await cached.promise;

  return cached.conn;
};
