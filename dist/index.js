"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
function webAudioTouchUnlock(context) {
    return new Promise(function (resolve, reject) {
        if (!context || !(context instanceof (window.AudioContext || window.webkitAudioContext))) {
            reject('WebAudioTouchUnlock - You need to pass an instance of AudioContext to this method call!');
            return;
        }
        if (typeof context.state !== 'string' || typeof context.resume !== 'function') {
            reject('WebAudioTouchUnlock - Seems like this approach can not be used with current ' +
                'implementation of AudioContext. We\'re sorry about that, however you can open an issue here: ' +
                'https://github.com/pavle-goloskokovic/web-audio-touch-unlock/issues and we\'ll try to sort it out.');
            return;
        }
        if (context.state === 'suspended') {
            var unlock_1 = function () {
                document.body.removeEventListener('touchstart', unlock_1);
                resolve(context.resume());
            };
            document.body.addEventListener('touchstart', unlock_1, false);
        }
    });
}
exports.default = webAudioTouchUnlock;
