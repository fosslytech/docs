export interface IDocument {
  id: string;
  user_id: string;
  name: string;
  html: string;
  ext: string;
  password: string;
  created_at: string;
  updated_at;
}

export interface ISupabase {
  public: {
    Tables: {
      documents: {
        Row: IDocument; // The data expected to be returned from a "select" statement.

        Insert: {}; // The data expected passed to an "insert" statement.

        Update: {}; // The data expected passed to an "update" statement.
      };
    };
  };
}
