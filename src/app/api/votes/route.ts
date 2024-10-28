import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { voteOption, contractAddress } = req.body
    try {
      // Interact with your deployed contract (assuming the Partisia API or SDK is available)
      const response = await axios.post("https://partisia-testnet.io/vote", {
        contractAddress,
        voteOption
      })
      res.status(200).json({ message: "Vote submitted successfully!" })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Failed to submit the vote." })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
