import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectMongoDB } from "../../../../public/lib/mongodb";
import User from "../../../../public/models/user";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { name, email, password } = await req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await connectMongoDB();
      await User.create({ name, email, password: hashedPassword });
  
      return res.status(201).json({ message: "User registered." });
    } catch (error) {
      console.error("Error registering user:", error);
      return res.status(500).json({ message: "An error occurred while registering the user." });
    }
}
