const staticURI =
  process.env.NODE_ENV === 'production'
    ? 'https://adklog.com'
    : 'http://localhost:5050/';
module.exports = {
  URI: staticURI,
};
