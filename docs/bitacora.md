🧭 Bitácora del Portafolio 3D - Alex Alarcón
🟢 Estado actual (al 20 de julio de 2025):
Modo oscuro y claro funcionales.

✅ Implementado con useEffect y Tailwind.

✅ Cambios dinámicos en colores, fondo, botones, texto, loader y barra de scroll.

Escena 3D activa:

Componente: SkyScene.jsx

✅ Contiene cielo 3D que se adapta al modo.

✅ Detecta si es modo claro o modo oscuro para mostrar el entorno correspondiente.

🎨 Diseño 3D según el modo:
☀️ Modo claro:
Fondo celeste tipo cielo.

Animaciones en progreso:

 ☁️ Nubes en movimiento.

 🐦 Pájaro volando.

 🌞 Sol girando o flotando lentamente.

🌑 Modo oscuro:
Fondo oscuro tipo espacio.

Animaciones planificadas:

 🌕 Luna flotando.

 ✨ Estrellas parpadeantes y moviéndose sutilmente.

 ☄️ Cometa cruzando el cielo.

📝 Decisión creativa: Se optó por representar el contraste entre día y noche con elementos naturales y animaciones suaves, para ofrecer una experiencia visual inmersiva que refuerce el estilo del portafolio.

📁 Estructura de carpetas en GitHub (verificada en tu repo):
components/

sections/ (Hero.jsx, Projects.jsx, Contact.jsx)

styles/

assets/

three/ ➜ Aquí podemos guardar los modelos 3D, texturas o configuraciones específicas para Three.js (a crear si no existe).

🧩 Siguiente paso propuesto:
✅ Empezar con el modo claro:

Crear e integrar el Sol (esfera amarilla con glow).

Agregar 1 pájaro animado en Three.js (modelo básico o primitivo).

Generar 2–3 nubes en movimiento horizontal.