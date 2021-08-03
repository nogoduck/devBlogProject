const staticURI =
  process.env.NODE_ENV === 'production'
    ? 'https://noise.adklog.com'
    : 'http://localhost:5050/';
module.exports = {
  URI: staticURI,
};
