import { Platform } from "react-native";
import { INIT_DB_QUERY } from "@/constant";

// Declare SQLite only once, conditionally for non-web environments.
let SQLite: typeof import("expo-sqlite") | undefined;

if (Platform.OS !== "web") {
  SQLite = require("expo-sqlite"); // Only import expo-sqlite on mobile
}

const initDB = async () => {
  if (!SQLite) {
    console.log("expo-sqlite is not available in the web environment.");
    return null; // Return null if the module is not available (on the web)
  }

  const db = await SQLite.openDatabaseAsync("app.db", {
    useNewConnection: true,
  });
  await db.execAsync(INIT_DB_QUERY);

  return db;
};

let dbPromise: Promise<SQLite.SQLiteDatabase | null> | null = null;

export const getDatabase = async () => {
  if (!dbPromise) {
    dbPromise = initDB();
  }
  return dbPromise;
};
