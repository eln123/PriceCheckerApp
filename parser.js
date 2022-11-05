// this is the file that will actually
// check the price on Amazon
// and does all the parsing and emailing for us

const nightmare = require("nightmare")();

const args = process.argv.slice(2);
// this allows you to put the url directly into the terminal
const url = args[0];
const minPrice = args[1];
// format for terminal: node parser.js url minPrice
// will output in terminal

const link = `https://www.amazon.com/2-Way-Philosophy-Improvements-Neurosurgery-ebook/dp/B09N8YD6QX/ref=sr_1_1?crid=QR3DP7H1VFMX&keywords=the+2%25+way&qid=1667580427&qu=eyJxc2MiOiIxLjE1IiwicXNhIjoiMC45NCIsInFzcCI6IjEuMTYifQ%3D%3D&s=digital-text&sprefix=the+2%25+way%2Cdigital-text%2C73&sr=1-1`;
const actualPathWeNeed = `https://www.amazon.com/2-Way-Philosophy-Improvements-Neurosurgery-ebook/dp/B09N8YD6QX`;
// the rest of link is info that amazon uses to keep track of everything, you don't need that
const id = "kindle-price";

async function checkPrice() {
  const priceString = await nightmare
    .goto(url)
    .wait("#kindle-price")
    .evaluate(() => document.getElementById("kindle-price").innerText)
    .end();

  const priceNumber = parseFloat(priceString.replace("$", ""));
  if (priceNumber < minPrice) {
    console.log("It is cheap");
  } else {
    console.log("It is expensive");
  }
}

checkPrice();
