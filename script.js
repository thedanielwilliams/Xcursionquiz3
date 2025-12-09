// ==========================================
// Quiz Data: Archetypes
// ==========================================
const archetypes = {
    beach: {
        name: "The Chill Beach Recharger",
        tagline: "You travel to unwind, not to hustle.",
        icon: "🏖️",
        description: "You're the type who measures a good trip by how rested you feel afterwards. Slow mornings with coffee by the water, sunset views without a packed schedule, and plenty of time to just *be* — that's your sweet spot. You don't need every hour planned; you need space to breathe. A good book, warm sand, and zero FOMO is your ideal vacation state.",
        idealTrip: "A 5-day beach escape in Zanzibar with sunset dhow cruises, snorkeling at your own pace, beachfront dinners, and plenty of unscheduled time to nap, read, or stare at the ocean.",
        ctaText: "Ready to trade your to-do list for a beach towel? Join our next slow-travel beach escape designed for people who actually want to relax.",
        ctaButton: "Show me beach trips"
    },
    city: {
        name: "The Culture City Explorer",
        tagline: "You collect stories, not souvenirs.",
        icon: "🏙️",
        description: "You're happiest wandering through local markets, trying street food you can't pronounce, and getting lost in neighborhoods tourists skip. Museums, walking tours, late-night food spots, rooftop bars — you want to *feel* a city, not just see it. You travel to learn, taste, and connect with the heartbeat of a place. Cookie-cutter itineraries bore you; you want the real thing.",
        idealTrip: "A 6-day cultural immersion in Marrakech with guided medina tours, cooking classes, traditional hammam experiences, rooftop dinners, and curated local encounters.",
        ctaText: "Want trips that go beyond the Instagram spots? Join our next city adventure built for curious explorers who care about culture, not just check-ins.",
        ctaButton: "Explore city trips"
    },
    adventure: {
        name: "The Adrenaline Adventurer",
        tagline: "Comfort zones are boring. You're here for the rush.",
        icon: "⛰️",
        description: "If it doesn't get your heart racing, it's not worth the flight. You're the first to sign up for the hike, the zip-line, the quad bike, the cliff jump. You don't mind waking up early, getting a little dirty, or feeling sore the next day — that's proof you actually *did* something. You want stories you can't get from a resort. Adventure is the whole point.",
        idealTrip: "A 7-day adrenaline-packed experience in Uganda with white-water rafting on the Nile, gorilla trekking, bungee jumping, and quad biking through rural villages.",
        ctaText: "If you're tired of boring vacations, join our next adventure trip. Real activities. Real stories. No fluff.",
        ctaButton: "Find my next adventure"
    },
    wellness: {
        name: "The Nature & Wellness Seeker",
        tagline: "You travel to reconnect, not escape.",
        icon: "🌿",
        description: "Mountains over beaches. Silence over nightlife. You're looking for space to think, breathe, and reset. Whether it's yoga at sunrise, long walks through forests, or journaling by a lake, you want your trip to feel intentional. Screens off. Mind clear. You're not running from life — you're creating room to come back to it better.",
        idealTrip: "A 5-day wellness retreat in the Rwandan highlands with morning yoga, guided nature walks, meditation sessions, farm-to-table meals, and digital detox encouragement.",
        ctaText: "Ready for a trip that actually leaves you feeling recharged? Join our next nature and wellness experience designed for intentional rest.",
        ctaButton: "Show me wellness trips"
    },
    luxury: {
        name: "The Luxury Experience Lover",
        tagline: "You want the experience, not the stress.",
        icon: "✨",
        description: "You work hard, and when you travel, you want it to feel effortless. Beautiful hotels, seamless logistics, curated itineraries, and meals you'll think about for months — that's what you're paying for. You're not trying to rough it or prove anything. You want comfort, quality, and the kind of trip where everything just *works*. No DIY chaos. Just good vibes and great execution.",
        idealTrip: "A 6-day luxury escape to Cape Town with stays at boutique hotels, private wine tours in Stellenbosch, sunset helicopter rides, fine dining experiences, and a personal trip concierge.",
        ctaText: "Want a trip that feels as good as it looks? Join our next luxury experience — fully curated, beautifully executed, zero stress.",
        ctaButton: "Explore luxury trips"
    },
    social: {
        name: "The Social Group Traveller",
        tagline: "For you, the people make the place.",
        icon: "🎉",
        description: "You don't just want to see a new city — you want to experience it with people who get it. Group dinners, late-night conversations, shared inside jokes, spontaneous plans — that's what makes a trip unforgettable. You're open to meeting new people and you thrive in group settings. The destination matters, but honestly? The vibes and the crew matter more.",
        idealTrip: "A 5-day group adventure in Lagos with welcome dinners, beach club hangs, group excursions to art galleries and live music spots, plus plenty of time for banter and bonding.",
        ctaText: "Travel is better with the right people. Join our next group trip and meet your new favorite travel crew.",
        ctaButton: "Join a group trip"
    }
};

// ==========================================
// Quiz Data: Questions
// ==========================================
const questions = [
    {
        id: 1,
        text: "On the first full day of your trip, what are you most likely to do?",
        options: [
            {
                label: "A",
                text: "Sleep in, find a slow breakfast, then post up somewhere beautiful and do absolutely nothing.",
                archetypes: ["beach", "wellness"]
            },
            {
                label: "B",
                text: "Join a walking tour, explore the local streets, and hunt down the best street food.",
                archetypes: ["city"]
            },
            {
                label: "C",
                text: "Look for the nearest hike, activity, or anything that gets your adrenaline going.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "Head to a gorgeous brunch spot, then scope out rooftop bars or cool experiences for later.",
                archetypes: ["luxury", "social"]
            }
        ]
    },
    {
        id: 2,
        text: "How do you like your trips to be planned?",
        options: [
            {
                label: "A",
                text: "Fully planned for me — I just want to show up and enjoy.",
                archetypes: ["luxury", "social"]
            },
            {
                label: "B",
                text: "A loose structure with room to be spontaneous and go with the flow.",
                archetypes: ["beach", "city", "wellness"]
            },
            {
                label: "C",
                text: "I want a packed itinerary with clear activities lined up each day.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "Honestly, I just care about the vibes and the people — I'll follow the group energy.",
                archetypes: ["social"]
            }
        ]
    },
    {
        id: 3,
        text: "What matters more to you when choosing a trip?",
        options: [
            {
                label: "A",
                text: "Comfort — I'd rather pay more and feel relaxed the whole time.",
                archetypes: ["luxury", "wellness"]
            },
            {
                label: "B",
                text: "Balance — not too expensive, not too rough, just right.",
                archetypes: ["city", "beach", "social"]
            },
            {
                label: "C",
                text: "Experience — I can sacrifice comfort if it means a better story.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "Community — I care more about who I'm travelling with than where I'm going.",
                archetypes: ["social"]
            }
        ]
    },
    {
        id: 4,
        text: "Your ideal evening on a trip looks like…",
        options: [
            {
                label: "A",
                text: "Dinner by the beach or a quiet spot, then early to bed or stargazing.",
                archetypes: ["beach", "wellness"]
            },
            {
                label: "B",
                text: "Rooftop bar, live music, maybe hitting up a local club or night market.",
                archetypes: ["city", "social"]
            },
            {
                label: "C",
                text: "A night hike, bonfire, or some kind of outdoor adventure under the stars.",
                archetypes: ["adventure", "wellness"]
            },
            {
                label: "D",
                text: "Good food, good wine, and a beautifully designed space to enjoy it all in.",
                archetypes: ["luxury"]
            }
        ]
    },
    {
        id: 5,
        text: "Who are you happiest travelling with?",
        options: [
            {
                label: "A",
                text: "A small circle of close friends, my partner, or even solo.",
                archetypes: ["beach", "wellness", "luxury"]
            },
            {
                label: "B",
                text: "A fun, energetic group where I can meet new people and make new friends.",
                archetypes: ["social", "adventure"]
            },
            {
                label: "C",
                text: "Mostly on my own terms, with a few optional group activities here and there.",
                archetypes: ["city", "wellness"]
            },
            {
                label: "D",
                text: "I don't really care who — I care more about what we're doing.",
                archetypes: ["adventure"]
            }
        ]
    },
    {
        id: 6,
        text: "How far out of your comfort zone are you ready to go?",
        options: [
            {
                label: "A",
                text: "Not too far — I want to feel safe, rested, and in control.",
                archetypes: ["beach", "luxury", "wellness"]
            },
            {
                label: "B",
                text: "I'm open to new food, culture, and experiences, but nothing too extreme.",
                archetypes: ["city"]
            },
            {
                label: "C",
                text: "Very far — I want stories I can't get from staying home.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "Depends on the group — I'll do whatever everyone else is doing.",
                archetypes: ["social"]
            }
        ]
    },
    {
        id: 7,
        text: "If you had to describe the main purpose of your next trip in one word, what would it be?",
        options: [
            {
                label: "A",
                text: "Recharge",
                archetypes: ["beach", "wellness"]
            },
            {
                label: "B",
                text: "Discover",
                archetypes: ["city"]
            },
            {
                label: "C",
                text: "Challenge",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "Connect",
                archetypes: ["social"]
            }
        ]
    },
    {
        id: 8,
        text: "What pace feels right for your ideal trip?",
        options: [
            {
                label: "A",
                text: "Slow and unhurried — I want time to actually enjoy each moment.",
                archetypes: ["beach", "wellness"]
            },
            {
                label: "B",
                text: "Active days, chill evenings — a good mix of doing and resting.",
                archetypes: ["city", "social"]
            },
            {
                label: "C",
                text: "Full, intense days with back-to-back activities. I'll sleep when I'm home.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "A mix of everything — I just want each day to feel meaningful.",
                archetypes: ["luxury"]
            }
        ]
    },
    {
        id: 9,
        text: "What's your biggest travel fear?",
        options: [
            {
                label: "A",
                text: "Feeling burnt out or overscheduled — I don't want to need a vacation from my vacation.",
                archetypes: ["beach", "wellness"]
            },
            {
                label: "B",
                text: "Missing out on the \"real\" local experience because I stuck to tourist traps.",
                archetypes: ["city"]
            },
            {
                label: "C",
                text: "Being bored or stuck doing nothing — I need action.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "Ending up on a trip with bad vibes or people I don't click with.",
                archetypes: ["social", "luxury"]
            }
        ]
    },
    {
        id: 10,
        text: "When you look back on a great trip, what do you remember most?",
        options: [
            {
                label: "A",
                text: "How relaxed and recharged I felt — like I actually rested.",
                archetypes: ["beach", "wellness"]
            },
            {
                label: "B",
                text: "The little moments — a random conversation, a hidden café, the way a street smelled.",
                archetypes: ["city"]
            },
            {
                label: "C",
                text: "The wild stuff I did — the hike, the jump, the thing I was scared to try.",
                archetypes: ["adventure"]
            },
            {
                label: "D",
                text: "The people — the laughs, the inside jokes, the group energy.",
                archetypes: ["social", "luxury"]
            }
        ]
    }
];

// ==========================================
// Quiz State
// ==========================================
let currentQuestionIndex = 0;
let answers = [];
let scores = {
    beach: 0,
    city: 0,
    adventure: 0,
    wellness: 0,
    luxury: 0,
    social: 0
};

// ==========================================
// DOM Elements
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const retakeBtn = document.getElementById('retake-btn');
const shareBtn = document.getElementById('share-btn');

const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const resultTitle = document.getElementById('result-title');
const resultTagline = document.getElementById('result-tagline');
const resultIcon = document.getElementById('result-icon');
const resultDescription = document.getElementById('result-description');
const idealTripText = document.getElementById('ideal-trip-text');
const ctaText = document.getElementById('cta-text');
const ctaBtn = document.getElementById('cta-btn');

// ==========================================
// Functions
// ==========================================

function showScreen(screen) {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    
    setTimeout(() => {
        screen.classList.add('active');
    }, 50);
}

function startQuiz() {
    currentQuestionIndex = 0;
    answers = [];
    scores = {
        beach: 0,
        city: 0,
        adventure: 0,
        wellness: 0,
        luxury: 0,
        social: 0
    };
    
    totalQuestionsSpan.textContent = questions.length;
    showScreen(quizScreen);
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update question text
    questionText.textContent = question.text;
    
    // Clear and populate options
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.innerHTML = `
            <span class="option-label">${option.label}.</span>
            ${option.text}
        `;
        
        // Check if this option was previously selected
        if (answers[currentQuestionIndex] === index) {
            optionCard.classList.add('selected');
            nextBtn.disabled = false;
        }
        
        optionCard.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionCard);
    });
    
    // Update navigation buttons
    backBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-flex';
    
    if (answers[currentQuestionIndex] === undefined) {
        nextBtn.disabled = true;
    }
}

function selectOption(optionIndex) {
    // Remove selected class from all options
    const allOptions = optionsContainer.querySelectorAll('.option-card');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    // Add selected class to clicked option
    allOptions[optionIndex].classList.add('selected');
    
    // Store answer
    answers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz complete - calculate results
        calculateResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function calculateResults() {
    // Reset scores
    scores = {
        beach: 0,
        city: 0,
        adventure: 0,
        wellness: 0,
        luxury: 0,
        social: 0
    };
    
    // Calculate scores based on answers
    answers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        selectedOption.archetypes.forEach(archetype => {
            scores[archetype]++;
        });
    });
    
    // Find the archetype with the highest score
    let winningArchetype = null;
    let highestScore = 0;
    
    for (const [key, score] of Object.entries(scores)) {
        if (score > highestScore) {
            highestScore = score;
            winningArchetype = key;
        }
    }
    
    // Display results
    displayResults(winningArchetype);
}

function displayResults(archetypeKey) {
    const archetype = archetypes[archetypeKey];
    
    resultTitle.textContent = `You are: ${archetype.name}`;
    resultTagline.textContent = archetype.tagline;
    resultIcon.textContent = archetype.icon;
    resultDescription.textContent = archetype.description;
    idealTripText.textContent = archetype.idealTrip;
    ctaText.textContent = archetype.ctaText;
    ctaBtn.textContent = archetype.ctaButton;
    
    showScreen(resultScreen);
}

function shareResult() {
    const resultName = resultTitle.textContent;
    const shareText = `I just took the "Which Trip Fits Your Personality?" quiz and got: ${resultName}! Take the quiz to find your travel style.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Travel Personality Quiz Result',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText + ' ' + window.location.href)
            .then(() => alert('Result copied to clipboard!'))
            .catch(err => console.log('Error copying:', err));
    }
}

// ==========================================
// Event Listeners
// ==========================================
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
backBtn.addEventListener('click', previousQuestion);
retakeBtn.addEventListener('click', startQuiz);
shareBtn.addEventListener('click', shareResult);

// CTA button click (you can customize this to link to your actual trip pages)
ctaBtn.addEventListener('click', () => {
    alert('This would take you to the trips page! Connect this to your actual booking/waitlist system.');
});

// ==========================================
// Initialize
// ==========================================
// Show welcome screen on load
window.addEventListener('DOMContentLoaded', () => {
    showScreen(welcomeScreen);
});
