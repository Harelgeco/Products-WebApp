# Products Web Application
#### By HarelK

## Project Link: [products-web-app-rust.vercel.app](https://products-web-app-rust.vercel.app/)


In-order to deliver the project easily, i deployed it using Vercel.
For that, I used Next.js as the main framework, and Supabase as the database and backend service.
UI components by [shadnc/ui](https://ui.shadcn.com/).

## Main Technologies used
- Next.js & React
- Supabase
- Shadnc/ui
- SQL
- Vercel

  
The system includes:

### 1. Product View & Search Page

### 2. Product Insert Page


---

## Database Structure

SupaBase Table: `Products`

| ID | Name | Price |
|------|------|-------------|

## SQL Query Method:
The project requirements specified that any database could be used as long as the interaction is handled via SQL queries.
To fulfill this requirement I implemented PostgreSQL functions on the backend, and triggered it using the supabase client. 
Further Specification Linked - [fetching Data](https://supabase.com/docs/reference/javascript/select) & [Inserting Data](https://supabase.com/docs/reference/javascript/insert)


<details>
  <summary>Fetching Data</summary>

File Path: _app/page.tsx line 10_
```
  const { data } = await supabase.rpc("fn_get_all_products", {})
```
This line executes the predefined SQL function on supabase to fetch the products and stores the returned results in the data variable.
After setting up a function in supabase (named "fn_get_all_products") I can fetch the function return data calling this function.

This is the supabase function:
```
CREATE OR REPLACE FUNCTION fn_get_all_products()
RETURNS TABLE (id smallint, "Name" text, "Price" smallint) AS $$
  SELECT * FROM "Products";
$$ LANGUAGE sql;
```
</details>
<details>
  <summary>Inserting Data</summary>
  
  File Path: _app/Add_Products/page.tsx line 25_
  ```
    const { error: rpcError } = await supabase.rpc("secure_insert_product", {
      p_name: name.trim(),
      p_price: Number(price),
    })
```
This line triggers another SQL supabase funciton that retrieves data, rather than sending a raw query from the browser...
As another layer of security against SQL injection i used a pre-defined function(rpc) so the query logic is locked on the server.
Also the frontend never sees the table structure or the raw `select` statement.

And the Supabase function:
```
RETURNS void
LANGUAGE SQL
SECURITY DEFINER
AS $$
  INSERT INTO "Products" ("Name", "Price")
  VALUES (trim(p_name), p_price);
$$;
```

</details>


---
If you wish to run the application locally using Next.js, follow this steps:

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open in browser: `http://localhost:3000`

