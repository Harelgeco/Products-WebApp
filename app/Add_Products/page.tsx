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

    const { error } = await supabase.from("Products").insert([
      {
        Name: name.trim(),
        Price: Number(price),
      },
    ])

    if (error) {
      if (error.message.includes("unique")) {
        setError("Product already exists")
      } else {
        setError(error.message)
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