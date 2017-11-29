"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function webAudioTouchUnlock(context) {
    return new Promise(function (resolve, reject) {
        if (!context || !(context instanceof (window.AudioContext || window.webkitAudioContext))) {
            reject('WebAudioTouchUnlock: You need to pass an instance of AudioContext to this method call');
            return;
        }
        try {
            if (context.state === 'suspended') {
                var unlock_1 = function () {
                    document.body.removeEventListener('touchstart', unlock_1);
                    context.resume().then(function () {
                        resolve(true);
                    }, function (reason) {
                        reject(reason);
                    });
                };
                document.body.addEventListener('touchstart', unlock_1, false);
            }
            else {
                resolve(false);
            }
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.default = webAudioTouchUnlock;
