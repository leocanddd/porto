document.addEventListener("DOMContentLoaded", function(event) {
    const moveBtn = document.querySelector('#move-btn');
    const character = document.querySelector('#character');
    const textContainer = document.querySelector('#text-container');

    let position = 0;

    const moveCharacter = () => {
        position += 10;
        character.style.left = `${position}px`;
        textContainer.style.left = `${position + 100}px`;
        
    };

    moveBtn.addEventListener('click', moveCharacter);
});

// Generate snowflakes
const snowflakeContainer = document.querySelector('.snowflakes');
const numSnowflakes = 50; // Number of snowflakes to generate

for (let i = 0; i < numSnowflakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDelay = `${Math.random() * 10}s`;
  snowflakeContainer.appendChild(snowflake);
}
