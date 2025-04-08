
document.addEventListener('DOMContentLoaded', function() {
    // Math game variables
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const optionsContainer = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const newProblemBtn = document.getElementById('new-problem');
    
    let currentAnswer = 0;
    let score = 0;
    
    // Start the game
    generateProblem();
    
    // Set up event listeners
    if (optionsContainer) {
        optionsContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('option')) {
                checkAnswer(parseInt(event.target.textContent));
            }
        });
    }
    
    if (newProblemBtn) {
        newProblemBtn.addEventListener('click', generateProblem);
    }
    
    // Generate a new addition problem
    function generateProblem() {
        // Clear any previous correct/incorrect classes
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('correct', 'incorrect');
        });
        
        // Generate two random numbers between 0 and 9
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        
        // Update the displayed numbers
        num1Element.textContent = num1;
        num2Element.textContent = num2;
        
        // Calculate the answer
        currentAnswer = num1 + num2;
        
        // Generate answer options (including the correct answer)
        const answerOptions = [currentAnswer];
        
        // Generate 5 more unique options
        while (answerOptions.length < 6) {
            const randomOption = Math.floor(Math.random() * 19); // Random number between 0 and 18
            if (!answerOptions.includes(randomOption)) {
                answerOptions.push(randomOption);
            }
        }
        
        // Shuffle the options
        shuffle(answerOptions);
        
        // Update the option buttons
        const optionButtons = document.querySelectorAll('.option');
        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].textContent = answerOptions[i];
        }
        
        // Reset the answer box
        document.querySelector('.answer-box').textContent = '?';
    }
    
    // Check if the selected answer is correct
    function checkAnswer(selectedAnswer) {
        const options = document.querySelectorAll('.option');
        const answerBox = document.querySelector('.answer-box');
        
        options.forEach(option => {
            const optionValue = parseInt(option.textContent);
            
            if (optionValue === selectedAnswer) {
                if (selectedAnswer === currentAnswer) {
                    option.classList.add('correct');
                    score++;
                    scoreElement.textContent = score;
                    answerBox.textContent = selectedAnswer;
                    
                    // Generate a new problem after a brief delay
                    setTimeout(generateProblem, 1500);
                } else {
                    option.classList.add('incorrect');
                }
            }
        });
    }
    
    // Function to shuffle an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
// Add this to your project1.js file
document.addEventListener('DOMContentLoaded', function() {
    // Number game functionality
    let numberlist = document.querySelector("#numberlist");
    
    if (numberlist) {
        // Track which number we're counting at
        let currentCount = 1;
        
        // Click event for the number counting game
        numberlist.addEventListener("click", function(event) {
            // Check if the clicked element is a 'li'
            if (event.target.tagName.toLowerCase() === 'li') {
                let clickedNumber = parseInt(event.target.textContent);
                
                // If this is the correct next number in the sequence
                if (clickedNumber === currentCount) {
                    // Add 'counted' class
                    event.target.classList.add('counted');
                    
                    // Increment the count
                    currentCount++;
                    
                    // Play a sound effect (optional)
                    let audio = new Audio('https://cdn.freesound.org/previews/521/521641_7781361-lq.mp3');
                    audio.volume = 0.3;
                    audio.play().catch(error => console.log("Audio play failed:", error));
                    
                    // If we've reached the end of the list
                    if (currentCount > numberlist.children.length) {
                        setTimeout(() => {
                            alert("Great job! You counted all the numbers!");
                            // Reset the game
                            resetNumberGame();
                        }, 500);
                    }
                } else {
                    // Wrong number
                    event.target.classList.add('wrong');
                    setTimeout(() => {
                        event.target.classList.remove('wrong');
                    }, 500);
                }
            }
        });
        
        // Function to reset the number game
        function resetNumberGame() {
            currentCount = 1;
            let numbers = numberlist.querySelectorAll('li');
            numbers.forEach(number => {
                number.classList.remove('counted');
            });
        }
    } else {
        console.warn("Element with ID 'numberlist' not found in the DOM.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Animal game variables
    const animalGrid = document.getElementById('animal-grid');
    const matchesDisplay = document.getElementById('matches');
    const resetButton = document.getElementById('reset-animal-game');
    
    // List of animals
    const animals = [
        { name: 'Cat', class: 'cat' },
        { name: 'Dog', class: 'dog' },
        { name: 'Elephant', class: 'elephant' },
        { name: 'Giraffe', class: 'giraffe' },
        { name: 'Lion', class: 'lion' },
        { name: 'Monkey', class: 'monkey' }
    ];
    
    let selectedCard = null;
    let preventClick = false;
    let matches = 0;
    
    // Initialize the game
    if (animalGrid) {
        initGame();
        
        // Set up click event for the grid
        animalGrid.addEventListener('click', function(event) {
            if (preventClick) return;
            
            const clickedCard = event.target.closest('.animal-card');
            if (!clickedCard || clickedCard.classList.contains('matched')) return;
            
            handleCardClick(clickedCard);
        });
    }
    
    // Reset button event
    if (resetButton) {
        resetButton.addEventListener('click', initGame);
    }
    
    // Initialize the game
    function initGame() {
        // Reset variables
        selectedCard = null;
        preventClick = false;
        matches = 0;
        matchesDisplay.textContent = '0';
        
        // Clear the grid
        animalGrid.innerHTML = '';
        
        // Create array of all cards (animals and names)
        let cards = [];
        
        // Add animal images
        animals.forEach(animal => {
            cards.push({
                type: 'image',
                animal: animal,
                matched: false
            });
        });
        
        // Add animal names
        animals.forEach(animal => {
            cards.push({
                type: 'name',
                animal: animal,
                matched: false
            });
        });
        
        // Shuffle the cards
        shuffle(cards);
        
        // Create the cards in the grid
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'animal-card';
            
            // Add data attributes to identify the card
            cardElement.dataset.animal = card.animal.name;
            cardElement.dataset.type = card.type;
            
            if (card.type === 'image') {
                // For images, use background color with animal class
                cardElement.classList.add(card.animal.class);
                cardElement.innerHTML = ''; // Animal silhouette (using background color)
            } else {
                // For names, display the text
                cardElement.textContent = card.animal.name;
            }
            
            animalGrid.appendChild(cardElement);
        });
        
        // Remove any game complete message
        const completeMessage = document.querySelector('.game-complete');
        if (completeMessage) {
            completeMessage.parentNode.removeChild(completeMessage);
        }
    }
    
    // Handle card click
    function handleCardClick(card) {
        // Don't allow clicking the same card
        if (card === selectedCard) return;
        
        // Mark as selected
        card.classList.add('selected');
        
        if (!selectedCard) {
            // First card selected
            selectedCard = card;
        } else {
            // Second card selected, check for match
            checkForMatch(selectedCard, card);
        }
    }
    
    // Check if two cards match
    function checkForMatch(card1, card2) {
        const animal1 = card1.dataset.animal;
        const animal2 = card2.dataset.animal;
        const type1 = card1.dataset.type;
        const type2 = card2.dataset.type;
        
        // A match is when they're the same animal but different types (image/name)
        if (animal1 === animal2 && type1 !== type2) {
            // Cards match
            card1.classList.add('matched');
            card2.classList.add('matched');
            card1.classList.remove('selected');
            card2.classList.remove('selected');
            selectedCard = null;
            
            // Update matches
            matches++;
            matchesDisplay.textContent = matches;
            
            // Check if game is complete
            if (matches === animals.length) {
                setTimeout(() => {
                    const gameComplete = document.createElement('div');
                    gameComplete.className = 'game-complete';
                    gameComplete.innerHTML = '<h2>Congratulations!</h2><p>You matched all the animals!</p>';
                    document.querySelector('.animal-game').insertBefore(gameComplete, animalGrid);
                }, 500);
            }
        } else {
            // Cards don't match
            preventClick = true;
            
            setTimeout(() => {
                card1.classList.remove('selected');
                card2.classList.remove('selected');
                selectedCard = null;
                preventClick = false;
            }, 1000);
        }
    }
    
    // Function to shuffle an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Shape game variables
    const shapeElement = document.getElementById('shape');
    const shapeNameElement = document.getElementById('shape-name');
    const shapesCountElement = document.getElementById('shapes-count');
    
    // Available shapes
    const shapes = [
        { class: 'circle', name: 'Circle' },
        { class: 'square', name: 'Square' },
        { class: 'triangle', name: 'Triangle' },
        { class: 'rectangle', name: 'Rectangle' },
        { class: 'oval', name: 'Oval' },
        { class: 'diamond', name: 'Diamond' }
    ];
    
    // Track which shapes have been seen
    const seenShapes = new Set();
    let currentShapeIndex = 0;
    
    // Add the first shape to seen shapes
    seenShapes.add(currentShapeIndex);
    updateShapesCount();
    
    // Set up click event for shape
    if (shapeElement) {
        shapeElement.addEventListener('click', changeShape);
    }
    
    // Function to change the shape
    function changeShape() {
        // Remove any previous animation class
        shapeElement.classList.remove('pop-animation');
        
        // Get the next shape index (different from current)
        let nextShapeIndex;
        do {
            nextShapeIndex = Math.floor(Math.random() * shapes.length);
        } while (nextShapeIndex === currentShapeIndex);
        
        // Update current shape index
        currentShapeIndex = nextShapeIndex;
        
        // Add shape to seen shapes
        seenShapes.add(currentShapeIndex);
        
        // Update shapes count
        updateShapesCount();
        
        // Change shape class and name
        shapeElement.className = shapes[currentShapeIndex].class;
        shapeNameElement.textContent = shapes[currentShapeIndex].name;
        
        // Add animation
        void shapeElement.offsetWidth; // Trigger reflow
        shapeElement.classList.add('pop-animation');
        
        // Check if all shapes have been seen
        if (seenShapes.size === shapes.length) {
            // Show completion message
            setTimeout(() => {
                const shapeGame = document.querySelector('.shape-game');
                const completionMessage = document.createElement('div');
                completionMessage.className = 'completed';
                completionMessage.innerHTML = '<h2>Great job!</h2><p>You\'ve learned all the shapes!</p><button id="restart-shapes">Play Again</button>';
                shapeGame.appendChild(completionMessage);
                
                // Add restart button event
                document.getElementById('restart-shapes').addEventListener('click', function() {
                    seenShapes.clear();
                    seenShapes.add(currentShapeIndex);
                    updateShapesCount();
                    shapeGame.removeChild(completionMessage);
                });
            }, 1000);
        }
    }
    
    // Update the shapes count display
    function updateShapesCount() {
        shapesCountElement.textContent = seenShapes.size;
    }
});
// Add at the end of your project1.js file
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top button functionality
    // ... rest of the JS code ...
});