export interface IDocument {
  id: string;
  title: string;
}

export interface ISupabase {
  public: {
    Tables: {
      docs: {
        Row: IDocument; // The data expected to be returned from a "select" statement.

        Insert: {}; // The data expected passed to an "insert" statement.

        Update: {}; // The data expected passed to an "update" statement.
      };
    };
  };
}
