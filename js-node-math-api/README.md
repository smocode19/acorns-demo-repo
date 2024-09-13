## JavaScript Node Math API

### Demo Description

This demo contins a Node Express API that performs math operations. The API is tested with Mocha/Chai. New endpoints and tests are generated with Copilot.

### Prerecorded Walkthrough

[Recording on Rewatch](https://github.rewatch.com/video/liwe6f1qbm6nqqzg-copilot-demo-node-math-api-bthomas2622)

[Copilot Chat Version](https://www.youtube.com/watch?v=svt4tb1F2_I)

# IMPORTANT Note Before starting
- Open this demo in codespaces and use the `.devcontainer/js-node-math-api/devcontainer.json`. This is accomplished by selecting the `...` (codespace repository configuration) and selecting `New with options` to select the correct `devcontainer.json` file.
- Be mindful of possibly needing to adjust the demo based on Copilot suggestions as they can vary. It is helpful to have a basic understanding of node/js.

### How to Run the Demo

- Run the app using `npm start`, the app will be available at `http://localhost:3000`
- Show how the api works by hitting the endpoint `http://localhost:3000/add?a=1&b=b`. The paths are defined in `index.js` and the logic is defined in the directory `math-utils.js`.

**Copilot Demo**

- Show how Copilot can generate new endpoints and tests for the API.
- Create a comment in the `index.js` file that says for example `// add endpoint for subtracting two numbers`. You will see Copilot generate the path call the appropriate logic for the endpoint.
- Create an associated logic file in the `math-utils.js` file. For example, create a function called `subtract` that takes two numbers and returns the difference. Use comments and show how Copilot can generate the function.
- The `test` folder contains a Mocha/Chai test suite. We will show how Copilot can generate new tests for the API. Create a comment in the `test/test_math_utils.js` file or start to write "describe" to generate the test cases. An example looks like:
  
  ```javascript
  describe('math_utils_add', () => {
    it('should add two numbers', () => {
      expect(math_utils_add(1, 2)).to.equal('3');
    });
  });
  ```
- Show how Copilot can do other miscellaneous asks. For example you can ask Copilot to validate the inputs to the functions in `math-utils` with `// validate that both a and b are numbers`. Copilot will generate the code to validate the inputs.
- Generate Swagger Documentation for the API. See the comment at the bottom of `swagger-config.js` for the sample swagger-doc comment for the `/add` endpoint in `index.js`. Copy and paste that sample comment into the `index.js` file just above the `/add` endpoint. Now you can best utilize Copilot to generate @swagger docs for the rest of the endpoints. Copilot will use the intial example as a template for the rest. Simply start typing `/** @swagger` and Copilot will do the rest. The Swagger Docs can be found at the `/api-docs` endpoint. Remember to update the server url in `swagger-config.js` to the url of your codespace if applicable as Swagger will be `curl`ing the server directly.

### Copilot CLI demo

- Install and auth the Copilot CLI by running `npm run copilot-cli`
- Run the eval function in your shell/terminal to create helper wrappers `??`, `gh?`, and `git?`
  - eval function: `eval "$(github-copilot-cli alias -- "$0")"`
- Demo the Copilot CLI by running `??`, `gh?` or `git?` in your shell/terminal. `??` translates natural language to artibtrary shell commands. `gh?` translates natural language to GitHub CLI commands. And `git?` translates natural language to Git commands. Examples:
  - `?? list the directories in the current directory`
  - `gh? list repositories owned by me`
  - `git? checkout a new branch called my-new-branch`

### Additional Resources
- [mocha documentation](https://mochajs.org/)
- [chai documentation](https://www.chaijs.com/)
- [swagger documentation](https://swagger.io/)
- [swagger-jsdoc documentation](https://www.npmjs.com/package/swagger-jsdoc)
- [swagger-ui-express documentation](https://www.npmjs.com/package/swagger-ui-express)
