import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(
        `https://partisia-testnet.io/contract/03b932dcc59d1f20dc2eae6c4370686afb72d45d01/results`
      )
      res.status(200).json(response.data)
    } catch (error) {
      console.error("Error fetching results:", error)
      res.status(500).json({ message: "Failed to fetch results." })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
