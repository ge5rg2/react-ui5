const express = require("express");
const path = require("path");
const app = express();
const fetchPromise = import("node-fetch");
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./build"))); // 배포시 사용할 코드(server가 읽는 html 경로)

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get("/api", async (req, res) => {
  let target = req.query.country;
  let url = `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRW${target}`;
  try {
    const fetch = (await fetchPromise).default;
    const response = await fetch(url, { method: "GET" });
    if (response.ok) {
      const data = await response.json();
      console.log(`💸 Load ${data[0].currencyCode} Exchange rate data 💱`);
      res.send(data);
    } else {
      console.log("Network response was not ok.");
    }
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/account", async (req, res) => {
  let c4curl = `https://p200024-iflmap.hcisbp.ap1.hana.ondemand.com/http/getEmployees`;
  try {
    const fetch = (await fetchPromise).default;
    const response = await fetch(c4curl, {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        Accept: "application / json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      let employeeData = data.EmployeeCollection.Employee;
      console.log(`👷 Load EmployeeCollection Data 👷`);
      res.send(employeeData.slice(170, employeeData.length - 1));
    } else {
      console.log("Network response was not ok.");
    }
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/user", async (req, res) => {
  let { objID } = req.query;
  let c4curl = `https://p200024-iflmap.hcisbp.ap1.hana.ondemand.com/http/getEmployeesDetail?objID=${objID}`;
  try {
    const fetch = (await fetchPromise).default;
    const response = await fetch(c4curl, {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        Accept: "application / json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      let employeeData = data.EmployeeCollection.Employee;
      console.log(`🧑 Load EmployeeCollection Detail Data 🧑`);
      res.send(employeeData);
    } else {
      console.log("Network response was not ok.");
    }
  } catch (error) {
    console.error(error);
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html")); // 배포시 사용할 코드(server가 읽는 html 경로)
});

app.listen(port, function () {
  console.log(`🚀 Listening on http://localhost:${port} 🚀`);
});
