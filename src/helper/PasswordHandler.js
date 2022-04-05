const bcrypt = require('bcryptjs');

/**
 * @param {string} password 
 * @returns string
 */
const encryptPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(15);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}

/**
 * @param {string} password 
 * @param {string} encryptedPassword 
 * @returns boolean
 */
const validatePassword = async (password, encryptedPassword) => {
    return await bcrypt.compare(password, encryptedPassword)
}

module.exports = {
    encryptPassword,
    validatePassword
}