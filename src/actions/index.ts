import { defineAction } from "astro:actions";
import { EMAIL_PORT, PASSKEY, USER } from "astro:env/server";
import { z } from "astro:schema";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: USER,
    pass: PASSKEY,
  },
});

export const server = {
  contactForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      tel: z.number().min(8),
      consult: z.string().min(4),
    }),
    handler: async (formData) => {
      console.log({ ...formData });
      const response = transporter
        .sendMail({
          to: "info@mahoysolutions.com",
          subject: "Email from Client",
          html: `
        <h1>Mensaje de Cliente</h1>
        <hr/>
        <br/>

        <p><b>Nombre:</b> ${formData.name.toString()}</p>   
        <br/>

        <p><b>Email:</b> ${formData.email.toString()}</p>
        <br/>

        <p><b>Tel:</b> ${formData.tel.toString()}</p>
        <br/>

        <p><b>Conulta:</b> ${formData.consult.toString()}</p>
        <br/>
        
        `,
        })
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((err) => console.log(err));

      return response;
    },
  }),
};
