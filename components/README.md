### Understanding `<Layout>` component

To start, I used Chakra UI to help me with the styled components. The library is based on styled component and they follow the Tailwind principles. Also, every component is based on Accessibility First! That's so cool, but why I used?

To be honest, I won't spend so much time dealing with media-queries. I mean, there is not time to make certain stuff and the library helps me a lot to solve that.

- When I read about `Flexbox` like first tool for layouts I thought in only one component to wrap my entire project.
- That's is how I wrap every layout component inside my `<Layout>`
- I keep a good semantic wrapping the `_app.js` inside into a `<Main>` component which inside it uses `<Layout as="main">`. So, every page that you render, it will keep inside `<main>` tag.

### Glosary: don't lose with `<Layout>` component.

- There are certain rules to follow to earn time: Here are some of those:
- `w === width`
- `h === height`
- `m === margin`
- `mb, mt, ml, mr === martin-top, bottom, left, right`
- `p === padding`
- `pb, pt, pl, pt === padding-top, bottom, left, right`
- `bg === background`

#### `sm` and `md` props:

- They are mediaqueries defined inside `theme.js`

is like to do:
- `media screen and @media(min-width: 300px){...}`
- `media screen and @media(min-width: 768px){...}`

So, you can see how much time I earned doing this.
