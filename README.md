## Web Audio Touch Unlock

> ## ⚠️ Deprecated
>
> [`web-audio-touch-unlock`](https://www.npmjs.com/package/web-audio-touch-unlock) is deprecated and has been replaced by [`web-audio-unlock`](https://github.com/pavle-goloskokovic/web-audio-unlock).
>
> The API is the same, so you can migrate by changing only the package name.
>
> ```bash
> npm uninstall web-audio-touch-unlock --save
> npm install web-audio-unlock --save
> ```

## Migration

### JavaScript

```javascript
var webAudioUnlock = require('web-audio-unlock');
```

### TypeScript

```typescript
import webAudioUnlock from 'web-audio-unlock';
```

## Compatibility Proxy Features

Starting from `v1.1.0`, this deprecated package also proxies the newer package entrypoint behavior:

- CommonJS default entrypoint
- ESM default entrypoint
- Unminified subpath entrypoint: `web-audio-touch-unlock/unminified`

### CommonJS

```javascript
const webAudioTouchUnlock = require('web-audio-touch-unlock');
```

### ESM

```javascript
import webAudioTouchUnlock from 'web-audio-touch-unlock';
```

### Unminified subpath

```javascript
import webAudioTouchUnlock from 'web-audio-touch-unlock/unminified';
```
___

> ### Unlocking Web Audio - the smarter way
>
> On iOS, the Web Audio API requires sounds to be triggered from an explicit user action, such as a tap, before any sound can be played on a webpage.
>
> This method fixes the issue without you even having to think about it, you just pass your `AudioContext` instance to it, and you're good to go!
>
> You can read more about the issue and how this method handles it in [this article](https://medium.com/@pgoloskokovic/unlocking-web-audio-the-smarter-way-8858218c0e09).
>
> Try it out [here](https://pavle-goloskokovic.github.io/web-audio-touch-unlock-example/).
>
> ## Installation
>
> ```bash
> npm install web-audio-touch-unlock --save
> ```
>
> For new projects, install `web-audio-unlock` instead.
>
> ## Usage
>
> ### JavaScript
>
> ```javascript
> var webAudioTouchUnlock = require('web-audio-touch-unlock');
> 
> var context = new (window.AudioContext || window.webkitAudioContext)();
> 
> webAudioTouchUnlock(context)
>     .then(function (unlocked) {
>         if(unlocked) {
>             // AudioContext was unlocked from an explicit user action, sound should start playing now
>         } else {
>             // There was no need for unlocking, devices other than iOS
>         }
>     }, function(reason) {
>         console.error(reason);
>     });
> 
> // Do all your sound related stuff here
> // as you normally would like if the sound
> // was never locked
> // ..
> var source = context.createBufferSource();
> source.buffer = buffer;
> source.connect(context.destination);
> source.start();
> // ...
> 
> ```
>
> ### TypeScript
>
> ```typescript
> import webAudioTouchUnlock from 'web-audio-touch-unlock';
> 
> let context = new (window.AudioContext || window.webkitAudioContext)();
> 
> webAudioTouchUnlock(context)
>     .then((unlocked: boolean) => {
>         if(unlocked) {
>             // AudioContext was unlocked from an explicit user action, sound should start playing now
>         } else {
>             // There was no need for unlocking, devices other than iOS
>         }
>     },(reason: any) => {
>         console.error(reason);
>     });
> 
> // Do all your sound related stuff here 
> // as you normally would like if the sound 
> // was never locked
> // ...
> let source = context.createBufferSource();
> source.buffer = buffer;
> source.connect(context.destination);
> source.start();
> // ...
> 
> ```

## License

The MIT License (MIT), Copyright 2017 [Pavle Goloskokovic](https://github.com/pavle-goloskokovic)
