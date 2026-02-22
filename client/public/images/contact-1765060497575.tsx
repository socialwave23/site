import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission logic (would typically send to backend)
        alert('Grazie per averci contattato! Ti risponderemo presto.');
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column: Info */}
                    <div>
                        <h1 className="text-5xl font-black text-social-dark mb-6">Parliamo del tuo progetto.</h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Siamo pronti ad ascoltare la tua storia e a trasformarla in strategia.
                            Compila il form o vieni a trovarci.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-4 rounded-2xl text-social-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-social-dark">Email</h3>
                                    <p className="text-gray-600">info@socialwave.it</p>
                                    <p className="text-gray-600">careers@socialwave.it</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-4 rounded-2xl text-social-blue">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-social-dark">Telefono</h3>
                                    <p className="text-gray-600">+39 02 1234 5678</p>
                                    <p className="text-gray-400 text-sm">Lun-Ven, 9:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-4 rounded-2xl text-social-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-social-dark">Studio</h3>
                                    <p className="text-gray-600">Via della Creatività, 42</p>
                                    <p className="text-gray-600">20121 Milano (MI)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Nome</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="Mario Rossi"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Azienda</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="La tua Azienda Srl"
                                        value={formData.company}
                                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    placeholder="mario@email.it"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Messaggio</label>
                                <textarea 
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                    placeholder="Raccontaci i tuoi obiettivi..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-social-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                Invia Messaggio <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};