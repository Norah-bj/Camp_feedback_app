import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/user"

export const login = (req: Request, res: Response) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) return res.status(401).json({ message: info?.message || "Unauthorised" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.json({
      status: 200,
      data: token,
      message: "Logged in successfully"
    });
  })(req, res);
};

export const getUserProfile = (req: Request, res: Response) => {
  const user = req.user as typeof User;
  res.json({ name: user.name });
};
