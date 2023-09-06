'use client'
import { useState, useEffect } from 'react'
export default function Home() {
    type Data = {
      id: number
      name: string
      model: string
      country: number
    }
  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {

    const fetchData = async () => {
  try {
    setLoading(true)
    const res = await fetch('https://script.google.com/macros/s/AKfycbxhgwuAVZLAAmCgnANRGJGj5Rncmk0HE9vM8Ir8jCd6floARzqv3rXcI24uT4_LNoVs7Qexec')
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    const { data } = await res.json()
    setData( data )
    setLoading(false)
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Car List</h1>
      <table className="table-auto border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Model</th>
            <th className="border border-gray-800 px-4 py-2">Country</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="text-center">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-800 px-4 py-2">{item.id}</td>
              <td className="border border-gray-800 px-4 py-2">{item.name}</td>
              <td className="border border-gray-800 px-4 py-2">{item.model}</td>
              <td className="border border-gray-800 px-4 py-2">{item.country}</td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </main>
  )
}
