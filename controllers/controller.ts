import { getDatabase } from "@/database/db";
import {
  DEFAULT_DB_QUERY,
  DELETE_DB_QUERY,
  GET_DB_QUERY,
  GET_ONE_DB_QUERY,
  INSERT_DB_QUERY,
  SHUFFLE_DB_QUERY,
  UPDATE_DB_QUERY,
} from "@/constant";

// Helper function to safely call getDatabase
const getDbAsync = async () => {
  const db = await getDatabase();
  if (!db) {
    throw new Error("Database is not available");
  }
  return db;
};

export const getList = async (
  query?: string,
  isShuffledEnabled?: boolean,
  searchParam?: string,
) => {
  const db = await getDbAsync();
  let customQuery = DEFAULT_DB_QUERY;

  if (searchParam) {
    customQuery += ` WHERE word LIKE '%${searchParam}%' `;
    return await db.getAllAsync(customQuery);
  }

  if (query) {
    customQuery += query;
    return await db.getAllAsync(customQuery);
  } else if (isShuffledEnabled) {
    return await db.getAllAsync(SHUFFLE_DB_QUERY);
  } else {
    return await db.getAllAsync(GET_DB_QUERY);
  }
};

export const getDataById = async (id: any) => {
  const db = await getDbAsync();
  return await db.getFirstAsync(GET_ONE_DB_QUERY, [id]);
};

export const createData = async ({
  word,
  description,
}: {
  word: string;
  description?: string;
}) => {
  const db = await getDbAsync();
  await db.runAsync(INSERT_DB_QUERY, [word, description?.trim() || null]);
};

export const updateData = async ({
  id,
  word,
  description,
}: {
  id: string;
  word: string;
  description?: string;
}) => {
  const db = await getDbAsync();
  await db.runAsync(UPDATE_DB_QUERY, [word, description?.trim() || null, id]);
};

export const deleteData = async (id: any) => {
  const db = await getDbAsync();
  await db.runAsync(DELETE_DB_QUERY, [id]);
};

export const shuffleData = async () => {
  const db = await getDbAsync();
  return await db.getAllAsync(SHUFFLE_DB_QUERY);
};
