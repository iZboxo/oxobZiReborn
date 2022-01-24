const { createAudioPlayer, NoSubscriberBehavior, StreamType, createAudioResource, AudioPlayerStatus, joinVoiceChannel } = require('@discordjs/voice');
const got = require('got');

class RadioPlayer {
    static async setupPlayer() {
        const res = await RadioPlayer.createResource();
        const player = await RadioPlayer.createPlayer();

        player.play(res);

        return player;
    }

    static async startRadio(guild, voice) {
        const client = guild.client;
        let radio = {
            '247': false,
            connection: null,
            channel: voice
        }

        const connection = await joinVoiceChannel({
            channelId: voice.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        })

        const subscribe = connection.subscribe((await client.radioPlayer));
        radio.connection = connection;
        radio.connection.subscriper = subscribe;

        await guild.me.voice.setDeaf(true).catch(e => {});

        client.radio.set(guild.id, radio);

        return radio;
    }

    static stopRadio(guild) {
        const client = guild.client;

        let radio = client.radio.get(guild.id);
        if(!radio) return;

        if(radio['247']) {
            let ginfo = client.gdata[guild.id];
            delete ginfo['radio'];

            client.gdata[guild.id] = ginfo;

            radio['247'] = false;
        }

        radio.connection.destroy();
        client.radio.delete(guild.id);

        return;
    }

    static async createResource(url = "https://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=hyro&tl=en") {
        const stream = await got.stream(url);

        const resource = await createAudioResource(stream, { inputType: StreamType.Arbitrary });

        return resource;
    }

    static async createPlayer() {
        const player = await createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Play
            }
        })

        RadioPlayer.handleStop(player);

        return player;
    }

    static async handleStop(player) {
        player.on("stateChange", async(oldState, newState) => {
            if (newState.status === AudioPlayerStatus.Idle && oldState.status !== AudioPlayerStatus.Idle ) {
                const res = await this.createResource();
                player.play(res);
            }
        })
    }
}

module.exports = RadioPlayer;
