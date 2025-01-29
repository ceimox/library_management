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

// Sign in function
const signIn = async (credentials) => {
  const response = await fetch(`${API_URL}/admin/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Failed to sign in")
  }

  return response.json()
}

// React Query hooks
export const useFetchBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  })
}

export const useSignIn = (options = {}) => {
  return useMutation({
    mutationFn: signIn,
    ...options,
  })
}
