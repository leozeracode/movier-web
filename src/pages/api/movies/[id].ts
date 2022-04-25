export default function movies(req, res) {
 console.log( req.params);
 
  res.status(200).json({ text: 'Hello' })
}