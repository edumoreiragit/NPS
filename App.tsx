
import React, { useState } from 'react';
import type { ExperienceFeedback } from './types';
import { FeedbackForm } from './components/FeedbackForm';

const App: React.FC = () => {
    const [boardGamesFeedback, setBoardGamesFeedback] = useState<ExperienceFeedback>({
        nps: 10,
        whyNot10: '',
        impressions: '',
    });

    const [circusFeedback, setCircusFeedback] = useState<ExperienceFeedback>({
        nps: 10,
        whyNot10: '',
        impressions: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Feedback:");
        console.log("Jogos de Tabuleiro:", boardGamesFeedback);
        console.log("Circo:", circusFeedback);
        setSubmitted(true);
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center font-sans text-gray-800" 
            style={{ backgroundImage: "url('https://operacaolabirintar.github.io/Reposit-rio-de-Imagens/IMG_7253.png')" }}
        >
            <div className="min-h-screen w-full bg-brand-sand/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <main className="w-full max-w-4xl bg-white/80 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md">
                    {submitted ? (
                        <div className="text-center py-16 transition-opacity duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-brand-orange mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="font-slab text-4xl font-bold text-brand-guava mb-2">Obrigado!</h1>
                            <p className="text-lg text-gray-700">Seu feedback foi enviado com sucesso.</p>
                        </div>
                    ) : (
                        <>
                            <header className="text-center mb-8">
                                <h1 className="font-slab text-3xl sm:text-4xl md:text-5xl font-bold text-brand-guava tracking-tight">
                                    Feedback das Experiências
                                </h1>
                                <p className="mt-2 text-lg text-gray-600 font-sans">
                                    LABirintar na Gara School
                                </p>
                            </header>
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <FeedbackForm 
                                    experienceName="Jogos de Tabuleiro" 
                                    feedback={boardGamesFeedback}
                                    onFeedbackChange={setBoardGamesFeedback}
                                />
                                 <div className="border-t border-brand-cream border-dashed"></div>
                                <FeedbackForm 
                                    experienceName="Circo" 
                                    feedback={circusFeedback}
                                    onFeedbackChange={setCircusFeedback}
                                />
                                <div className="flex justify-end pt-4">
                                    <button 
                                        type="submit"
                                        className="bg-brand-orange hover:bg-opacity-90 text-white font-bold font-slab text-lg py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-brand-orange/50"
                                    >
                                        Enviar Feedback
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
