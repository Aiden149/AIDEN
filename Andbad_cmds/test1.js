import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => { 
  // Sound
  let name = m.pushName || conn.getName(m.sender)

  // Fetch Alive.json from GitHub
  let jsonUrl = 'https://raw.githubusercontent.com/Aiden149/AIDEN-plugins/main/Alive.json'
  let aliveJson;
  
  try {
    const response = await axios.get(jsonUrl); // Fetch the JSON from GitHub
    aliveJson = response.data; // The fetched data
  } catch (err) {
    console.error('Error fetching Alive.json:', err);
    return conn.sendMessage(m.chat, 'Sorry, I could not fetch the audio link.', { quoted: m });
  }
  
  // Check if the JSON contains URLs
  let vn = aliveJson && aliveJson.urls && aliveJson.urls.length > 0 ? aliveJson.urls[Math.floor(Math.random() * aliveJson.urls.length)] : 'https://cdn.jsdelivr.net/gh/SilvaTechB/silva-md-bot@main/media/Alive.mp3';
  
  let url = 'https://github.com/Aiden149/AIDEN'
  let murl = 'https://whatsapp.com/channel/0029VaefFGr77qVUzcS6ad0t'
  let img = 'https://files.catbox.moe/sb8niw.jpg'
  
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '254700143167@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝐀𝐈𝐃𝐄𝐍_𝐓𝐄𝐂𝐇 𝐁𝐎𝐓 TESTING',
        body: 'AM WORKING DONT YOU SEE',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029VaefFGr77qVUzcS6ad0t',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['test']
handler.tags = ['main']
handler.command = /^(test)$/i

export default handler
