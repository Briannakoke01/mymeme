document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('createMeme');
    const memeList = document.querySelector('.meme-list'); 
    
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        const topText = document.getElementById('top').value.trim(); 
        const bottomText = document.getElementById('bottom').value.trim(); 
        const imageUrl = document.getElementById('imageURL').value.trim(); 
    
        
        if (topText === '' || bottomText === '' || imageUrl === '') {
            alert('Please fill in all fields');
            return;
        }
    
        const memeContainer = document.createElement('div');
        memeContainer.classList.add('meme-container');
    
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.style.width = '200px'; 
        imageElement.style.height = '200px'; 
    
        const topTextElement = document.createElement('div');
        topTextElement.classList.add('top-text');
        topTextElement.textContent = topText;
    
        const bottomTextElement = document.createElement('div');
        bottomTextElement.classList.add('bottom-text');
        bottomTextElement.textContent = bottomText;
    
        memeContainer.appendChild(topTextElement);
        memeContainer.appendChild(imageElement);
        memeContainer.appendChild(bottomTextElement);
    
        memeList.appendChild(memeContainer); 
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            memeContainer.remove(); 
            deleteButton.remove(); 
        });
    
        memeList.appendChild(deleteButton); 
    
    
        document.getElementById('top').value = '';
        document.getElementById('bottom').value = '';
        document.getElementById('imageURL').value = '';
    });
});
