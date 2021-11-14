import { device, loader, state, video } from 'melonjs/dist/melonjs.module';

import { dataManifest, registerEntities, registerStages } from './reception';

import { screenHeight, screenOptions, screenWidth } from './constants/screen.constants';

import '../index.css';

device.onReady(() => {
    if (!video.init(screenWidth, screenHeight, screenOptions)) {
        alert('Your browser does not support HTML5 canvas.');
        return;
    }

    // if (process.env.NODE_ENV === 'development') {
    //     import('./plugin/debug/debugPanel').then((debugPlugin) =>
    //         utils.function.defer(plugin.register, this, debugPlugin.DebugPanelPlugin, 'debugPanel')
    //     );
    // }

    loader.preload(dataManifest, () => {
        registerStages();
        registerEntities();

        state.change(state.PLAY, false);
    });
});
