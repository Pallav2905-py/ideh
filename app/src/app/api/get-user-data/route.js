import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
    try {
        const token = req.cookies.get("token")?.value; // Get the token from cookies

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token

        if (!decoded || !decoded.id) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        return NextResponse.json({ userId: decoded.id }, {token : token});
    } catch (error) {
        console.error("Error validating token:", error);
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
}