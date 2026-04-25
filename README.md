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
To fulfill this requirement I implemented PostgreSQL functions (RPC) on the backend, ensuring that all data operations are executed through native SQL. 

<details>
  <summary>For Fetching Data</summary>

File Path: _app/page.tsx line 10_
```
  const { data } = await supabase.rpc("fn_get_all_products", {})
```
</details>



---

## Security

The project uses the Supabase client in a controlled way.

Additionally:
- Database access is handled through secure API calls
- Row Level Security (RLS) can be enabled in Supabase if required



