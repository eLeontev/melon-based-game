import {
    audio,
    device,
    loader,
    pool,
    state,
    utils,
    video,
    plugin,
} from 'melonjs/dist/melonjs.module';
import 'index.css';

import { TitleScreen } from './js/stage/title';
import { PlayScreen } from './js/stage/play';
import { PlayerEntity } from './js/renderables/player';

import DataManifest from './manifest';

device.onReady(() => {
    // initialize the display canvas once the device/browser is ready
    if (!video.init(1218, 562, { parent: 'screen', scale: 'auto' })) {
        alert('Your browser does not support HTML5 canvas.');
        return;
    }

    // initialize the debug plugin in development mode.
    if (process.env.NODE_ENV === 'development') {
        import('./js/plugin/debug/debugPanel').then((debugPlugin) =>
            utils.function.defer(plugin.register, this, debugPlugin.DebugPanelPlugin, 'debugPanel')
        );
    }

    // Initialize the audio.
    audio.init('mp3,ogg');

    // allow cross-origin for image/texture loading
    // @ts-ignore
    loader.crossOrigin = 'anonymous';

    // set and load all resources.
    loader.preload(DataManifest, function () {
        // set the user defined game stages
        state.set(state.MENU, new TitleScreen());
        state.set(state.PLAY, new PlayScreen());

        // add our player entity in the entity pool
        pool.register('mainPlayer', PlayerEntity);

        // Start the ga
        state.change(state.PLAY, false);
    });
});
