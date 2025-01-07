"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🫀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'AM ALIVE STUPID.... \n\n\nGO GITHUB AND SEARCH Aiden149 FORK THE REPO DEPLOY AND DM FOR YOURE 15$\n\n\n';
    let d = '                                                                           I LOVE MY OWNER 𝐀𝐈𝐃𝐄𝐍_𝐓𝐄𝐂𝐇-𝐌𝐃';
    let varmess = z + d;
    var video = 'https://files.catbox.moe/sb8niw.jpg';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
