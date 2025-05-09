const crypto = require('crypto');

// Using DES algorithm, which is considered weak
const algorithm = 'des-ecb';
const key = Buffer.from('12345678'); // DES key must be 8 bytes
const plaintext = 'Sensitive Data';

// Encrypting the plaintext
const cipher = crypto.createCipheriv(algorithm, key, null);
let encrypted = cipher.update(plaintext, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted text:', encrypted);

// Decrypting the ciphertext
const decipher = crypto.createDecipheriv(algorithm, key, null);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Decrypted text:', decrypted);
