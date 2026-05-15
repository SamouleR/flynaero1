import React, { useEffect, useState } from 'react';
import './AiAssistant.css';

export default function AiAssistant() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'upload'

    // We need to re-initialize lucide icons since they are added dynamically via script
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, [isModalOpen, activeTab]);

    return (
        <>
            {/* BOUTON IA FLOTTANT */}
            <div className="ai-float-btn" onClick={() => setIsModalOpen(true)}>
                <i data-lucide="bot" className="w-8 h-8"></i>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#02060c] animate-pulse">
                </div>
            </div>

            {/* MODAL ASSISTANT IA */}
            {isModalOpen && (
                <div id="aiModal" style={{ display: 'block', fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'white' }}>
                    <div className="modal-wrapper">
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#00f2ff]/10 flex items-center justify-center border border-[#00f2ff]/30">
                                    <i data-lucide="zap" className="w-5 h-5 text-[#00f2ff]"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-wide">Flynaero Assistant</h3>
                                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">En ligne</p>
                                </div>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-white/30 hover:text-white transition-colors">
                                <i data-lucide="x" className="w-6 h-6"></i>
                            </button>
                        </div>

                        {/* Content Area: CHAT */}
                        {activeTab === 'chat' && (
                            <div id="chatView" className="flex-grow p-6 overflow-y-auto flex flex-col">
                                <div className="chat-bubble bubble-ai">
                                    Salut ! Je suis l'assistant technique Flynaero. Je peux t'aider à configurer tes simulations
                                    DPSM ou analyser tes résultats de charge structurelle. Que souhaites-tu faire aujourd'hui ?
                                </div>
                                <div className="mt-auto">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                                        <input type="text" placeholder="Écris ton message..."
                                            className="flex-grow bg-transparent border-none focus:ring-0 text-sm px-3 text-white" style={{outline: 'none'}} />
                                        <button className="w-10 h-10 rounded-lg bg-[#00f2ff] text-black flex items-center justify-center shrink-0">
                                            <i data-lucide="send" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Content Area: UPLOAD */}
                        {activeTab === 'upload' && (
                            <div id="uploadView" className="flex-grow p-8 flex flex-col items-center justify-center text-center">
                                <div className="w-full h-full flex flex-col items-center justify-center drop-zone rounded-3xl p-10 border-dashed">
                                    <div className="w-16 h-16 rounded-2xl bg-[#00f2ff]/10 flex items-center justify-center mb-6">
                                        <i data-lucide="upload-cloud" className="w-8 h-8 text-[#00f2ff]"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Données de Simulation</h3>
                                    <p className="text-white/40 text-sm mb-8 max-w-[240px]">
                                        Glisse tes fichiers **Excel** ou **CSV** ici pour une analyse causale immédiate.
                                    </p>
                                    <button className="bg-[#00f2ff]/20 hover:bg-[#00f2ff]/30 text-[#00f2ff] border border-[#00f2ff]/50 px-8 py-3 rounded-xl font-bold text-sm transition-all">
                                        Sélectionner un fichier
                                    </button>
                                    <p className="mt-6 text-[10px] text-white/20 uppercase tracking-widest font-bold">
                                        Formats acceptés : .XLSX, .CSV, .JSON
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Bottom Navigation */}
                        <div className="p-6 bg-black/40 flex justify-center border-t border-white/5">
                            <div className="nav-pill">
                                <div className={`nav-item ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
                                    <i data-lucide="message-square" className="w-4 h-4"></i>
                                    <span>Chat</span>
                                </div>
                                <div className={`nav-item ${activeTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveTab('upload')}>
                                    <i data-lucide="file-text" className="w-4 h-4"></i>
                                    <span>Données</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
