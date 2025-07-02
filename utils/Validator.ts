import { ObjectSchema } from "joi";

const validator = (scheme: ObjectSchema<any>, body: any) => {
  const { error } = scheme.validate(body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });

  if (error) {
    const { details } = error;
    const message = details.map((i: { message: any }) => i.message).join(",");
    return message;
  }

  return error;
};

export default validator;
