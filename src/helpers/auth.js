import jwt from "jsonwebtoken";

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "FHFOQFPFGDSGSHEPGOEHCMC";
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "QWMZPOFHDGFHFOASHCPGEHCREFRESH";

export const ACCESS_TOKEN_EXPIRY = "15m";
export const REFRESH_TOKEN_EXPIRY = "60m";
export const REFRESH_TOKEN_MAX_AGE_SECONDS = 60 * 60;

export const generateAccessToken = (payload) =>
  jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });

export const generateRefreshToken = (payload) =>
  jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });

export const verifyRefreshToken = (token) => jwt.verify(token, REFRESH_TOKEN_SECRET);

const getBearerToken = (request) => {
  const header = request.headers.get("authorization") || "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    const error = new Error("Missing bearer token");
    error.code = "NO_TOKEN";
    throw error;
  }
  return token;
};

export const getTokenData = (request) => {
  const token = getBearerToken(request);
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    if (!decoded || !decoded.id) {
      throw new Error("Invalid token");
    }
    return decoded.id;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      const expiredError = new Error("Access token expired");
      expiredError.code = "TOKEN_EXPIRED";
      throw expiredError;
    }
    const invalidError = new Error("Invalid token");
    invalidError.code = "TOKEN_INVALID";
    throw invalidError;
  }
};
