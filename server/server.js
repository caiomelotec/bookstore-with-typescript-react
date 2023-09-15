// sk_test_51NCkwhCAw3owkE6i5rBpE9v5TihzZLapvpFCRdDatpHgZmhygL48DaTyNlGCoHAP2YmQcqy4Ldl3gK22b7Mf9Ajm00iayN6dmC

// 01 price_1NqNLbCAw3owkE6iMMki5AnZ
// 02 price_1NqNNOCAw3owkE6itWCbOj6g
// 03 price_1NqNORCAw3owkE6iK7RE7I9Y
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NCkwhCAw3owkE6i5rBpE9v5TihzZLapvpFCRdDatpHgZmhygL48DaTyNlGCoHAP2YmQcqy4Ldl3gK22b7Mf9Ajm00iayN6dmC"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
