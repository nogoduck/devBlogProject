const staticURI =
  process.env.NODE_ENV === 'production'
    ? 'http://noise.adklog.com'
    : 'http://localhost:5050/';
module.exports = {
  URI: staticURI,
};
