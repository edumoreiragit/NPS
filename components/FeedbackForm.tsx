
import React from 'react';
import type { ExperienceFeedback } from '../types';

interface FeedbackFormProps {
    experienceName: string;
    feedback: ExperienceFeedback;
    onFeedbackChange: (feedback: ExperienceFeedback) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ experienceName, feedback, onFeedbackChange }) => {
    const handleNpsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFeedbackChange({ ...feedback, nps: parseInt(e.target.value, 10) });
    };

    const handleWhyNot10Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onFeedbackChange({ ...feedback, whyNot10: e.target.value });
    };

    const handleImpressionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onFeedbackChange({ ...feedback, impressions: e.target.value });
    };

    return (
        <div className="space-y-6">
            <h2 className="font-slab text-3xl font-bold text-brand-chocolate">{experienceName}</h2>
            
            <div>
                <label htmlFor={`nps-${experienceName}`} className="block text-md font-bold text-gray-700 mb-2 font-sans">
                    De 0 a 10, quanto você recomendaria a experiência vivenciada? <span className="text-brand-guava">*</span>
                </label>
                <div className="flex items-center space-x-4">
                    <input
                        id={`nps-${experienceName}`}
                        type="range"
                        min="0"
                        max="10"
                        value={feedback.nps}
                        onChange={handleNpsChange}
                        className="w-full h-2 bg-brand-cream rounded-lg appearance-none cursor-pointer accent-brand-guava"
                        required
                    />
                    <span className="font-slab text-2xl font-bold text-brand-guava w-12 text-center">{feedback.nps}</span>
                </div>
            </div>

            {feedback.nps < 10 && (
                <div className="transition-all duration-500 ease-in-out">
                    <label htmlFor={`why-not-10-${experienceName}`} className="block text-md font-bold text-gray-700 mb-2 font-sans">
                        Porque não 10?
                    </label>
                    <textarea
                        id={`why-not-10-${experienceName}`}
                        rows={3}
                        value={feedback.whyNot10}
                        onChange={handleWhyNot10Change}
                        placeholder="Sua opinião é importante para melhorarmos..."
                        className="w-full p-3 border border-brand-cream rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150 ease-in-out bg-white/70 shadow-inner font-sans"
                    />
                </div>
            )}

            <div>
                <label htmlFor={`impressions-${experienceName}`} className="block text-md font-bold text-gray-700 mb-2 font-sans">
                    Deixe aqui outras impressões e percepções sobre essa vivência. <span className="font-normal text-gray-500">(Opcional)</span>
                </label>
                <p className="text-sm text-gray-500 mb-2 font-sans">O que você viu, sentiu ou aprendeu junto com as crianças?</p>
                <textarea
                    id={`impressions-${experienceName}`}
                    rows={4}
                    value={feedback.impressions}
                    onChange={handleImpressionsChange}
                    placeholder="Compartilhe seus pensamentos..."
                    className="w-full p-3 border border-brand-cream rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150 ease-in-out bg-white/70 shadow-inner font-sans"
                />
            </div>
        </div>
    );
};
