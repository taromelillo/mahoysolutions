import type { APIRoute } from "astro";

// import {Resend} from'resend';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ success: true }));
};
