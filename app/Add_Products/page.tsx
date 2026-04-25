"use client"

import { useState, FormEvent } from "react"
import { supabase } from "@/lib/supabase"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!name) return setError("Name is required")
    if (Number(price) < 0) return setError("Price must be positive")

    const sqlQuery = `INSERT INTO "Products" ("Name", "Price") VALUES ('${name.trim().replace(/'/g, "''")}', ${Number(price)})`

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ query: sqlQuery }),
      }
    )

    const errorMsg = response.ok ? null : await response.text()

    if (errorMsg) {
      if (errorMsg.includes("unique") || errorMsg.includes("duplicate")) {
        setError("Product already exists")
      } else {
        setError(errorMsg)
      }
    } else {
      setName("")
      setPrice("")
      setSuccess("Product added successfully!")
    }
  }

  return (
    <div className="container mx-auto py-10 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <Input
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <Button type="submit" className="w-full">
              Add Product
            </Button>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

          </form>
        </CardContent>
      </Card>
    </div>
  )
}