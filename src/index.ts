export default function webAudioTouchUnlock (context: AudioContext)
{
    if (context && context.state === 'suspended')
    {
        let unlock = () =>
        {
            document.body.removeEventListener('touchstart', unlock);

            context.resume();
        };

        document.body.addEventListener('touchstart', unlock, false);
    }
}
