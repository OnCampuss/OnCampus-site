import React, { useState } from 'react';
import BackgroundSVG from '../assets/background.svg';
import emailjs from 'emailjs-com';

const Contato: React.FC = () => {
    const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Enviando...');

        emailjs
            .send(
                'service_z1ov1w8',
                'template_ddd0c2i',
                formData,
                'kE5tRFgLL91vJznT2'
            )
            .then(() => {
                setStatus('Mensagem enviada com sucesso!');
                setFormData({ nome: '', email: '', mensagem: '' });
                setTimeout(() => {
                    setStatus('');
                }, 3000);
            })
            .catch((error) => {
                console.error('Erro:', error);
                setStatus('Erro ao enviar. Tente novamente mais tarde.');
            });
    };

    return (
        <section id="contato" className="min-h-screen bg-base2 text-base1 flex flex-col justify-center items-center relative pt-12">
            <img
                src={BackgroundSVG}
                alt="Background decoration"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />
            <h2 className="text-4xl font-title font-bold mb-6">Contato</h2>
            <div className="w-64 h-1 bg-decorativa1 mb-6"></div>
            <p className="mt-2 mb-12 text-xl font-text max-w-2xl text-center">
                Entre em contato para mais informações ou sugestões!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="border-2 border-base3 p-2 mb-4 rounded-lg w-full text-black placeholder-gray-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-base3 p-2 mb-4 rounded-lg w-full text-black placeholder-gray-500"
                />
                <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="border-2 border-base3 p-2 mb-4 rounded-lg w-full text-black placeholder-gray-500"
                    rows={4}
                ></textarea>
                <button
                    type="submit"
                    className="bg-decorativa1 text-white px-8 py-2 rounded-lg hover:bg-decorativa2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-decorativa2 focus:ring-opacity-50">
                    Enviar
                </button>
                {status && <p className="mt-4 text-sm text-center">{status}</p>}
            </form>

            <div className="mt-12 flex flex-col items-center">
                <p className="mb-4 text-lg font-text text-center">
                    Já utiliza nosso aplicativo? Avalie sua experiência clicando abaixo:
                </p>
                <a
                    href="https://forms.gle/qvYgERjjqfze6u4H8" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-decorativa1 text-white px-8 py-2 rounded-lg hover:bg-decorativa2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-decorativa2 focus:ring-opacity-50">
                    Avaliar App
                </a>
            </div>
        </section>
    );
};

export default Contato;
