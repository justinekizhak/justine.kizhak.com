const fs = require('fs');
const path = require('path');
const prism = require('prismjs');
const marked = require('marked');
const matter = require('gray-matter');
const formatDate = require('date-fns/format');
const readingTime = require('reading-time');

// Support JSX syntax highlighting
require('prismjs/components/prism-jsx.min');

const cwd = process.cwd();
const POSTS_DIR = path.join(cwd, 'content/blog');

const renderer = new marked.Renderer();

marked.setOptions({
    renderer
});

const posts = fs.readdirSync(POSTS_DIR)
    .filter(fileName => /\.md$/.test(fileName))
    .map(fileName => {
        const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
        const {
            data,
            content
        } = matter(fileMd);
        const {
            title,
            date,
            excerpt,
            tags
        } = data;

        const slug = fileName.split('.')[0];

        const html = marked(content);
        const readingStats = readingTime(content);
        const printReadingTime = readingStats.text;
        const printDate = formatDate(new Date(date), 'MMMM D, YYYY');

        return {
            title: title || slug,
            slug,
            html,
            date,
            excerpt,
            tags,
            printDate,
            printReadingTime,
        };
    });

posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
});

export default posts;
