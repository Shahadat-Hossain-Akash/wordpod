export const INIT_DB_QUERY = `
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS words (
      id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
      word TEXT NOT NULL,
      description TEXT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_words_word ON words(word);`;
export const DEFAULT_DB_QUERY = `SELECT *
                                 FROM words `;
export const GET_DB_QUERY = `SELECT *
                             FROM words
                             ORDER BY created_at DESC`;
export const GET_ONE_DB_QUERY = "SELECT * FROM words WHERE id=?";
export const INSERT_DB_QUERY = `INSERT INTO words (word, description)
                                VALUES (?, ?)`;
export const UPDATE_DB_QUERY = `UPDATE words
                                SET word=?,
                                    description=?
                                where id = ?`;
export const DELETE_DB_QUERY = `DELETE
                                FROM words
                                where id = ?`;
export const SHUFFLE_DB_QUERY = `SELECT *
                                 from words
                                 ORDER BY RANDOM()`;
export const SEARCH_DB_QUERY = `
    SELECT *
    FROM words
    WHERE word LIKE ?
    ORDER BY word ASC
`;
