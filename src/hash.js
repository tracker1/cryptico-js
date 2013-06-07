/**
*
*  Secure Hash Algorithm (SHA256)
*  http://www.webtoolkit.info/
*
*  Original code by Angel Marin, Paul Johnston.
*
**/

var crypto = require('crypto');
 
function SHA256(s){
	return crypto.createHash('sha256').update(s, 'utf8').digest('hex');
}

var sha256 = {}
sha256.hex = function(s)
{
    return SHA256(s);
}

/**
*
*  Secure Hash Algorithm (SHA1)
*  http://www.webtoolkit.info/
*
**/
 
function SHA1 (msg) {
	return crypto.createHash('sha1').update(msg, 'utf8').digest('hex'); 
}

var sha1 = {}
sha1.hex = function(s)
{
    return SHA1(s);
}

/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/
 
var MD5 = function (string) {
	return crypto.createHash('md5').update(string, 'utf8').digest('hex');
}