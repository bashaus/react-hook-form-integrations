import { z } from "zod";

export const requiredErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_literal: {
      return { message: "This field is required" };
    }
  }

  return { message: ctx.defaultError };
};
