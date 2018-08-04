const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith("!ping")) {
        message.channel.send("All hail my creator Will. Also, pong!");
    } else if (message.content.startsWith("!joke")) {
        message.channel.send("Killer is \"good\" at DPS");
    }

});

client.on("voiceStateUpdate", (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if (oldUserChannel === undefined && newUserChannel !== undefined) {
        if (newMember.user.username.toLowerCase() === `${newMember.user.username}`) {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./dev.mp3');

                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'zombearz') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./march.mp3');

                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'ecireth') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./brooklyn99.mp3');
                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'sevchenko') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./nogodno.mp3');
                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        }
    }
    /*else if (newUserChannel === undefined) {
        console.log('User left voice channel');

}*/
});

client.login("");
