const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Make sure to import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "f2951fa1-ef84-4d56-a228-7018f7dcd113" } }
    );
    return res.status(r.status).json(r.data); // Fixed the response handling
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
