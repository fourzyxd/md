const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/6285718828566`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya XynaBotz`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*Hai Kak, Aku XynaBotz*`
let isi =`Saya Botz Adalah Bot WhatsApp Yang di Buat Oleh XynaBotz\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n${tag} (Owner)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/a78443f0ee887f46808d7.jpg`, str, isi, '💘Menu', '.command', '💋Owner', '.owner', '😋Sewa', '.sewabot', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://youtu.be/pYzgl--DLoc',
    mediaType: 2, 
    description: urlnya,
    title: "Subscribe YT Ownerku:)",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://youtu.be/pYzgl--DLoc'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
