# Carpeta `designs/`

Acá viven los **diseños personalizados** del juego (personajes, enemigos, armas, etc.).

- **`sprites.js`** — lo carga el juego al arrancar. Contiene tus ediciones hechas con el
  Editor de Diseños. Gracias a este archivo, los cambios **viajan con el juego**: si le
  pasás la carpeta completa a otra persona, ya le aparecen todos tus diseños.

## Cómo guardar cambios acá

1. Abrí `index.html`, entrá al **Editor de Diseños** (botón del menú o tecla **F2**).
2. Editá lo que quieras. Se autoguarda en tu navegador.
3. Tocá **💾 Guardar en archivo** → se descarga un `sprites.js`.
4. **Reemplazá** `designs/sprites.js` con el que se descargó.

Para compartir el juego: pasá la carpeta entera (`index.html` + `designs/` +
`Characters base design/`). La otra persona abre `index.html` y ve todo actualizado.
