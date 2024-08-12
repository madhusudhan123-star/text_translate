// import { connectToDB } from "@/components/database";
// import User from "@/components/user";

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email, message } = req.body;

//         try {
//             await connectToDB();

//             const newUser = new User({ email, review: message });
//             await newUser.save();

//             res.status(201).json({ message: "Review saved successfully" });
//         } catch (error) {
//             console.error("Error saving review:", error);
//             res.status(500).json({ error: "Failed to save review" });
//         }
//     } else {
//         res.status(405).json({ error: "Method not allowed" });
//     }
// }

import { connectToDB } from "@/components/database";
import User from "@/components/user";
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, message } = await request.json();

        await connectToDB();

        const newUser = new User({ email, review: message });
        await newUser.save();

        return NextResponse.json({ message: "Review saved successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error saving review:", error.message);
        return NextResponse.json({ error: error.message || "Failed to save review" }, { status: 500 });
    }
}