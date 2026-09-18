// Web Audio API Synthesizer for ambient UI sound design (zero external audio file dependency)

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

const initAudio = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    initAudio();
    playChime(520, 0.08, 0.12);
  }
  return soundEnabled;
};

export const isSoundEnabled = (): boolean => soundEnabled;

export const playChime = (freq = 600, duration = 0.08, volume = 0.06) => {
  if (!soundEnabled) return;
  const ctx = initAudio();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Ignore audio context errors
  }
};

export const playClick = () => {
  if (!soundEnabled) return;
  playChime(750, 0.05, 0.08);
};

export const playHover = () => {
  if (!soundEnabled) return;
  playChime(950, 0.03, 0.03);
};
