app.post("/order", (req, res) => {
  const { username, service } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.send("المستخدم غير موجود");

  user.servers.push({
    id: "srv-" + Date.now(),
    type: service,
    status: "Offline"
  });

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  res.redirect("/dashboard.html?user=" + username);
});

const bcrypt = require("bcrypt");
