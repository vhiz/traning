import { items, users } from "./fake.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  try {
    const user = users.find((p) => p.email === req.body.email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== req.body.password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { email: user.email, password: user.password },
      "worked"
    );
    const { password, ...other } = user;
    return res.status(200).json({ user: other, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getitems = (req, res) => {
  try {
    if (req.query.id) {
      const item = items.find((item) => item.id === req.query.id);
      console.log(req.query.id)
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(item);
      return;
    } else {
      const products = items.map((item) => {
        return item;
      });
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getitem = (req, res) => {
  try {
    const product = items.find((item) => item.id === req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(req.params.id);
    res.status(200).json(product);
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};
