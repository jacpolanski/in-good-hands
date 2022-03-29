import Joi from "joi";

export const schemaContact = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required().trim(true).messages({
    "string.base": `Imię powinno być jednym wyrazem`,
    "string.empty": `Imię nie może być puste`,
    "string.min": `Imię musi zawierać minimum {#limit} znaków`,
    "string.max": `Imię musi zawierać maksimum {#limit} znaków`,
    "any.required": `Imię jest polem wymaganym`,
  }),
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
      "any.required": `Email jest polem wymaganym`,
    }),
  message: Joi.string().min(120).required().trim(true).messages({
    "string.min": `Wiadomość powinna zawierać minimum {#limit} znaków`,
    "string.empty": `Wiadomość nie może być pusta`,
    "any.required": `Wiadomość jest polem wymaganym`,
  }),
});
