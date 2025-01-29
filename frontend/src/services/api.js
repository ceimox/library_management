import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:3000/api"

// Base fetch function
const fetchBooks = async () => {
  const response = await fetch(`${API_URL}/books`)
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}

// React Query hook
export const useFetchBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  })
}
