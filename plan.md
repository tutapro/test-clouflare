1. **Explore & Setup**: Create a basic `index.html` structure with Tailwind CSS, Google Fonts (Poppins), and Font Awesome for UI icons.
2. **UI Implementation**: Implement a modern, responsive, mobile-first UI with gradient backgrounds and glassmorphism styling. Include Vietnamese labels for Title, Score, High Score, and buttons.
3. **Game Logic (Snake)**: Implement the core Snake game loop using HTML5 Canvas. Handle snake movement, eating food, growing, and game over conditions (colliding with walls or self).
4. **Touch Controls**: Add `touchstart` and `touchend` event listeners to the canvas/document to support swipe gestures for mobile (iPhone) without using on-screen buttons. Ensure `touch-action: none` to prevent scrolling.
5. **Auto-Play Feature**: Implement a "Tự động chơi" (Auto-play) toggle. When active, use a pathfinding algorithm (like BFS) to calculate the best move towards the food, falling back to any safe move if no direct path exists.
6. **Pre-commit Steps**: Ensure proper testing, verification, review, and reflection are done by calling the pre-commit instructions.
7. **Submit**: Submit the change.
