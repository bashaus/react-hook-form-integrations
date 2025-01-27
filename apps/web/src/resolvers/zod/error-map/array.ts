import { z } from "zod";

export const arrayErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
    case z.ZodIssueCode.too_small: {
      return { message: "This field is required" };
    }
  }

  return { message: ctx.defaultError };
};
