//your JS code here. If required.
 Create the container
const container = document.createElement('div');
container.className = 'container';

// Array of block classes
const blockClasses = ['red', 'green', 'yellow'];

// Create blocks and append to container
blockClasses.forEach((blockClass) => {
  const block = document.createElement('div');
  block.className = `block ${blockClass}`;
  container.appendChild(block);
});

// Append container to the main container
document.getElementById('main-container').appendChild(container);
Features: