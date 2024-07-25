const dotenv = require("dotenv");
const axios = require("axios");
const fs = require("fs");

dotenv.config({ path: ".env" });

const url = `${process.env.VITE_API_URL}/v3/api-docs/newdeal-app`;

async function getDocs() {
  const { data } = await axios.get(url);
  console.log(url);

  try {
    if (fs.readFileSync("./src/client/api-docs.json")) {
      fs.unlinkSync("./src/client/api-docs.json");
    }
  } catch (e) {
    //
  } finally {
    await fs.writeFileSync("./src/client/api-docs.json", JSON.stringify(data));
  }
}

getDocs();
