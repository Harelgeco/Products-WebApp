"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Product = {
  id: number
  Name: string
  Price: number
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  //להוסיף שח
 { 
  accessorKey: "Price",
  header: "Price",
  cell: ({ row }) => {
    const price = row.getValue("Price")
    return `₪${price}`
  },
}
]