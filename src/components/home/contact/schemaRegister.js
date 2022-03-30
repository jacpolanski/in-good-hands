import Joi from "joi";

export const schemaRegister = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    })
    .required()
    .trim(true)
    .messages({
      "string.email": `Proszę wpisać poprawny adres email`,
      "string.empty": `Email nie może być pusty`,
      "any.required": `Podaj email`,
    }),

  password: Joi.string().min(6).required().messages({
    "string.min": `Hasło powinno zawierać minimum {#limit} znaków`,
    "string.empty": `Hasło nie może być puste`,
    "any.required": `Podaj hasło`,
  }),

  passwordRepeat: Joi.string()
    .min(6)
    .equal(Joi.ref("password"))
    .required()
    .messages({
      "string.min": `Hasło powinno zawierać minimum {#limit} znaków`,
      "string.empty": `Hasło nie może być puste`,
      "any.required": `Potwierdź hasło`,
      "any.only": `Hasła muszą być takie same`,
    }),
});
