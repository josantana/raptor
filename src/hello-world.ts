import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';

const port = 3000;

const handler = (req: Request): Response => {
  console.log('Method', req.method);
  const url = new URL(req.url);
  console.log('Path', url.pathname);
  console.log('Params', url.searchParams);
  console.log('Header', req.headers);
  if (req.body) console.log('Body', req.body);
  return new Response('Hello World', { status: 200 });
}

await serve(handler, { port });