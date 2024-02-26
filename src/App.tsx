import Home from '@/screens/Home'
import RandomEpisode from '@/screens/RandomEpisode'

import { useState } from 'react'

type Screen = 'home' | 'random-episode'

function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('home')
    const handleGenerateRandomEpisode = () => {
        setCurrentScreen('random-episode')
    }
    return (
        <div className="flex min-h-dvh w-full items-center justify-center py-4">
            {currentScreen === 'home' && (
                <Home onGenerateRandomEpisode={handleGenerateRandomEpisode} />
            )}
            {currentScreen === 'random-episode' && <RandomEpisode />}
        </div>
    )
}

export default App
