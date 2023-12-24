import { data } from "@/data";
import { withSession } from "@/session";

const handler = async function (req, res) {
  res.status(200)
  const { username, password } = req.body

  const user = data.find((user) => user.username == username)

  if (user && user.password == password) {
    req.session.set("user", user);
    await req.session.save();
    res.status(200).json({ message: "User Authenticated" })
  } else {
    res.status(403).json({ message: "Invalid User Authenticated" })
  }
}

export default withSession(handler)