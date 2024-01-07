/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **users**
   * - Table in database
   */
  export namespace users {
    export type Table = 'users';
    export interface Selectable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id: number;
      /**
      * **users.username**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      username: string;
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password: string;
      /**
      * **users.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at: Date | null;
      /**
      * **users.role**
      * - `text` in database
      * - `NOT NULL`, default: `'player'::text`
      */
      role: string;
      /**
      * **users.total_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      total_matches: number | null;
      /**
      * **users.won_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      won_matches: number | null;
      /**
      * **users.credits**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      credits: number | null;
    }
    export interface JSONSelectable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id: number;
      /**
      * **users.username**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      username: string;
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password: string;
      /**
      * **users.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at: db.DateString | null;
      /**
      * **users.role**
      * - `text` in database
      * - `NOT NULL`, default: `'player'::text`
      */
      role: string;
      /**
      * **users.total_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      total_matches: number | null;
      /**
      * **users.won_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      won_matches: number | null;
      /**
      * **users.credits**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      credits: number | null;
    }
    export interface Whereable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.username**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      username?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.role**
      * - `text` in database
      * - `NOT NULL`, default: `'player'::text`
      */
      role?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.total_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      total_matches?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.won_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      won_matches?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.credits**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      credits?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **users.username**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      username: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment;
      /**
      * **users.role**
      * - `text` in database
      * - `NOT NULL`, default: `'player'::text`
      */
      role?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
      * **users.total_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      total_matches?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **users.won_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      won_matches?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **users.credits**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      credits?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **users.username**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      username?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **users.role**
      * - `text` in database
      * - `NOT NULL`, default: `'player'::text`
      */
      role?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
      * **users.total_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      total_matches?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **users.won_matches**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      won_matches?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **users.credits**
      * - `int4` in database
      * - Nullable, default: `0`
      */
      credits?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'users_email_key' | 'users_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = users.Table;
    export type Selectable = users.Selectable;
    export type JSONSelectable = users.JSONSelectable;
    export type Whereable = users.Whereable;
    export type Insertable = users.Insertable;
    export type Updatable = users.Updatable;
    export type UniqueIndex = users.UniqueIndex;
    export type Column = users.Column;
  
    export type AllBaseTables = [users.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [users.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "users": users.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "users": users.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "users": users.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "users": users.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "users": users.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "users": users.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "users": users.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "users": users.SQL;
  }[T];

}