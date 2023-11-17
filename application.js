import fetch from 'node-fetch';

async function gistHandler(req, res) {
  const id = req.params.id;

  console.log('id', id);

  const gist = await fetch(
    `https://api.github.com/gists/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  );

  
  const gistContent = await gist.json();

  res.send(`Gist URL: ${gistContent.url}`);
}

export function setup(app) {
  app.get('/application/:id', gistHandler);
}