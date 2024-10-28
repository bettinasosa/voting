"use client"
import React, { useState } from "react"
import axios from "axios"

const VotePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [message, setMessage] = useState<string>("")

  const handleVote = async () => {
    if (!selectedOption) {
      setMessage("Please select an option before voting.")
      return
    }
    try {
      // TODO: Replace with actual API endpoint
      const response = await axios.post("/api/vote", {
        voteOption: selectedOption,
        contractAddress: "<your-contract-address>"
      })
      setMessage("Vote successfully submitted!")
    } catch (error) {
      console.error(error)
      setMessage("Failed to submit the vote.")
    }
  }

  return (
    <div>
      <h1>Cast Your Vote</h1>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={() => setSelectedOption("Yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="OptionA"
            checked={selectedOption === "OptionA"}
            onChange={() => setSelectedOption("OptionA")}
          />
          Option A
        </label>
        <label>
          <input
            type="radio"
            value="OptionB"
            checked={selectedOption === "OptionB"}
            onChange={() => setSelectedOption("OptionB")}
          />
          Option B
        </label>
      </div>
      <button onClick={handleVote}>Submit Vote</button>
      <p>{message}</p>
    </div>
  )
}

export default VotePage
