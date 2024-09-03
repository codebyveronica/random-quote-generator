const quotes = [
    "Do not speak of your happiness to one less fortunate than yourself.",
    "Who begins too much accomplishes little.",
    "My problem lies in reconciling my gross habits with my net income.",
    "Every person takes the limits of their own field of vision for the limits of the world.",
    "I like a woman with a head on her shoulders. I hate necks.",
    "To win without risk is to triumph without glory.",
    "A people that values its privileges above its principles soon loses both.",
    "When you write things down, they sometimes take you places you hadn't planned.",
    "Laugh and the world laughs with you, snore and you sleep alone.",
    "Fanaticism consists in redoubling your effort when you have forgotten your aim."
];

const usedIndexes = new Set();
const quoteElement = document.getElementById('quote');

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }
}
