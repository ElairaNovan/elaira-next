import { Resend } from "resend";

import { buildPublicationEmail } from "./email-template";


export const resend = new Resend(process.env.RESEND_API_KEY);




