import { supabase } from "@/lib/supabase"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = "force-dynamic"

export default async function Page() {
  const { data } = await supabase.rpc("fn_get_all_products", {})

  return (
    <div className="container mx-auto py-10">

      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns} data={data || []} />
        </CardContent>
      </Card>

    </div>
  )
}