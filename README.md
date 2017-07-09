# underpants-cli [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

A simple CLI for [underpants](https://github.com/arzafran/underpants).

## Installation

```bash
npm install -g underpants-cli
```

## CLI commands

### init

```bash
underpants init <name>
```

Where name is the directory to create for the new project.

## Development

To validate ([ESLint](http://eslint.org/)) & build ([Babel](https://babeljs.io/)) the CLI run:

```bash
npm start
```

Inside the root directory run the CLI commands as you were installed it globally. Just remember to build the library first using `npm start` or `npm run build`.

## License
MIT © [Franco Arza](https://arzafran.co)

## Special mention

I wanted to mention that this development was contributed by [Matias](https://github.com/matiasbeckerle), thanks pal, this tool is great!

[travis-url]: https://travis-ci.org/arzafran/underpants-cli
[travis-image]: https://travis-ci.org/arzafran/underpants-cli.svg?branch=master
[depstat-url]: https://david-dm.org/arzafran/underpants-cli/?type=dev
[depstat-image]: https://david-dm.org/arzafran/underpants-cli/dev-status.svg
