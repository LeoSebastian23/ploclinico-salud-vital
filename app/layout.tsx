'use client';
import Header from '@/components/Header'; // Asegúrate de que la ruta sea correcta
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Policlínico Salud Vital</title>
        <meta name="description" content="Cuidando tu bienestar, siempre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header/> {/* Header modularizado */}
        {children} {/* Contenido específico de cada página */}
        <footer className="bg-gray-200 text-center py-4">
          <p className="text-blue-600" >&copy; 2024 Policlínico Salud Vital. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}


