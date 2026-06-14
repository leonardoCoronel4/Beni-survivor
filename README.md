# Beni vs. las Leyendas

Juego 2D de supervivencia con vista cenital, estilo *Vampire Survivors*. Beni, un estudiante,
debe sobrevivir hasta el amanecer en el patio de la escuela enfrentando animales y leyendas
urbanas latinoamericanas usando sus útiles escolares.

Todo el arte es **pixel-art propio generado por código** (sin emojis ni archivos externos):
cada enemigo, arma, efecto y elemento del escenario tiene su sprite con animación de 2-3 frames
(caminata, aleteo, flotación), más animaciones de aparición, golpe y muerte. El patio nocturno
tiene césped texturizado, árboles, faroles con luz cálida, bancos, iluminación dinámica
(linterna alrededor de Beni), luciérnagas y viñeta.

## Cómo jugar

Abrí `index.html` en cualquier navegador (Chrome/Edge/Firefox). No necesita instalación ni servidor.

> Tip de desarrollo: abrí `index.html#sprites` para ver la galería completa de sprites animados.

- **WASD / Flechas**: moverse (las armas atacan solas)
- **P / Esc**: pausa · **M**: silenciar · **1/2/3 o click**: elegir mejora al subir de nivel
- Juntá los **diamantes de experiencia** que sueltan los enemigos para subir de nivel.
- Derrotá al **Silbón** (aparece en el minuto 11) para ganar.

## Armas (máx. 6, nivel 1–8)

| Arma | Tipo |
|---|---|
| Libro Boomerang | Va y vuelve atravesando enemigos (inicial) |
| Mochila Escudo | Orbita alrededor tuyo y empuja |
| Termo de Acero | Golpe melee en arco con gran empuje |
| Avión de Papel | Proyectil teledirigido |
| Regla Láser | Rayo recto que atraviesa todo |
| Compás Trazador | Anillo de energía expansivo |
| Tijeras Saltarinas | Rebota de enemigo en enemigo |
| Calculadora Eléctrica | Relámpago en cadena que aturde |
| Tiza Explosiva | Explosión + nube de polvo que frena |
| Pelota N°5 | Rebota por la pantalla atropellando |
| Goma Mágica | Puede BORRAR enemigos de la existencia |
| Lluvia de Grapas | Ráfaga rápida de grapas |

## Pasivas (nivel 1–5)

Zapatillas (velocidad) · Lentes (área) · Vianda (regeneración) · Carpeta (+XP) ·
Guardapolvo (vida y armadura) · Mate (recarga) · Imán de figuritas (atrae XP)

## Enemigos

**Animales comunes** (van apareciendo con el tiempo): rata, murciélago, araña,
víbora, alacrán, puma, jabalí (embiste), yacaré.
**Elite**: La Luz Mala, un orbe brillante que suelta un regalo.

**Jefes — leyendas urbanas**:

| Minuto | Jefe | Ataque |
|---|---|---|
| 2:00 | El Pomberito | Se teletransporta cerca tuyo |
| 4:30 | El Chupacabras | Embestidas veloces |
| 7:00 | La Llorona | Lágrimas en todas direcciones |
| 9:00 | El Lobizón | Carga devastadora tras un aviso |
| 11:00 | El Silbón | Huesos a distancia e invoca ratas (jefe final) |

## Técnico

Un único archivo `index.html`: HTML5 Canvas + JavaScript vanilla, sin dependencias.
Sprites pixel-art definidos como mapas de caracteres y rasterizados a canvas al cargar,
iluminación con canvas de luz (recortes radiales + glows aditivos), sonido con WebAudio.
