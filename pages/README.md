## The Pages

I take the pages like 'the combination' between logic and layout. There, I used my custom hooks for logic and styled-componentes for layout.
In first place I had a lot of logic and layout inside tecnologia and login's pages. What I did:
- All the logic passed to custom hooks like `useSubmit` or `useFetch`
- I keep the layout components as small as possible was. That is the first React rule.

Beyond of this, in the rest of the pages, I render just one component like `<HomePage />` inside the `index.js`. Why?
- Components' folders allows me to keep separate the layout in small parts. I don't need to acumulate it into my `index.js`, I need to use those small sparts to build my entire component. It's more readable.
- So, while I keep the logic inside my custom hooks, I keep the layout and only the layout components inside my `components` folder.
