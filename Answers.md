1. What problem does the context API help solve?
    It provides a way to share data values like this between components without having to pass a prop through every level of the app tree.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
     Application state is the state of the entire application at a given point of time. Component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-Thunk allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
