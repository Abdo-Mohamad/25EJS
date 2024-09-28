import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const toDay = new Date();
  const day = toDay.getDay(); //  0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday,
  console.log(day);

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "it's time to relax";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
