"use client"; // Asegúrate de que este archivo se ejecute en el cliente

import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const WordChanger = () => {
  // Crea una referencia al elemento donde se montará el Typed
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    // Si el ref existe, inicializa el componente Typed
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ['Hola', 'Hello', 'Bonjour', 'Hallo', 'Ciao', 'Olá', 'Salut'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
      });
    }

    // Destruye el componente Typed al desmontar el componente React
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    < >
      {/* Aquí montaremos el Typed */}
      <span className="h1 mb-6 font-bold" ref={el} />
    </>
  );
};

export default WordChanger
