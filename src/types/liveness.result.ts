interface LivenessJobResult {
    job_complete: boolean;
    job_success: boolean;
    timestamp: string;
    result: {
        ConfidenceValue?: string;
        ResultCode?: string;
        ResultText?: string;
        ResultType?: string;
        IsFinalResult?: string;
        Actions?: {
            Selfie_Check?: string;
            Liveness_Check?: string;
            Register_Selfie?: string;
        };
    };
}