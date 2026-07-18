1. **Initialize `index.html`**: Create the basic HTML structure, include Tailwind CSS, Google Fonts (Poppins), and FontAwesome.
2. **Setup UI Layout**: Implement a mobile-first UI with a gradient background, glassmorphism elements, HUD (Score, Timer, High Score), a Canvas for the game, and on-screen D-Pad controls.
3. **Add Modals**: Create Start and Game Over modals with Vietnamese labels.
4. **Game Logic (JavaScript)**:
   - Implement a grid-based "Cat hunting mouse" game.
   - Cat movement (continuous in current direction, grid wrapping).
   - Mouse placement (random, maybe moves slowly).
   - Collision detection.
   - Score and Timer management.
5. **Input Handling**: Keyboard arrows, on-screen D-pad buttons, and swipe gestures.
6. **Audio System**: Use Web Audio API for sound effects (catch, game over, click).
7. **Storage**: Save High Score to `localStorage`.
8. **Testing & Refining**: Check responsiveness, animations, and game loop. Verify pre-commit steps.
