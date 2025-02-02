

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: MR DULEN" //ur yt chanel name
global.socialm = "GitHub: MR DULEN" //ur github or insta name
global.location = "Sri Lanka, Southern, Hambanthota" //ur location

//new
global.botname = '© 𝐆𝐋𝐎𝐁𝐀𝐋-𝐌𝐃' //ur bot name
global.ownernumber = ['94778023384'] //ur owner number, dont add more than one
global.ownername = '© Mr xDulen' //ur owner name
global.websitex = "https://mr-dulen.github.io"
global.wagc = "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07"
global.themeemoji = '🪀'
global.wm = "Global Bot Inc."
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-MD' //script link
global.packname = "Sticker By"
global.author = "MR xDulen\n\n+94778023384"
global.creator = "94778023384@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["94778023384"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 10000,
	premium: 99999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
