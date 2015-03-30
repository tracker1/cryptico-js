
module.exports = cryptico;
module.exports.RSAKey = RSAKey;

if (typeof window !== 'undefined') {
  window.cryptico = module.exports;
}
