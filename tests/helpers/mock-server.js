import { setupServer } from 'msw/node'
import { http, bypass, HttpResponse, passthrough } from 'msw'

export const handlers = [

  //All requests are intercepted including request to the express application being tested via supertest.
  http.get('*/application/*', () => {
    return passthrough();
  }),

  http.get('https://api.github.com/gists/bd23a450dfdc2ed1e10092bce0887cf9', async ({ request }) => {
    // Fetch the original response from the GitHub API.
    
    // This URL is valid as passthrough does work.
    //return passthrough();

    const bypassedRequest = await fetch(bypass(request));

    console.log('bypassedRequest', bypassedRequest);
    
    const gist = await bypassedRequest.json();
 
    // Respond with a mocked response that combines
    // the actual and mock data.
    return HttpResponse.json({
      url: gist.url + "--bypass-modified"
    })
  }),

  http.get('https://api.github.com/gists/afddf909e49961bd46cbbd80d9c12905', async () => {
    return HttpResponse.json({
      url: "mocked-url"
    })
  }),

  http.get('https://api.github.com/gists/0b13c4ed2a8ba0a738edce592c283b44', async () => {
    return passthrough();
  }),
]

const mockServer = setupServer(...handlers);

export default mockServer;