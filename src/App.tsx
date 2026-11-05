import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SCENES } from './data/mockData';
import { BackgroundGrid } from './components/common/BackgroundGrid';
import { Header } from './components/common/Header';
import { ControlBar } from './components/common/ControlBar';
import { ShortcutsModal } from './components/common/ShortcutsModal';

// Scenes
import { Scene1BrandIntro } from './components/scenes/Scene1BrandIntro';
import { Scene2Procurement } from './components/scenes/Scene2Procurement';
import { Scene3Inventory } from './components/scenes/Scene3Inventory';
import { Scene4Traceability } from './components/scenes/Scene4Traceability';
import { Scene5Dispatch } from './components/scenes/Scene5Dispatch';
import { Scene6FutureOpportunities } from './components/scenes/Scene6FutureOpportunities';
import { Scene7Closing } from './components/scenes/Scene7Closing';

export function App() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [sceneTimeLeft, setSceneTimeLeft] = useState<number>(SCENES[0].durationSeconds);
  const [direction, setDirection] = useState<number>(1); // 1 = forward, -1 = backward

  // Calculate total elapsed presentation time
  const totalPresentationDuration = SCENES.reduce((acc, s) => acc + s.durationSeconds, 0);
  
  const currentScene = SCENES[currentSceneIndex] || SCENES[0];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSceneIndex((prev) => {
      if (prev < SCENES.length - 1) {
        const nextIdx = prev + 1;
        setSceneTimeLeft(SCENES[nextIdx].durationSeconds);
        return nextIdx;
      }
      setIsPlaying(false);
      return prev;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSceneIndex((prev) => {
      if (prev > 0) {
        const prevIdx = prev - 1;
        setSceneTimeLeft(SCENES[prevIdx].durationSeconds);
        return prevIdx;
      }
      return 0;
    });
  }, []);

  const handleSelectScene = useCallback((index: number) => {
    setDirection(index > currentSceneIndex ? 1 : -1);
    setCurrentSceneIndex(index);
    setSceneTimeLeft(SCENES[index].durationSeconds);
  }, [currentSceneIndex]);

  const handleReplay = useCallback(() => {
    setDirection(-1);
    setCurrentSceneIndex(0);
    setSceneTimeLeft(SCENES[0].durationSeconds);
    setIsPlaying(true);
  }, []);

  const togglePresentationMode = useCallback(() => {
    setIsPresentationMode((prev) => !prev);
  }, []);

  // Timer loop for auto-advancing scenes
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // ms
    const step = (intervalTime / 1000) * playbackSpeed;

    const timer = setInterval(() => {
      setSceneTimeLeft((prev) => {
        if (prev <= step) {
          handleNext();
          return 0;
        }
        return prev - step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, handleNext]);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          setIsPlaying((prev) => !prev);
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          togglePresentationMode();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          handleReplay();
          break;
        case '?':
          e.preventDefault();
          setIsShortcutsOpen((prev) => !prev);
          break;
        case 'Escape':
          if (isShortcutsOpen) {
            setIsShortcutsOpen(false);
          } else if (isPresentationMode) {
            setIsPresentationMode(false);
          }
          break;
        default:
          // Keys 1 to 7 jump to scene
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= SCENES.length) {
            handleSelectScene(num - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, togglePresentationMode, handleReplay, handleSelectScene, isShortcutsOpen, isPresentationMode]);

  // Calculate elapsed time across all scenes
  const pastScenesDuration = SCENES.slice(0, currentSceneIndex).reduce((acc, s) => acc + s.durationSeconds, 0);
  const currentSceneElapsed = currentScene.durationSeconds - sceneTimeLeft;
  const totalTimeElapsed = Math.min(totalPresentationDuration, Math.round(pastScenesDuration + currentSceneElapsed));

  // Slide Animation Variants
  const sceneVariants: Variants = {
    initial: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? -40 : 40,
      transition: {
        duration: 0.35,
        ease: 'easeIn' as const,
      },
    }),
  };

  return (
    <div className="relative w-screen h-screen bg-slate-50 text-slate-900 flex flex-col justify-between overflow-hidden select-none">
      
      {/* Background CAD Canvas & Grid */}
      <BackgroundGrid />

      {/* Top Header HUD */}
      <Header
        currentSceneIndex={currentSceneIndex}
        totalTimeElapsed={totalTimeElapsed}
        totalPresentationDuration={totalPresentationDuration}
        isPresentationMode={isPresentationMode}
        togglePresentationMode={togglePresentationMode}
        isPlaying={isPlaying}
      />

      {/* Active Scene Display Viewport (16:9 proportioned / responsive container) */}
      <main className={`relative flex-1 w-full h-full max-w-[1920px] mx-auto overflow-hidden flex items-center justify-center transition-all duration-300 ${
        isPresentationMode ? 'pb-2' : 'pb-20'
      }`}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSceneIndex}
            custom={direction}
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex flex-col justify-center"
          >
            {currentSceneIndex === 0 && <Scene1BrandIntro />}
            {currentSceneIndex === 1 && <Scene2Procurement />}
            {currentSceneIndex === 2 && <Scene3Inventory />}
            {currentSceneIndex === 3 && <Scene4Traceability />}
            {currentSceneIndex === 4 && <Scene5Dispatch />}
            {currentSceneIndex === 5 && <Scene6FutureOpportunities />}
            {currentSceneIndex === 6 && (
              <Scene7Closing
                onReplay={handleReplay}
                onSelectScene={handleSelectScene}
                togglePresentationMode={togglePresentationMode}
                isPresentationMode={isPresentationMode}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Floating Control Dock */}
      <ControlBar
        currentSceneIndex={currentSceneIndex}
        totalScenes={SCENES.length}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((prev) => !prev)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectScene={handleSelectScene}
        onReplay={handleReplay}
        isPresentationMode={isPresentationMode}
        onTogglePresentationMode={togglePresentationMode}
        playbackSpeed={playbackSpeed}
        onChangeSpeed={(speed) => setPlaybackSpeed(speed)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        sceneTimeLeft={sceneTimeLeft}
      />

      {/* Presentation Mode Minimal Indicator (Only visible in presentation mode on hover) */}
      {isPresentationMode && (
        <button
          onClick={togglePresentationMode}
          className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-lg text-[11px] font-mono opacity-40 hover:opacity-100 transition-all cursor-pointer"
          title="Exit Presentation Mode (Press 'F' or 'Esc')"
        >
          Exit Presentation Mode (F)
        </button>
      )}

      {/* Keyboard Shortcuts Modal */}
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

    </div>
  );
}

export default App;
