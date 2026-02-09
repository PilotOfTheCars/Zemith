// Importing the PeerJS library
import Peer from 'peerjs';

// Initialize the peer connection
const peer = new Peer();

// Function to connect to another peer
function connectToPeer(peerId) {
    const conn = peer.connect(peerId);

    conn.on('open', () => {
        console.log('Connected to peer:', peerId);
    });

    conn.on('data', (data) => {
        console.log('Received data:', data);
    });
}

// Chat functionality
function sendMessage(peerId, message) {
    const conn = peer.connect(peerId);
    conn.send(message);
}

// Flashcard synchronization functionality
function syncFlashcards(flashcards) {
    const conn = peer.connect('flashcardSyncPeerId');
    conn.send({ type: 'syncFlashcards', data: flashcards });
}

// To-do list synchronization functionality
function syncTodoList(todoList) {
    const conn = peer.connect('todoSyncPeerId');
    conn.send({ type: 'syncTodo', data: todoList });
}

// Expose the functions globally
window.connectToPeer = connectToPeer;
window.sendMessage = sendMessage;
window.syncFlashcards = syncFlashcards;
window.syncTodoList = syncTodoList;

// Log peer ID
peer.on('open', (id) => {
    console.log('My peer ID is:', id);
});
