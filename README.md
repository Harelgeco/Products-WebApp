# Products Web Application
### By HarelK

In-order to deliver the project easily, i deployed it using Vercel.
For that, I used Next.js as the main framework, and Supabase as the database and backend service.
UI components by [https://ui.shadcn.com/](shadnc/ui)

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

## SQL Method
The project requirements specified that any database could be used as long as the interaction is handled via SQL queries.
To fulfill this requirement I implemented PostgreSQL functions on the backend, and triggered it using the supabase client. 
Further Specification Linked - [https://supabase.com/docs/reference/javascript/select](Fetching) & [https://supabase.com/docs/reference/javascript/insert](Inserting)


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
  
</details>



---

## Security

The project uses the Supabase client in a controlled way.

Additionally:
- Database access is handled through secure API calls
- Row Level Security (RLS) can be enabled in Supabase if required



