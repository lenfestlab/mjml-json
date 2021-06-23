# MJML JSON

> Type-safe helpers for MJML's JSON api.

[MJML](https://documentation.mjml.io/) markets itself as "a markup language
designed to reduce the pain of coding a responsive email."

It's more than a markup language, though - its main interface is a function that
accepts data describing your email and returns the corresponding email HTML.

```ts
const html = mjml(/* your email spec */)
```

It accepts two different data types, either a string of MJML's custom markup or [JSON data with the same shape and properties](https://documentation.mjml.io/#using-mjml-in-json).

This library is for those who prefer data to markup, perhaps to take advantage
of JSON's ubiquitous tooling for linting, formatting, debugging, etc.
It provides type-safe helper functions to generate MJML-compatible JSON.

Instead of writing your own code to generate this...

```ts
{
    tagName: 'mjml',
    attributes: {},
    children: [{
        tagName: 'mj-body',
        attributes: {},
        children: [{
            tagName: 'mj-section',
            attributes: {},
            children: [{
                tagName: 'mj-column',
                attributes: {},
                children: [{
                    tagName: 'mj-image',
                    attributes: {
                        'width': '100px',
                        'src': '/assets/img/logo-small.png'
                    }
                },
                {
                    tagName: 'mj-divider',
                    attributes: {
                        'border-color' : '#F46E43'
                    }
                },
                {
                    tagName: 'mj-text',
                    attributes: {
                        'font-size': '20px',
                        'color': '#F45E43',
                    },
                    content: 'Hello World'
                }]
            }]
        }]
    }]
}
```

...just use `mjml-json`

```ts
import { mjml, body, section, column, image, divider, text } from "mjml-json"

mjml([
  body([
    section([
      column([
        image({ width: "100px", src: "/assets/img/logo-small.png" }),
        divider({ borderColor: "#F46E43" }),
        text({ fontSize: '20px', color: '#F45E43' }, 'Hello World')
      ])
    ])
  ])
])
```

Component property names are camel-cased for compatibility with popular
["CSS-in-JS"](https://github.com/MicheleBertoli/css-in-js) libraries like
[Typestyle](https://github.com/typestyle/typestyle).
