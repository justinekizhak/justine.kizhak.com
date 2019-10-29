import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { downloadRandomFromCollection } from "./imageDownload.js";

import './tailwind.css';
import './custom-classes.css';
import './base.css';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const collection_id = '437316';

downloadRandomFromCollection(collection_id, "static/bg.jpg", () => {
    console.log("Done");
});

polka() // You can also use Express
  .use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
.listen(PORT, err => {
    if (err) console.log('error', err);
});
