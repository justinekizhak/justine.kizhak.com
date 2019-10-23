---
title: "Hello World \U0001F44B"
date: 2019-06-11T08:38:00.000Z
excerpt: Every blog starts with a single post. This is yours. Make it great.

---
This post intentionally left blank.

Write what you want.

<div class="text-blue-500">
Lorem ipsum dolor
</div>

**Hi** my name is _justine thomas kizhak_

> Some random code block

    import sirv from 'sirv';
    import polka from 'polka';
    import compression from 'compression';
    import * as sapper from '@sapper/server';
    
    import './tailwind.css';
    import './custom-classes.css';
    import './custom-elements.css';
    
    const { PORT, NODE_ENV } = process.env;
    const dev = NODE_ENV === 'development';
    
    polka() // You can also use Express
    	.use(
    		compression({ threshold: 0 }),
    		sirv('static', { dev }),
    		sapper.middleware()
    	)
    	.listen(PORT, err => {
    		if (err) console.log('error', err);
    	});
    