// import { PrismaClient } from "@prisma/client";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
const express = require("express");

import { router } from "./router";

// const prisma = new PrismaClient();
const app = express();
const PORT = 8080;

// dayjs.extend(relativeTime);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
