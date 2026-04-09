/* ============================================
   VAIDYA - AI Health Assistant JavaScript
   Core chatbot logic, knowledge base, and NLP
   ============================================ */

// =========== KNOWLEDGE BASE ===========
// Stores symptoms, causes, and advice for common health issues
const knowledgeBase = {
    // Fever
    fever: {
        symptoms: ['fever', 'high temperature', 'feeling hot', 'chills', 'temperature'],
        conditions: [
            'Viral Infection',
            'Flu',
            'Common Cold',
            'Bacterial Infection'
        ],
        causes: [
            'Body fighting an infection',
            'Viral or bacterial infection',
            'Immune system response',
            'Environmental exposure'
        ],
        advice: [
            '🌡️ Take paracetamol or ibuprofen as directed',
            '💧 Stay hydrated - drink plenty of water',
            '🛏️ Get adequate rest',
            '😓 Keep cool - use light clothing',
            '🍯 Consume warm liquids like tea or soup',
            '⏰ Monitor temperature regularly',
            '🏥 Consult a doctor if fever persists beyond 3 days'
        ]
    },

    // Headache
    headache: {
        symptoms: ['headache', 'head pain', 'migraine', 'throbbing', 'head ache'],
        conditions: [
            'Tension Headache',
            'Migraine',
            'Stress-Related Headache',
            'Dehydration Headache'
        ],
        causes: [
            'Stress or anxiety',
            'Muscle tension',
            'Lack of sleep',
            'Dehydration',
            'Eye strain',
            'Weather changes'
        ],
        advice: [
            '💊 Take pain reliever (aspirin, ibuprofen)',
            '😴 Rest in a quiet, dark room',
            '💧 Drink plenty of water',
            '🧘 Practice relaxation techniques',
            '❄️ Apply cold/warm compress to forehead',
            '📵 Reduce screen time',
            '🏥 See a doctor if headaches are frequent'
        ]
    },

    // Cough
    cough: {
        symptoms: ['cough', 'coughing', 'throat irritation', 'persistent cough', 'dry cough', 'wet cough'],
        conditions: [
            'Common Cold',
            'Bronchitis',
            'Allergies',
            'Asthma',
            'Pneumonia'
        ],
        causes: [
            'Viral infection',
            'Throat irritation',
            'Dust or allergens',
            'Smoking',
            'Environmental pollutants'
        ],
        advice: [
            '🍯 Use cough drops or honey',
            '💧 Stay hydrated to loosen mucus',
            '🌡️ Use a humidifier',
            '☕ Drink warm liquids',
            '🚫 Avoid irritants and smoke',
            '😴 Get enough rest',
            '🏥 Visit doctor if cough lasts more than 2 weeks'
        ]
    },

    // Sore Throat
    sorethroat: {
        symptoms: ['sore throat', 'throat pain', 'throat infection', 'scratchy throat', 'swollen throat'],
        conditions: [
            'Pharyngitis',
            'Laryngitis',
            'Strep Throat',
            'Tonsillitis',
            'Common Cold'
        ],
        causes: [
            'Viral or bacterial infection',
            'Inflammation',
            'Irritation from smoking',
            'Allergies',
            'Dry air'
        ],
        advice: [
            '🍯 Use throat lozenges or honey',
            '🧂 Gargle with warm salt water',
            '💧 Drink warm beverages',
            '🧊 Try ice cream or popsicles',
            '😴 Rest your voice',
            '💨 Use a humidifier',
            '🏥 See doctor if accompanied by high fever'
        ]
    },

    // Cold/Flu
    cold: {
        symptoms: ['cold', 'flu', 'sneezing', 'runny nose', 'congestion', 'stuffy nose'],
        conditions: [
            'Common Cold',
            'Winter Flu',
            'Seasonal Allergies',
            'Rhinitis'
        ],
        causes: [
            'Viral infection',
            'Exposure to cold air',
            'Weak immune system',
            'Contact with infected persons',
            'Environmental allergies'
        ],
        advice: [
            '😷 Use tissues to cover coughs/sneezes',
            '💧 Stay hydrated',
            '🛏️ Get complete rest',
            '🧂 Use saline nasal drops',
            '☕ Drink warm fluids',
            '🍊 Increase vitamin C intake',
            '✋ Wash hands frequently',
            '🏥 Consult doctor if symptoms worsen'
        ]
    },

    // Nausea
    nausea: {
        symptoms: ['nausea', 'feeling sick', 'nauseous', 'want to vomit', 'stomach upset'],
        conditions: [
            'Food Poisoning',
            'Gastroenteritis',
            'Migraine',
            'Motion Sickness',
            'Pregnancy'
        ],
        causes: [
            'Contaminated food',
            'Viral infection',
            'Anxiety or stress',
            'Medication side effects',
            'Motion sickness',
            'Overeating'
        ],
        advice: [
            '💧 Sip small amounts of water slowly',
            '🍯 Try ginger tea or honey',
            '🛏️ Lie down and rest',
            '🌫️ Get fresh air',
            '🚫 Avoid heavy foods',
            '😴 Take deep breaths',
            '🏥 See a doctor if nausea persists'
        ]
    },

    // Vomiting
    vomit: {
        symptoms: ['vomiting', 'throwing up', 'vomit', 'sick'],
        conditions: [
            'Gastroenteritis',
            'Food Poisoning',
            'Migraines',
            'Virus Infection',
            'Medication Reaction'
        ],
        causes: [
            'Stomach bugs',
            'Bad food',
            'Emotional stress',
            'Medication side effects',
            'Infections'
        ],
        advice: [
            '💧 Rest your stomach - avoid food initially',
            '🧊 Sip clear liquids slowly (water, broth)',
            '❄️ Apply cold compress to forehead',
            '🛏️ Lie down after meals',
            '🫖 Try ginger tea when ready',
            '🚫 Avoid dairy and greasy foods',
            '🏥 Seek medical help if vomiting continues'
        ]
    },

    // Fatigue
    fatigue: {
        symptoms: ['fatigue', 'tired', 'exhaustion', 'sleepy', 'weakness', 'lack of energy'],
        conditions: [
            'Anemia',
            'Sleep Deprivation',
            'Depression',
            'Thyroid Issues',
            'Chronic Fatigue Syndrome'
        ],
        causes: [
            'Lack of sleep',
            'Stress',
            'Poor nutrition',
            'Overwork',
            'Illness',
            'Caffeine dependency'
        ],
        advice: [
            '😴 Ensure 7-9 hours of sleep',
            '🏃 Engage in light exercise',
            '🥗 Eat balanced, nutritious meals',
            '💧 Stay hydrated',
            '🧘 Practice stress management',
            '☕ Limit caffeine intake',
            '🏥 See doctor if fatigue persists for weeks'
        ]
    },

    // Body Ache
    bodyache: {
        symptoms: ['body ache', 'body pain', 'muscle pain', 'aches', 'muscle ache', 'joint pain'],
        conditions: [
            'Muscle Strain',
            'Arthritis',
            'Fibromyalgia',
            'Viral Infection',
            'Poor Posture'
        ],
        causes: [
            'Physical overactivity',
            'Poor posture',
            'Stress',
            'Infections',
            'Lack of stretching',
            'Age-related changes'
        ],
        advice: [
            '🧊 Apply ice pack for acute pain',
            '🔥 Use heat therapy for chronic pain',
            '💊 Take pain relievers',
            '🧘 Stretch gently',
            '🛏️ Get adequate rest',
            '🏃 Light exercise helps',
            '💆 Consider massage therapy',
            '🏥 Consult doctor if pain is severe'
        ]
    },

    // Diarrhea
    diarrhea: {
        symptoms: ['diarrhea', 'loose stool', 'stomach problem', 'intestinal issue', 'runs'],
        conditions: [
            'Gastroenteritis',
            'Food Sensitivity',
            'Bacterial Infection',
            'Irritable Bowel Syndrome',
            'Viral Infection'
        ],
        causes: [
            'Contaminated food/water',
            'Bacterial infection',
            'Food intolerance',
            'Medication side effects',
            'Stress'
        ],
        advice: [
            '💧 Stay hydrated with electrolyte solutions',
            '🍌 Eat bland foods (rice, banana, toast)',
            '🚫 Avoid dairy and fatty foods',
            '☕ Drink warm fluids',
            '🛏️ Get adequate rest',
            '🧂 Take oral rehydration salts',
            '🏥 See doctor if diarrhea lasts > 2 days'
        ]
    },

    // Constipation
    constipation: {
        symptoms: ['constipation', 'difficulty in bowel movement', 'hard stool', 'blocked'],
        conditions: [
            'Dehydration',
            'Low Fiber Diet',
            'Irritable Bowel Syndrome',
            'Medication Side Effect',
            'Lack of Exercise'
        ],
        causes: [
            'Insufficient water intake',
            'Low fiber food',
            'Sedentary lifestyle',
            'Ignoring urge',
            'Certain medications'
        ],
        advice: [
            '💧 Drink plenty of water daily',
            '🥗 Increase fiber intake (fruits, vegetables)',
            '🚶 Exercise regularly',
            '🚽 Don\'t ignore urges',
            '🍵 Consume warm liquids',
            '🛏️ Maintain regular schedule',
            '🏥 Consult doctor if persistent'
        ]
    },

    // Insomnia
    insomnia: {
        symptoms: ['insomnia', 'sleep problems', 'can\'t sleep', 'sleep disorder', 'unable to sleep'],
        conditions: [
            'Sleep Disorder',
            'Anxiety',
            'Stress',
            'Sleep Apnea',
            'Depression'
        ],
        causes: [
            'Stress and anxiety',
            'Poor sleep environment',
            'Caffeine consumption',
            'Screen time before bed',
            'Irregular sleep schedule'
        ],
        advice: [
            '⏰ Maintain consistent sleep schedule',
            '📵 Avoid screens 1 hour before bed',
            '☕ Limit caffeine after 2 PM',
            '🌙 Keep bedroom cool and dark',
            '🧘 Try relaxation techniques',
            '🛏️ Create bedtime routine',
            '🏃 Exercise during day',
            '🏥 See sleep specialist if needed'
        ]
    },

    // Dizziness
    dizziness: {
        symptoms: ['dizziness', 'dizzy', 'vertigo', 'lightheaded', 'spinning sensation'],
        conditions: [
            'Vertigo',
            'Low Blood Pressure',
            'Dehydration',
            'Anemia',
            'Inner Ear Problem'
        ],
        causes: [
            'Sudden position change',
            'Dehydration',
            'Low blood sugar',
            'Inner ear issue',
            'Medication side effect'
        ],
        advice: [
            '🛏️ Sit or lie down immediately',
            '💧 Drink water slowly',
            '❌ Avoid sudden movements',
            '😴 Rest in quiet place',
            '🌬️ Breathe deeply',
            '🏻 Avoid heights temporarily',
            '🏥 Consult doctor for recurring dizziness'
        ]
    },

    // Eye Issues
    eyeissue: {
        symptoms: ['eye pain', 'eye strain', 'red eyes', 'itchy eyes', 'tired eyes', 'blurry vision'],
        conditions: [
            'Eye Strain',
            'Dry Eyes',
            'Conjunctivitis',
            'Allergies',
            'Refractive Error'
        ],
        causes: [
            'Prolonged screen time',
            'Dry environment',
            'Allergies',
            'Infection',
            'Uncorrected vision'
        ],
        advice: [
            '20️⃣ Follow 20-20-20 rule (every 20 min, look 20 sec at 20 ft)',
            '😴 Take screen breaks',
            '🧊 Use eye drops',
            '❄️ Apply cold compress',
            '🥽 Wear protective eyewear',
            '💧 Stay hydrated',
            '👁️ Get eyes checked regularly',
            '🏥 See eye specialist if persistent'
        ]
    }
};

// =========== DOM ELEMENTS ===========
const messagesContainer = document.getElementById('messagesContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// =========== EVENT LISTENERS ===========
// Send message on button click
sendBtn.addEventListener('click', handleSendMessage);

// Send message on Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && userInput.value.trim() !== '') {
        handleSendMessage();
    }
});

// =========== MAIN FUNCTIONS ===========

/**
 * Handle user message sending
 * Captures input, sends to bot, and displays in chat
 */
function handleSendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;

    // Display user message
    displayMessage(message, 'user');

    // Clear input field
    userInput.value = '';
    userInput.focus();

    // Get bot response
    const botResponse = getBotResponse(message);

    // Simulate typing delay for natural conversation
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 600);

    // Scroll to bottom
    scrollToBottom();
}

/**
 * Display message in chat
 * @param {string} text - Message text
 * @param {string} sender - 'user' or 'bot'
 */
function displayMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    // Handle multi-line responses
    if (text.includes('\n')) {
        const lines = text.split('\n');
        lines.forEach(line => {
            if (line.trim() !== '') {
                const p = document.createElement('p');
                p.textContent = line;
                contentDiv.appendChild(p);
            }
        });
    } else {
        contentDiv.textContent = text;
    }

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    scrollToBottom();
}

/**
 * Auto-scroll to bottom of chat
 */
function scrollToBottom() {
    setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 100);
}

// =========== NLP AND RESPONSE LOGIC ===========

/**
 * Get bot response based on user input
 * Uses keyword matching to find relevant symptoms
 * @param {string} userMessage - User's input
 * @returns {string} Bot's response
 */
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    // Check if user is asking for help
    if (isHelpRequest(userMessage)) {
        return getHelpMessage();
    }

    // Find matching symptoms in knowledge base
    const matchedSymptom = findMatchingSymptom(userMessage);

    if (matchedSymptom) {
        return formatHealthResponse(matchedSymptom);
    } else {
        // No match found - show fallback response
        return getDefaultResponse();
    }
}

/**
 * Check if user is asking for help
 * @param {string} message - User message
 * @returns {boolean}
 */
function isHelpRequest(message) {
    const helpKeywords = [
        'help',
        'what can you do',
        'how does this work',
        'what symptoms',
        'list',
        'available',
        'commands'
    ];

    return helpKeywords.some(keyword => message.includes(keyword));
}

/**
 * Return help message with available symptoms
 * @returns {string}
 */
function getHelpMessage() {
    const symptoms = Object.keys(knowledgeBase).map(key => knowledgeBase[key].symptoms[0]);
    
    return `I can help you with these common symptoms:\n\n${symptoms
        .map((s, i) => `${i + 1}. ${s.charAt(0).toUpperCase() + s.slice(1)}`)
        .join('\n')}\n\nJust describe your symptoms and I'll provide information!`;
}

/**
 * Find matching symptom from knowledge base
 * Uses keyword matching algorithm
 * @param {string} userMessage - User's input
 * @returns {string|null} - Matched symptom key or null
 */
function findMatchingSymptom(userMessage) {
    let bestMatch = null;
    let maxMatches = 0;

    // Iterate through knowledge base
    for (const [symptomKey, symptomData] of Object.entries(knowledgeBase)) {
        let matchCount = 0;

        // Check each symptom keyword
        symptomData.symptoms.forEach(symptom => {
            if (userMessage.includes(symptom)) {
                matchCount++;
            }
        });

        // Update best match if more keywords found
        if (matchCount > maxMatches) {
            maxMatches = matchCount;
            bestMatch = symptomKey;
        }
    }

    return bestMatch;
}

/**
 * Format health response with all relevant information
 * @param {string} symptomKey - Key from knowledge base
 * @returns {string} - Formatted response
 */
function formatHealthResponse(symptomKey) {
    const data = knowledgeBase[symptomKey];

    let response = `I see you're experiencing ${data.symptoms[0]}. Here's what I found:\n\n`;

    // Add possible conditions
    response += `**Possible Conditions:**\n`;
    data.conditions.forEach(condition => {
        response += `• ${condition}\n`;
    });

    response += `\n**Common Causes:**\n`;
    data.causes.forEach(cause => {
        response += `• ${cause}\n`;
    });

    response += `\n**Recommended Advice:**\n`;
    data.advice.forEach(advice => {
        response += `${advice}\n`;
    });

    response += `\n**⚠️ Important:** This is general information only. Please consult a qualified healthcare professional for proper diagnosis and treatment.`;

    return response;
}

/**
 * Get default response when no symptom matches
 * @returns {string}
 */
function getDefaultResponse() {
    const responses = [
        "Sorry, I couldn't quite understand your symptoms. Could you be more specific? For example, describe where the pain is or what exactly you're feeling.",
        "I'm not familiar with that symptom description. Please try describing it differently or use simpler terms. What part of your body is affected?",
        "I didn't find a matching symptom. Could you provide more details? For example: Is it a pain, ache, feeling, or something else?",
        "Let me help better - could you rephrase your symptom? Try mentioning specific areas like head, chest, stomach, throat, etc."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

// =========== INITIALIZATION ===========
console.log('✅ VAIDYA Health Chatbot loaded successfully!');
console.log('📊 Knowledge base loaded with', Object.keys(knowledgeBase).length, 'symptoms');
