const app = require("express")();
require("express-ws")(app);

app.get("/", (req, res) => {
    res.send("Online!");
})

app.listen(443)
