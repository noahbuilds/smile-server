import { WebApi } from "smile-identity-core";
import { v4 } from "uuid";

import {
  SMILE_PARTNER_ID,
  SMILE_API_KEY,
  SMILE_ENVIRONMENT,
} from "../config/smile.config";

export const submitLivenessJob = async (userId: string, images: any) => {
  const job_id = `job-${Date.now()}`;

  const partner_params = {
    user_id: `user-${v4()}`,
    job_id,
    job_type: 4, // Liveness only
  };

  const options = { return_job_status: true };
  const smile = new WebApi(
    SMILE_PARTNER_ID,
    "",
    SMILE_API_KEY,
    SMILE_ENVIRONMENT === "production" ? 1 : 0
  );

  return smile.submit_job(partner_params, images, {}, options);
};
