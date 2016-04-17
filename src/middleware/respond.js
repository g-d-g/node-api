module.exports = function (req, res) {
  var data = res.data || {};
  return res.json(data);
}
