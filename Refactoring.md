# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The original function has 2 levels of nesting, but the second level introduces unneeded complexity.
My proposed refactor is cleaner and more readable because it only uses 1 level of nesting.
Furthermore, the function has gone from 5->4 total conditional considerations. With fewer alternatives to consider in total, the complexity is reduced.
Finally, the original function operates on the same `candidate` variable throughout, and you must read through the entire function, considering all 5 conditionals to see if it will be modified at any point along the way.
Because of my use of return statements throughout the function, the complexity is greatly reduced; once you've encountered the scenario where there is no event, you need not read further than line 8.
Similarly, if you discover there is no `event.partitionKey`, you need not read past line 14.
This means that although the drop from 5->4 conditionals itself reduces cognitive load, the use of return statements throughout ensures that the coder is only ever considering 1 or 2 conditionals at any one time. 
