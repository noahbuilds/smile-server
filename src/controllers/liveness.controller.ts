import { Request, Response, NextFunction } from "express";
import { submitLivenessJob } from "../services/smile.service";

export const handleLiveness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { images, user_id } = req.body;
    const result = (await submitLivenessJob(
      user_id,
      images
    )) as LivenessJobResult;

    const {
      job_complete,
      job_success,
      timestamp,
      result: {
        ConfidenceValue: confidence,
        ResultCode: result_code,
        ResultText: result_text,
        ResultType: result_type,
        IsFinalResult: is_final_result,
        Actions: {
          Selfie_Check: selfie_check,
          Liveness_Check: liveness_check,
          Register_Selfie: register_selfie,
        } = {},
      } = {},
    } = result;

    res.json({
      job_complete,
      job_success,
      timestamp,
      confidence,
      selfie_check,
      liveness_check,
      register_selfie,
      result_code,
      result_text,
      result_type,
      is_final_result,
    });
  } catch (error) {
    next(error);
  }
};
