import { z } from "zod";

export const enumErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
    case z.ZodIssueCode.invalid_enum_value: {
      return { message: "This field is required" };
    }
  }

  return { message: ctx.defaultError };
};
