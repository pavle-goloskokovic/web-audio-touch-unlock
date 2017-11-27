export default function webAudioTouchUnlock (context: AudioContext)
{
    return new Promise <boolean>((resolve, reject) =>
    {
        if (!context || !(context instanceof ((<any>window).AudioContext || (<any>window).webkitAudioContext)))
        {
            reject('WebAudioTouchUnlock - You need to pass an instance of AudioContext to this method call!');
            return;
        }

        try
        {
            if (context.state === 'suspended')
            {
                let unlock = () =>
                {
                    document.body.removeEventListener('touchstart', unlock);

                    context.resume().then(()=>
                        {
                            resolve(true);
                        },
                        (reason)=>
                        {
                            reject(reason);
                        }
                    );
                };

                document.body.addEventListener('touchstart', unlock, false);
            }
            else
            {
                resolve(false);
            }
        }
        catch (e)
        {
            reject(e);
        }
    });
}
