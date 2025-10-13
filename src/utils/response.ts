import { Response } from "express";

export default {
  success(res: Response, data: any, message: string) {
    res.status(200).json({
      meta: {
        status: 200,
        message,
      },
      data,
    });
  },

  error(res: Response, error: unknown, message: string) {
    // Response error dari mongoDB
    if ((error as any)?.code) {
      const _err = error as any;

      return res.status(500).json({
        meta: {
          status: 500,
          message: _err?.errorResponse?.errmsg,
        },
        data: _err,
      });
    }

    // Response error default
    res.status(500).json({
      meta: {
        status: 500,
        message,
      },
      data: error,
    });
  },

  notFound(res: Response, message: string = "not found") {
    res.status(404).json({
      meta: {
        status: 404,
        message,
      },
      data: null,
    });
  },

  unauthorized(res: Response, message: string = "unauthorized") {
    res.status(403).json({
      meta: {
        status: 403,
        message,
      },
      data: null,
    });
  },
};
