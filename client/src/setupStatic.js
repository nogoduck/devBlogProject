const staticURI =
  process.env.NODE_ENV === 'production'
    ? 'https://devlog-ad.herokuapp.com'
    : 'http://localhost:5050/';
module.exports = {
  URI: staticURI,
};