// Ejs tags

/*
<% = >    : This is used to print the value of a variable. For example, <% = name %> will  print the value of the variable name.

<% # %>   : This is used to print the value of a variable in a specific format  as commait ed in the string.

<%# %>    : This is used to print the value of a property. For example, <%# name %>

<%% %%>   : This is used to print the value of a code block. For example, <%% code show  %%> will print the value of the code block code show.


<%-%>     : This is used to print the value of a comment. For example, <%-% comment or html  code -%>


<% %>     : This is used to print the value of a code block. For example, <% code
*/

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    itms: ["apple", "banana", "cherry"],
    htmlContent: `<em>This is a paragraph of text</em>`,
  };
  res.render("index1.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
