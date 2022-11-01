
// @deno-types="https://deno.land/x/servest@v1.3.4/types/react/index.d.ts"
import React from "https://deno.land/x/servest@v1.3.3/types/react/index.d.ts";
// @deno-types="https://deno.land/x/servest@v1.3.4/types/react-dom/server/index.d.ts"
import ReactDOMserver from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.4/mod.ts";

const app = createApp();

app.handle('/', async (req: { respond: (arg0: { status: number; headers: Headers; body: any; }) => any; }) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      contentType: 'text/html; charset=UTF-8'
    }),
    body: ReactDOMserver.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Servest</title>
        </head>
        <body>
          <h1 style={{ color: 'blue' }}>Blue</h1>
          <h2 style={{ color: 'brown' }}>Brown</h2>
          <h2 style={{ color: 'purple' }}>Purple</h2>
        </body>
      </html>
    )
  });
});

app.listen({ port: 8080 });