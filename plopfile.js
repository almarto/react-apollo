module.exports = plop => {
  /* Files */

  var files = {
    index: "plop-templates/index.js",
    styles: "plop-templates/styles.css"
  };

  /* Files Creation */

  var createIndex = {
    type: "add",
    path: "src/components/{{pascalCase name}}/index.js",
    templateFile: files.index
  };

  var createStyle = {
    type: "add",
    path: "src/components/{{pascalCase name}}/styles.css",
    templateFile: files.styles
  };

  /* Questions */
  var getComponentName = {
    type: "input",
    name: "name",
    message: "What is the component name?",
    validate: function(value) {
      if (/.+/.test(value)) {
        return true;
      }
      return "name is required";
    }
  };

  /* Options */
  plop.setGenerator("Component", {
    description: "Component",
    prompts: [getComponentName],
    actions: [createIndex, createStyle]
  });
};
