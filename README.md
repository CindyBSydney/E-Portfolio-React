# E-Portfolio-React
![React icon](/src/assets/react.png) This React-based E-Portfolio showcases my skills, work experience, and projects. Check out the live version [here](https://cindybsydney.github.io/My-Portfolio/)

## Features
1. Sections: Skills, Work Experience, Projects, and Contact Info.
2. Responsive Design: Optimized for various screen sizes.
3. Adaptive Navbar: Transforms into a menu icon on smaller screens using Vanilla JS.

## Usage
### 1. Cloning the repository
> 1. On GitHub page, click the green `code` button.
> 2. Copy the web URL.
> 3. In GitHub Desktop, choose `File > Clone Repository` and paste the [URL](https://github.com/CindyBSydney/E-Portfolio-React).
> 4. With command line, use the command `git clone https://github.com/CindyBSydney/E-Portfolio-React.git`.
> 5. Navigate to the directory of your newly cloned repository and open `index.html` on any web browser of your choice.

> ### 2. Downloading as ZIP
> 1. Click `code > Download ZIP` on the [GitHub page](https://github.com/CindyBSydney/E-Portfolio-React).
> 2. Unzip the folder's contents into your desired directory.
> 3. Unzip and open `index.html` in a browser.

## Questions 
1. What is NPM? 
- Node Package Manager. It is used to facilitate management of code packages used in Node.js. 

2. What is SPA? 
- SPA stands for Single Page Application. It uses routing for dynamic content loading without page refresh. 
- For example, when a user clicks on a link, the router dynamically renders the appropriate component based on the URL instead of reloading the entire page. 

3. What is the event loop? 
- Manages asynchronous operations in JavaScript, allowing non-blocking execution. This means that the program can continue to run while waiting for asynchronous tasks to complete. This is crucial in JavaScript's single-threaded environment, allowing it to handle multiple tasks concurrently. 

4. What is the difference between `export x` and `export default x`? How do you import them differently?
- `export x`: This is necessary to make a function available for importing into other files. There can be multiple exports in one component. It is used to export named values. 
- To import this, it is done as follows:
    `import { x } from ./component;`

- `export default x`: This is used to export a single value as the default export from file. Each file can have only one default export. It serves as the primary function in each component. 
- For a default export, import is done without curly braces: 
    `import x from ./component;`

- summary : `export`: Named export. Imported with {}. Multiple exports per file.
            `export default`: Single primary export per file. Imported without {}.

5. Why do you use className as a property in React and not class? 
- `Class` is a reserved keyword in JavaScript.

6. Why should you not write the following? What will happen?

- `<button onClick = {setCounter (counter + 1)}> +1 </button>`

- This will make the `setCounter (counter + 1)` to be executed every time the component renders, rather than only when the button is clicked. 
- To correct it, the function `onClick` should be passed so that the state is updated only when the button is clicked.
- `<button onClick = {() => setCounter (counter + 1)}> +1 </button>`

7. What is object deconstruction and how is it connected to React components (example)?
- Object deconstruction a way of extracting properties from an object and assigning them to variables. It is useful in React components for props and state management.

- Before deconstructing:

```jsx
  const SchoolComponent = (props) => {
    return (
      <div>
        <h1>School Name: {props.name}</h1>
        <p>Location: {props.location}</p>
      </div>
    );
  };
```

- After deconstructing

```jsx
const SchoolComponent = ({ name, location }) => {
  return (
    <div>
      <h1>School Name: {name}</h1>
      <p>Location: {location}</p>
    </div>
  );
};

```
- The code above shows the difference between using props directly and destructuring them in a functional component in React.

8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
- It is possible because of JavaScript XML (JSX) which is a combination of JavaScript and HTML. 

```jsx
  import { createElement } from 'react';

  function Greeting ({ name }) {
    return createElement (
        'h1',
        { className: 'greeting' },
        'Hello'
    );
  }
```
- What makes it possible under the hood is createElement. createElement takes in three arguments:
> 1. Type: The type of element being created, for example a HTML tag like `div`, `span`, or a React component. In the example above the type is a `h1` header. 
> 2. Props: This is an object containing the properties or attributes to be set on the element. This includes things like `className`, `id`, and event handlers like `onClick`. In the above example, the `className` is the prop. 
> 3. Children: This can be a text, another createElement call, or an array of elements for multiple children. In the example above, this is represented by the text ‘Hello’.

9. What is `async`/`await`? 

- `async` Function: When put `async` before a function, it means this function is asynchronous. It can perform operations in the background and doesn't block other code from running. Essentially, it tells the function to return a promise, a placeholder for the eventual result.
- For example, when fetching data from a server, await lets other parts of the script continue running while waiting for the data.

```js
async function fetchData() {
  let response = await fetch('https://sample.api.com/data');
  let data = await response.json();
  console.log(data);
}
```
- `fetchData` is an `async` function. It waits for the fetch to complete, and then waits for the conversion to JSON. The rest of the JavaScript code keeps running as these operations are being completed.

- `await` Keyword: When is used inside an `async` function, `await` pauses the function until a specific asynchronous operation (like data fetching) is finished. This allows other code to run without being blocked.

```js
async function delayedLog(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
// This will log "Hello" after a 2-second delay
delayedLog("Hello", 2000);

```
- `async`/`await` can be used with `setTimeout` to create delays without blocking the execution thread. `delayedLog` waits for a specified delay before logging a message.


10. What is a Promise? 
- A promise is an object that represents the eventual completion or failure of an asynchronous operation. 
- It has three states, `pending()`, `resolved()` and `rejected()`. 

```js
    fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
```

- `fetch` is used to get data from an API. When the `fetch` request is first made, the Promise is in the `pending` state. It returns a Promise that resolves to the response of the request. 

- If the `fetch` request is successful and the response is received, the Promise transitions to the `resolved` state. `.then()` is then used to process the response, converting it to JSON. Another `.then()` is used to process the JSON data. 

- If there is an error (like a network issue or if the response is not OK), the Promise is `rejected`. This is handled in the `.catch()` method, where the error is logged.





