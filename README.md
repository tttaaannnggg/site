# Site

This is gonna be my personal website.

## Plan
Right now, this exists as a node server with a React frontend, but I'd like to move it to an S3 bucket + lambda functions to serve API functionality.

## Development

Here are the commands we've got in our package.json:
* `npm start` - runs node against the server and runs on port 3000
* `npm run build` - bundles our SCSS, JS, and JSX with the requisite node modules and outputs a file at /dist
* `npm run dev` - makes and serves an inmemory bundle with live reloading, and a proxy to `/api`

## troubleshooting
If you catch errors, `npm rebuild` on each of the modules that are erroring out.
