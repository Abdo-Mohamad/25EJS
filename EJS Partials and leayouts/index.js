/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */


import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));  // Get current directory name
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs','public');

// Specify where the views (EJS files) are located
app.set('views', join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(join(__dirname, 'public')));

// Route to render the home page
app.get('/', (req, res) => {
  res.render('index');  // Render index.ejs
});

app.get("/about",(req,res)=>{
  res.render("about");
})

app.get("/contact",(req,res)=>{
  res.render("contact");
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});







