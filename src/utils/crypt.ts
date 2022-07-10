/* eslint-disable prettier/prettier */
//DES 加密
import CryptoJS from 'crypto-js'
const normolKey = '88888888'
class crypto {
  // 加密
  encryptByDES(message: string, key = normolKey) {
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.ciphertext.toString()
  }
  // 解密
  decryptByDES(ciphertext: string, key = normolKey) {
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    const decrypted = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
      },
      keyHex,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
    )
    const result_value = decrypted.toString(CryptoJS.enc.Utf8)
    return result_value
  }
}

export default new crypto()
