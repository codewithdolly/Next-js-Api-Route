import { comments } from "../../../data/comment";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    // const comment = req.body.comment;
    const body= JSON.parse(req.body)
    console.log(typeof body, body.comment);
    const newComment = {
      id: Date.now(),
      text: body.comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
