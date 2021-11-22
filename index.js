const { create, vf } = require('@open-wa/wa-automate')
const { color, options } = require('./function')
const left = require('./lib/left')
const welcome = require('./lib/welcome')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const figlet = require('figlet')
const fs = require('fs-extra')
const HandleMsg = require('./HandleMsg')

const start = async (urbae = new urbae()) => {
    console.log(color('------------------------------------------------------------------------', 'white'))
    console.log(color(figlet.textSync('Nerandra Bot', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color('------------------------------------------------------------------------', 'white'))
    console.log(color('[CREATOR]', 'aqua'), color('Fazal Narendra', 'magenta'))
    console.log(color('[BOT]', 'aqua'), color('NERANDRA BOT is now Online!', 'magenta'))
    console.log(color('[VER]', 'aqua'), color('2.7.0', 'magenta'))
    urbae.onStateChanged((state) => {
        console.log(color('-> [STATE]'), state)
        if (state === 'CONFLICT') urbae.forceRefocus()
        if (state === 'UNPAIRED') urbae.forceRefocus()
			
	
	app.get('/', (req, res) => res.status(200).send('Urbaeexyz Bot'))
    const PORT = process.env.PORT || 8080 || 5000 || 3000
    app.listen(PORT, () => {
        console.log(color('App is Running!', 'yellow'))
    })
	})

    urbae.onAddedToGroup(async (chat) => {
        await urbae.sendText(chat.groupMetadata.id, 'Terima kasih sudah memasukkan bot kedalam grup kalian')
        await urbae.leaveGroup(chat.groupMetada.id)
    })

    urbae.onGlobalParticipantsChanged((async (heuh) => {
        await welcome(urbae, heuh)
        left(urbae, heuh)
    }))

    urbae.onMessage((message) => {
        HandleMsg(urbae, message)
    })

    urbae.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await urbae.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n\n-bot')
            .then(async () => {
                // bot akan memblock nomor itu
                await urbae.contactBlock(callData.peerJid)
            })
    })
}
create(options(start))
    .then((urbae) => start(urbae))
    .catch((err) => console.error(err))
