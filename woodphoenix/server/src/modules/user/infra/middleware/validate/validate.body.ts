export default function ValidateBody(obj) {
  return function validate_(req, res, next) {
    const { value, error } = obj.validate(req.body);
    if (error) {
      res.send(error);
    } else {
      next();
    }
  };
}
