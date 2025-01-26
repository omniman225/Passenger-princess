import { ArrowRight, Heart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Answer } from './types';

const foodOptions = [
  { name: 'Sushi (Ashokai)', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800' },
  { name: 'Cuccina Napoli', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800' },
  { name: 'Meshoui', image: 'https://images.unsplash.com/photo-1654081067650-3d9fb5c82e01?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Shawarma', image: 'https://images.unsplash.com/photo-1638537125835-82acb38d3531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYXdhcm1hfGVufDB8fDB8fHww' },
  { name: 'Pasta (Luigi)', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800' },
  { name: 'Sea Food', image: 'https://plus.unsplash.com/premium_photo-1707935175109-ba307d98bfe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0cyUyMGRlJTIwbWVyfGVufDB8fDB8fHww' }
];

const locationOptions = [
  { name: 'Rabat', image: 'https://plus.unsplash.com/premium_photo-1697730046699-02d93a2ce32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYXR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Eljadida', image: 'https://images.unsplash.com/photo-1596627116790-af6f46dddbae?auto=format&fit=crop&w=800' },
  { name: 'Quad again', image: 'https://images.unsplash.com/photo-1627760444690-59f0a5fccee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHF1YWR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Horse Riding', image: 'https://images.unsplash.com/photo-1594768816441-1dd241ffaa67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9yc2UlMjByaWRpbmd8ZW58MHx8MHx8fDA%3D' },
  { name: 'Bouznika', image: 'https://images.unsplash.com/photo-1668796378517-b8febcec5a73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: 'Cinema', image: 'https://images.unsplash.com/photo-1631014192792-1a2c9af15352?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answer>({
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  });

  const handleStep1 = (answer: 'yes' | 'no') => {
    setAnswers(prev => ({ ...prev, step1: answer }));
    if (answer === 'yes') {
      setStep(2);
    }
  };

  const handleStep2 = (food: string) => {
    setAnswers(prev => ({ ...prev, step2: food }));
    setStep(3);
  };

  const handleStep3 = (location: string) => {
    setAnswers(prev => ({ ...prev, step3: location }));
    setStep(4);
  };

  useEffect(() => {
    // Save answers to file (this would need backend integration)
    console.log('Answers:', answers);
  }, [answers]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#9b42f5' }}>
      <div className="container mx-auto px-4 py-8">
        {step === 1 && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Wanna be my Passenger Princess?
            </h1>
            <div className="space-x-4">
              <button
                onClick={() => handleStep1('yes')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-xl transition-all transform hover:scale-105"
              >
                Yes <Heart className="inline ml-2" />
              </button>
              <button
                onClick={() => handleStep1('no')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full text-xl transition-all transform hover:scale-105"
              >
                No <X className="inline ml-2" />
              </button>
            </div>
            {answers.step1 === 'no' && (
              <div className="mt-8 text-3xl font-bold animate-bounce">
                Ewaaa Toooooz Ok bye 👋
              </div>
            )}
            <div className="mt-8">
              <img
                src="IM1.jpg"
                alt="Princess Meme"
                className="rounded-lg shadow-xl max-w-md"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              What would you like to eat?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodOptions.map((food) => (
                <button
                  key={food.name}
                  onClick={() => handleStep2(food.name)}
                  className="group relative overflow-hidden rounded-xl transition-all transform hover:scale-105"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-semibold text-white">
                        {food.name} <ArrowRight className="inline ml-2" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Where do you want to hang out?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationOptions.map((location) => (
                <button
                  key={location.name}
                  onClick={() => handleStep3(location.name)}
                  className="group relative overflow-hidden rounded-xl transition-all transform hover:scale-105"
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-semibold text-white">
                        {location.name} <ArrowRight className="inline ml-2" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-pulse">
              Thanks For being the Passenger Princess! 👑
            </h2>
            <div className="text-2xl text-center mb-8">
              <p>You chose:</p>
              <p className="font-bold">{answers.step2}</p>
              <p>&</p>
              <p className="font-bold">{answers.step3}</p>
            </div>
            <div className="mt-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-pulse">
              Here is You Crown  👑
            </h2>
              <center><img
                src="https://images.unsplash.com/photo-1536283865487-627ae241d1b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Thank You"
                className="rounded-lg shadow-xl max-w-md"
              /></center>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;