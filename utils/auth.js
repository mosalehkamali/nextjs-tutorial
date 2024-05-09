import { sign, verify } from "jsonwebtoken";

export const generateToken = (data) => {
  const token = sign(data, process.env.privateKey, {
    algorithm: "HS256",
    expiresIn: 60 * 60 * 24,
  });
  return token;
};

export const verifyToken =(data)=>{
    const payLoad= verify(data,process.env.privateKey)
    return payLoad;
}
