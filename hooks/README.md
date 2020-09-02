## The main logic is here!

- `useFetch` returns a object to fetch data inside my `useEffect` which is in `TechsContext`
- `useSubmit` returns the logic of login. when the user press de login button, magic things happens.
- `useLocalStorage` has the logic to set the user into the LocalStorage.

#### The issue:
I have some issues to handle localStorage sessión. I mean, it works. Really it does what it needs to do, but at some point, the user stored is `null` or `undefined`, beyond the session keeps stored. So, this was hard to avoid because I've can't implement the private route, but here is an example how you normally to that:

![alt text](https://imgur.com/Ft3JIA2.png "Private route in Nextjs")

What I think is, maybe I handle wrong the user session to try handle it only local storage. I could tried combine local storage with context, but time.
