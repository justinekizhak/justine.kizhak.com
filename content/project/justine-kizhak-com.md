---
title: justine.kizhak.com -- Part 1
date: 2019-11-11T00:11
excerpt: Everything about "behind the making of" this site

---
If you are reading this then you probably are reading on my website, if so then _Welcome to my website._

In this article, I will try to describe my experience and explain how I build this site from scratch and why I made some of the decisions so it might benefit you in building your own.

First of all, I decided to make my site as a portfolio cum blog from the beginning. 

This is the first question you have to answer when you want a site like this for yourself.

After that, you have to decide what kind of stack you want to use to build. Do you have any experience in making a website? Are you interested in learning it? Do you wanna use a template or build from scratch?

When it came for me to answer these questions, I didn't have much experience with frontend frameworks, but I was interested in learning and gained an overview about most of the frontend technologies and later settled upon those which made sense to me.

A quick list of all the technologies used in what you are looking at

* HTML5/ CSS3/ JS
* Svelte and Sapper
* TailwindCSS

Design tool

* Figma

And the dev dependencies working behind the scene

* Hosted at Netlify
* Forestry as CMS
* Markdown files as the content source
* Unsplash API for a daily new image for the landing page
* Getform for the contact form

Text editor

* SpacEmacs

A git-based repository hosted on

* Gitlab.com

The best part about this site is its performance, not only the site is _static_ but it's a SPA where the content on subsequent navigation is basically a _JSON_ file with contents being rendered as the webpage.

So navigating between pages is a breeze. With just the minimum required content being transferred to the client using AJAX means no browser loading and clean and simply animation between page transitions.