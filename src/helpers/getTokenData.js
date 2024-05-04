import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData = ( NextRequest) => {
    try {
        const token = NextRequest.cookies.get("token")?.value || "";
        if (!token) {
            throw new Error("Token not found");
        }
        const decodedToken = jwt.verify(token, "FHFOQFPFGDSGSHEPGOEHCMC");
        if (!decodedToken || !decodedToken.id) {
            throw new Error("Invalid token");
        }
        return decodedToken.id;
    } catch (error) {
        console.error("Error decoding token:", error.message);
        throw new Error(error.message);
    }
};
