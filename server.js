const request = require("request");
setTimeout(async () => {
  let options1 = {
    method: "GET",
    url: "https://app.heysummit.com/api/v2/events/",
    headers: {
      Authorization: "Token 9b0ef92a9d6ba76bd9c19630da6a30ba7efea1ad",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  console.log(`heysummit==syncevent==${JSON.stringify(options1)}==>`);
  await new Promise((resolve, reject) => {
    request(options1, async (error, meta, body) => {
      console.log(`heysummit==syncevent==${body}==>`);
      if (error || meta.statusCode !== 200) {
        resolve({ s: 404, m: body });
      } else {
        resolve({ s: 200, m: body });
      }
    });
  });
}, 100);