import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  //   console.error(err.response);
  res
    .status(err.status ? err.status : 500)
    .json({
      message: err.message || "Internal Server Error",
      errorInfo: err?.response?.data || null,
    });
}
