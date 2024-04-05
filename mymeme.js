document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('createMeme');
    const memeList = document.querySelector('.meme-list'); // Select the container for holding memes
    
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        const topText = document.getElementById('top').value.trim(); // Trim whitespace
        const bottomText = document.getElementById('bottom').value.trim(); // Trim whitespace
        const imageUrl = document.getElementById('imageURL').value.trim(); // Trim whitespace
    
        // Check if any of the fields are empty
        if (topText === '' || bottomText === '' || imageUrl === '') {
            alert('Please fill in all fields');
            return; // Stop further execution
        }
    
        const memeContainer = document.createElement('div');
        memeContainer.classList.add('meme-container');
    
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.style.width = '200px'; // Fixed width for all images
        imageElement.style.height = 'auto'; // Maintain aspect ratio
    
        const topTextElement = document.createElement('div');
        topTextElement.classList.add('top-text');
        topTextElement.textContent = topText;
    
        const bottomTextElement = document.createElement('div');
        bottomTextElement.classList.add('bottom-text');
        bottomTextElement.textContent = bottomText;
    
        memeContainer.appendChild(topTextElement);
        memeContainer.appendChild(imageElement);
        memeContainer.appendChild(bottomTextElement);
    
        memeList.appendChild(memeContainer); // Append meme container to the meme list container
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            memeContainer.remove(); // Remove the meme container when the delete button is clicked
            deleteButton.remove(); // Remove the delete button itself
        });
    
        memeList.appendChild(deleteButton); // Append the delete button to the meme list container
    
        // Clear input fields after submission
        document.getElementById('top').value = '';
        document.getElementById('bottom').value = '';
        document.getElementById('imageURL').value = '';
    });
});
