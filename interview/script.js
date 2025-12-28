// Global variables
let currentTopic = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let questions = {};
let progress = JSON.parse(localStorage.getItem('progress')) || {};
let studyMode = 'normal'; // normal, flashcard, exam
let filteredQuestions = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
    initializeEventListeners();
    animateStats();
    initializeSmoothScroll();
});

// Load questions from JSON files
async function loadQuestions() {
    const topics = ['switching', 'routing', 'security', 'wireless', 'ethical-hacking', 'sdwan', 'cloud', 'automation', 'management', 'clearpass', 'cisco-ise', 'firewalls', 'f5-loadbalancer', 'infoblox', 'python-automation', 'pqc'];
    
    // Show loading state
    showNotification('Loading questions...');
    
    for (let topic of topics) {
        try {
            const response = await fetch(`data/${topic}.json`);
            if (response.ok) {
                questions[topic] = await response.json();
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.error(`Failed to load ${topic}:`, error);
            questions[topic] = getEmbeddedQuestions(topic);
        }
    }
    
    // Load bookmarks and progress after questions are loaded
    loadBookmarks();
    loadProgress();
    showNotification('Questions loaded successfully!');
}

// Get embedded questions (fallback)
function getEmbeddedQuestions(topic) {
    // This will return a subset of questions for each topic
    // In production, all questions would be loaded from JSON files
    return [
        {
            id: 1,
            question: `Sample question for ${topic}`,
            answer: `Sample answer for ${topic}`,
            realWorld: `Real-world example for ${topic}`,
            difficulty: 'CCNA',
            category: topic
        }
    ];
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Topic cards
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => {
            currentTopic = card.dataset.topic;
            currentQuestionIndex = 0;
            loadQuestion();
            scrollToSection('practice');
        });
    });

    // Study mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setStudyMode(btn.dataset.mode);
        });
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Load bookmarks when navigating to bookmarks section
            if (targetId === 'bookmarks') {
                loadBookmarks();
            }
            
            scrollToSection(targetId);
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Search input enter key
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchQuestions();
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize smooth scroll behavior
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Animate statistics on load
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Load question
function loadQuestion() {
    const topicQuestions = questions[currentTopic];
    if (!topicQuestions || topicQuestions.length === 0) {
        showNotification('No questions available for this topic');
        return;
    }
    
    const question = topicQuestions[currentQuestionIndex];
    if (!question) {
        showNotification('Question not found');
        return;
    }
    
    // Update question display
    document.querySelector('.question-number').textContent = `Question ${currentQuestionIndex + 1}`;
    document.querySelector('.question-topic').textContent = `${formatTopicName(currentTopic)} / ${formatCategoryName(question.category)}`;
    
    // Update difficulty badge
    const badge = document.querySelector('.difficulty-badge');
    badge.textContent = question.difficulty;
    badge.className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
    
    // Update question content
    document.querySelector('.question h3').textContent = question.question;
    
    // Update answer
    const answerContent = document.querySelector('.answer-content');
    answerContent.innerHTML = `
        <h4>Answer (Study & Explanation):</h4>
        <p>${question.answer}</p>
        ${question.realWorld ? `
            <div class="real-world">
                <h4><i class="fas fa-building"></i> Real-World / Enterprise Context:</h4>
                <p>${question.realWorld}</p>
            </div>
        ` : ''}
    `;
    
    // Hide answer initially
    document.getElementById('answer').style.display = 'none';
    document.querySelector('.toggle-btn').innerHTML = '<i class="fas fa-eye"></i> Show Answer';
    
    // Update bookmark state
    updateBookmarkButton();
    
    // Mark as viewed in progress
    markQuestionAsViewed();
}

// Toggle answer visibility
function toggleAnswer() {
    const answer = document.getElementById('answer');
    const button = document.querySelector('.toggle-btn');
    
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
    } else {
        answer.style.display = 'none';
        button.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
    }
}

// Navigate questions
function nextQuestion() {
    const topicQuestions = questions[currentTopic];
    if (currentQuestionIndex < topicQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showNotification('You\'ve reached the last question in this topic!');
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Bookmark functionality
function bookmarkQuestion() {
    const topicQuestions = questions[currentTopic];
    if (!topicQuestions || !topicQuestions[currentQuestionIndex]) {
        showNotification('No question to bookmark');
        return;
    }
    
    const questionId = topicQuestions[currentQuestionIndex].id;
    const bookmarkBtn = document.querySelector('.bookmark');
    
    if (!progress[currentTopic]) {
        progress[currentTopic] = {
            viewed: [],
            bookmarked: [],
            completed: []
        };
    }
    
    if (progress[currentTopic].bookmarked.includes(questionId)) {
        progress[currentTopic].bookmarked = progress[currentTopic].bookmarked.filter(id => id !== questionId);
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
        showNotification('Bookmark removed');
    } else {
        progress[currentTopic].bookmarked.push(questionId);
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
        showNotification('Question bookmarked');
    }
    
    saveProgress();
    updateOverallProgress();
}

function updateBookmarkButton() {
    const topicQuestions = questions[currentTopic];
    if (!topicQuestions || !topicQuestions[currentQuestionIndex]) return;
    
    const questionId = topicQuestions[currentQuestionIndex].id;
    const bookmarkBtn = document.querySelector('.bookmark');
    
    if (progress[currentTopic] && progress[currentTopic].bookmarked.includes(questionId)) {
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
    } else {
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
    }
}

// Study modes
function setStudyMode(mode) {
    const questionContainer = document.querySelector('.question-container');
    
    switch(mode) {
        case 'flashcard':
            questionContainer.classList.add('flashcard-mode');
            document.getElementById('answer').style.display = 'none';
            document.querySelector('.question h3').addEventListener('click', toggleAnswer);
            showNotification('Flashcard mode: Click question to reveal answer');
            break;
        case 'exam':
            questionContainer.classList.remove('flashcard-mode');
            document.getElementById('answer').style.display = 'none';
            showNotification('Exam mode: Test yourself!');
            break;
        default:
            questionContainer.classList.remove('flashcard-mode');
            document.querySelector('.question h3').removeEventListener('click', toggleAnswer);
    }
}

// Progress tracking
function markQuestionAsViewed() {
    const topicQuestions = questions[currentTopic];
    if (!topicQuestions || !topicQuestions[currentQuestionIndex]) return;
    
    if (!progress[currentTopic]) {
        progress[currentTopic] = {
            viewed: [],
            bookmarked: [],
            completed: []
        };
    }
    
    const questionId = topicQuestions[currentQuestionIndex].id;
    if (!progress[currentTopic].viewed.includes(questionId)) {
        progress[currentTopic].viewed.push(questionId);
        saveProgress();
        updateTopicProgress();
        updateOverallProgress();
    }
}

function markQuestionAsCompleted() {
    const topicQuestions = questions[currentTopic];
    if (!topicQuestions || !topicQuestions[currentQuestionIndex]) return;
    
    if (!progress[currentTopic]) {
        progress[currentTopic] = {
            viewed: [],
            bookmarked: [],
            completed: []
        };
    }
    
    const questionId = topicQuestions[currentQuestionIndex].id;
    if (!progress[currentTopic].completed.includes(questionId)) {
        progress[currentTopic].completed.push(questionId);
        saveProgress();
        updateTopicProgress();
        updateOverallProgress();
    }
}

function saveProgress() {
    localStorage.setItem('progress', JSON.stringify(progress));
}

function loadProgress() {
    updateAllTopicProgress();
    updateOverallProgress();
}

function updateTopicProgress() {
    const topicCard = document.querySelector(`[data-topic="${currentTopic}"]`);
    if (!topicCard) return;
    
    const topicQuestions = questions[currentTopic] || [];
    const topicProgress = progress[currentTopic] || { viewed: [] };
    const viewedCount = topicProgress.viewed.length;
    const totalCount = topicQuestions.length;
    const percentage = totalCount > 0 ? (viewedCount / totalCount) * 100 : 0;
    
    const progressFill = topicCard.querySelector('.progress-fill');
    const progressText = topicCard.querySelector('.progress-text');
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${viewedCount}/${totalCount}`;
}

function updateAllTopicProgress() {
    Object.keys(questions).forEach(topic => {
        const topicCard = document.querySelector(`[data-topic="${topic}"]`);
        if (!topicCard) return;
        
        const topicQuestions = questions[topic] || [];
        const topicProgress = progress[topic] || { viewed: [] };
        const viewedCount = topicProgress.viewed.length;
        const totalCount = topicQuestions.length;
        const percentage = totalCount > 0 ? (viewedCount / totalCount) * 100 : 0;
        
        const progressFill = topicCard.querySelector('.progress-fill');
        const progressText = topicCard.querySelector('.progress-text');
        
        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${viewedCount}/${totalCount}`;
    });
}

function updateOverallProgress() {
    let totalViewed = 0;
    let totalQuestions = 0;
    
    Object.keys(questions).forEach(topic => {
        const topicQuestions = questions[topic] || [];
        const topicProgress = progress[topic] || { viewed: [] };
        
        totalViewed += topicProgress.viewed.length;
        totalQuestions += topicQuestions.length;
    });
    
    const percentage = totalQuestions > 0 ? Math.round((totalViewed / totalQuestions) * 100) : 0;
    
    // Update circular progress
    const circularProgress = document.querySelector('.circular-progress svg circle:nth-child(2)');
    const progressValue = document.querySelector('.progress-value');
    
    if (circularProgress) {
        circularProgress.style.setProperty('--percent', percentage);
    }
    if (progressValue) {
        progressValue.textContent = `${percentage}%`;
    }
    
    // Update stats
    document.querySelector('.stat-item:first-child .stat-value').textContent = totalViewed;
    
    // Count total bookmarks
    let totalBookmarks = 0;
    Object.keys(progress).forEach(topic => {
        if (progress[topic].bookmarked) {
            totalBookmarks += progress[topic].bookmarked.length;
        }
    });
    document.querySelector('.stat-item:nth-child(2) .stat-value').textContent = totalBookmarks;
}

// Start learning
function startLearning() {
    scrollToSection('topics');
}

// Random quiz
function randomQuiz() {
    const allQuestions = [];
    
    Object.keys(questions).forEach(topic => {
        questions[topic].forEach((question, index) => {
            allQuestions.push({
                topic: topic,
                index: index,
                ...question
            });
        });
    });
    
    if (allQuestions.length === 0) {
        showNotification('No questions available yet!');
        return;
    }
    
    const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    currentTopic = randomQuestion.topic;
    currentQuestionIndex = randomQuestion.index;
    
    loadQuestion();
    scrollToSection('practice');
    showNotification('Random question loaded!');
}

// Utility functions
function formatTopicName(topic) {
    return topic.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatCategoryName(category) {
    if (!category) return 'General';
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality
function searchQuestions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const difficulty = document.getElementById('difficultyFilter').value;
    const topic = document.getElementById('topicFilter').value;
    
    if (!searchTerm && !difficulty && !topic) {
        showNotification('Please enter search criteria');
        return;
    }
    
    filteredQuestions = [];
    
    // Load all topics and filter
    const topics = ['switching', 'routing', 'security', 'wireless', 'ethical-hacking', 'sdwan', 'cloud', 'automation', 'management', 'clearpass', 'cisco-ise', 'firewalls', 'f5-loadbalancer', 'infoblox', 'python-automation', 'pqc'];
    let loadedCount = 0;
    
    topics.forEach(t => {
        const topicQuestions = questions[t] || [];
        const filtered = topicQuestions.filter(q => {
            const matchSearch = !searchTerm || 
                q.question.toLowerCase().includes(searchTerm) || 
                q.answer.toLowerCase().includes(searchTerm) || 
                q.category.toLowerCase().includes(searchTerm);
            
            const matchDifficulty = !difficulty || q.difficulty === difficulty;
            const matchTopic = !topic || t === topic;
            
            return matchSearch && matchDifficulty && matchTopic;
        });
        
        filtered.forEach(q => {
            filteredQuestions.push({ ...q, topic: t });
        });
        
        loadedCount++;
        if (loadedCount === topics.length) {
            displaySearchResults();
        }
    });
}

// Display search results
function displaySearchResults() {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    
    if (filteredQuestions.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No questions found matching your criteria.</p>';
        return;
    }
    
    filteredQuestions.forEach(q => {
        const resultEl = document.createElement('div');
        resultEl.className = 'search-result';
        resultEl.innerHTML = `
            <div class="result-header">
                <span class="result-topic">${formatTopicName(q.topic)}</span>
                <span class="result-difficulty ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
            </div>
            <div class="result-question">Q${q.id}: ${q.question}</div>
            <div class="result-category">${q.category}</div>
        `;
        
        resultEl.addEventListener('click', function() {
            currentTopic = q.topic;
            currentQuestionIndex = questions[currentTopic].findIndex(question => question.id === q.id);
            loadQuestion();
            scrollToSection('practice');
        });
        
        searchResults.appendChild(resultEl);
    });
    
    showNotification(`Found ${filteredQuestions.length} questions`);
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('difficultyFilter').value = '';
    document.getElementById('topicFilter').value = '';
    document.getElementById('searchResults').innerHTML = '';
    filteredQuestions = [];
}

// Load bookmarks
function loadBookmarks() {
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';
    
    let allBookmarks = [];
    for (const topic in progress) {
        if (progress[topic].bookmarked && progress[topic].bookmarked.length > 0) {
            const topicQuestions = questions[topic] || [];
            progress[topic].bookmarked.forEach(qId => {
                const question = topicQuestions.find(q => q.id === qId);
                if (question) {
                    allBookmarks.push({ ...question, topic });
                }
            });
        }
    }
    
    if (allBookmarks.length === 0) {
        bookmarkList.innerHTML = '<p class="no-bookmarks">No bookmarks yet!</p>';
    } else {
        allBookmarks.sort((a, b) => a.id - b.id);
        allBookmarks.forEach(q => {
            const bookmarkEl = createBookmarkElement(q);
            bookmarkList.appendChild(bookmarkEl);
        });
    }
}

// Create bookmark element
function createBookmarkElement(question) {
    const div = document.createElement('div');
    div.className = 'bookmark-item';
    div.innerHTML = `
        <div class="bookmark-header">
            <span class="bookmark-topic">${formatTopicName(question.topic)}</span>
            <button class="remove-bookmark" onclick="removeBookmark('${question.topic}', ${question.id})">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="bookmark-question">Q${question.id}: ${question.question}</div>
    `;
    
    div.addEventListener('click', function(e) {
        if (!e.target.closest('.remove-bookmark')) {
            currentTopic = question.topic;
            currentQuestionIndex = questions[currentTopic].findIndex(q => q.id === question.id);
            loadQuestion();
            scrollToSection('practice');
        }
    });
    
    return div;
}

// Remove bookmark
function removeBookmark(topic, questionId) {
    if (progress[topic] && progress[topic].bookmarked) {
        const index = progress[topic].bookmarked.indexOf(questionId);
        if (index > -1) {
            progress[topic].bookmarked.splice(index, 1);
            saveProgress();
            loadBookmarks();
            updateOverallProgress();
            showNotification('Bookmark removed!');
        }
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .flashcard-mode .question {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .flashcard-mode .question:hover {
        transform: scale(1.02);
    }
    
    .flashcard-mode .answer-toggle {
        display: none;
    }
`;
document.head.appendChild(style);
