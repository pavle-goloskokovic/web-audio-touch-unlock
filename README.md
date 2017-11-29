## Web Audio Touch Unlock
### Unlocking Web Audio - the smarter way

On iOS, the Web Audio API requires sounds to be triggered from an explicit user action, such as a tap. 
Playing sound from an onload event will not play sound.

This method fixes the issue without you even having to think about it, you just pass your AudioContext instance to it and you're good to go!

You can read more about the issue and how this method handles it in this article. 

Try a live demo [here](https://pavle-goloskokovic.github.io/web-audio-touch-unlock-example/).

## Installation

```bash
npm install web-audio-touch-unlock --save
```

## Usage

### JavaScript

```javascript
var webAudioTouchUnlock = require('web-audio-touch-unlock');

var context = new (window.AudioContext || window.webkitAudioContext)();

webAudioTouchUnlock(context)
    .then(function (unlocked) {
        if(unlocked) {
            // AudioContext was unlocked from an explicit user action, sound should start playing now
        } else  {
            // There was no need for unlocking, devices other than iOS
        }
    }, function(reason) {
        console.error(reason);
    });

// Do all your sound related stuff here
// as you normally would like if the sound
// was never locked
// ..
var source = context.createBufferSource();
source.buffer = buffer;
source.connect(context.destination);
source.start();
// ...

```

### TypeScript

```typescript
import webAudioTouchUnlock from 'web-audio-touch-unlock';

let context = new (window.AudioContext || window.webkitAudioContext)();

webAudioTouchUnlock(context)
    .then((unlocked: boolean) => {
        if(unlocked) {
            // AudioContext was unlocked from an explicit user action, sound should start playing now
        } else  {
            // There was no need for unlocking, devices other than iOS
        }
    },(reason: any) => {
        console.error(reason);
    });

// Do all your sound related stuff here 
// as you normally would like if the sound 
// was never locked
// ...
let source = context.createBufferSource();
source.buffer = buffer;
source.connect(context.destination);
source.start();
// ...

```

## License

  MIT
