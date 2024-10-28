"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"

type Results = {
  votes_for: number
  votes_option_a: number
  votes_option_b: number
  passed: boolean
}

const ResultsPage: React.FC = () => {
  const [results, setResults] = useState<Results>()

  const fetchResults = async () => {
    try {
      const response = await axios.get(`/api/results`)
      setResults(response.data)
    } catch (error) {
      console.error("Error fetching results:", error)
    }
  }

  useEffect(() => {
    fetchResults()
  }, [])

  if (!results) return <p>Loading results...</p>

  return (
    <div>
      <h1>Voting Results</h1>
      <p>Votes For: {results.votes_for}</p>
      <p>Option A: {results.votes_option_a}</p>
      <p>Option B: {results.votes_option_b}</p>
      <p>Passed: {results.passed ? "Yes" : "No"}</p>
    </div>
  )
}

export default ResultsPage
