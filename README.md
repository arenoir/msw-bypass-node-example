# MSW BYPASS NODE EXAMPLE

This repository demonstrates using MSW to mock requests.  I am having issues combining MSW with [supertest](https://www.npmjs.com/package/supertest).

The issue is the bypass function errors out with the following.

```
FetchError: request to https://api.github.com/gists/bd23a450dfdc2ed1e10092bce0887cf9 failed, reason: bypass(...).then is not a function
 ❯ _NodeClientRequest.<anonymous> node_modules/node-fetch/src/index.js:108:11
 ❯ _NodeClientRequest.emit node:events:514:28
 ❯ _NodeClientRequest.emit node_modules/@mswjs/interceptors/lib/node/chunk-Z26AUTER.mjs:412:18
 ❯ node_modules/@mswjs/interceptors/lib/node/chunk-Z26AUTER.mjs:315:14
 ❯ processTicksAndRejections node:internal/process/task_queues:95:5
```

```
Serialized Error: { errno: undefined, code: undefined, erroredSysCall: undefined }
This error originated in "server.test.js" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "expect gist bd23a450dfdc2ed1e10092bce0887cf9 to return bypassed modified request". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- This was the last recorded test before the error was thrown, if error originated after test finished its execution.
```