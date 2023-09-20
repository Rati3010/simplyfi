# simplyfi
JAVASCRIPT

Certainly! Let's break down the code step by step in simple language:

**1. Define the Available Train Tickets**

In the first part of the code, we list all the train tickets your son could have used for his trip. Each ticket shows the starting city and the destination city, like 'Paris-Skopje' means starting from Paris and going to Skopje.

**2. Find the Route Using Depth-First Search (DFS)**

Now, we want to find the route your son took. We'll use a technique called Depth-First Search, which is like following a path step by step. Here's how we do it:

- We start from 'Kiev' because we know your son began there.
- We keep track of the cities he visited in a list called 'route.'
- We use a function called 'dfs' (short for depth-first search) to explore the possible routes.

**3. Explore the Routes**

Inside the 'dfs' function, we look at each available ticket one by one:

- If the starting city of the ticket is the same as the current city we're in, we consider taking that ticket to the next city.
- We add the destination city to the 'route' list and mark the ticket as used.
- Then, we repeat the process from the new city, looking for the next ticket.

**4. Keep Going Until We Find a Complete Route**

We keep doing this until we have visited all the cities exactly once. If we do, that means we found the route your son traveled.

**5. Print the Route**

If we find the route, we print it out in the order of cities visited, like "Kiev -> Prague -> Zurich -> Amsterdam -> Barcelona -> Berlin."

**6. Handle No Valid Route Found**

If we can't find a valid route, it means something went wrong or there's no possible route with the given tickets. In this case, we display a message saying we couldn't find a valid route starting from Kiev.

So, in simple terms, the code helps us figure out where your son went on his vacation using train tickets and tells us the order of cities he visited, starting from Kiev.
![Screenshot 2023-09-20 143549](https://github.com/Rati3010/simplyfi/assets/107462328/1a1a01b1-2e09-4b2b-8b57-b04fcdf2b954)



![Screenshot (132)](https://github.com/Rati3010/simplyfi/assets/107462328/91a57748-3134-46cc-9a06-4cfffa85802d)
