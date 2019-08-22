# talmbout boilerplate

I'm figuring out what I like in terms of fullstack react + sass / node + express projects. This feels like a sensible start.


## A few things.

Here are the commands we've got in our package.json:
* `npm start` - runs node against the server and runs on port 3000
* `npm run build` - bundles our SCSS, JS, and JSX with the requisite node modules and outputs a file at /dist
* `npm run dev` - makes and serves an inmemory bundle with live reloading, and a proxy to `/api`. If you're serving anything besides the react app from the backend, serve it from `/api/*`

## troubleshooting
If you catch errors, `npm rebuild` on each of the modules that are erroring out.
