import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const faqData = [
    {
        fruit: 'Tangerine',
        image: 'tangerine.jpeg',
        question: 'How is Tangerine healthy?',
        answer: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health. They also contain fiber, which aids digestion, and antioxidants that protect your cells from damage.',
    },
    {
        fruit: 'Apple',
        image: 'apple.jpeg',
        question: 'Why are Apples good for you?',
        answer: 'Apples are rich in fiber, vitamin C, and antioxidants. They help lower the risk of heart disease, aid weight loss, and promote good gut bacteria. Regular consumption of apples is linked to better brain health and a reduced risk of strokes.',
    },
    {
        fruit: 'Banana',
        image: 'banana.jpeg',
        question: 'What are the benefits of eating Bananas?',
        answer: 'Bananas are an excellent source of potassium, which helps regulate blood pressure. They are also a good source of carbohydrates and energy. Additionally, bananas contain tryptophan, which boosts serotonin levels and helps improve mood.',
    },
    {
        fruit: 'Mango',
        image: 'mango.jpeg',
        question: 'How is Mango beneficial for health?',
        answer: 'Mangoes are packed with vitamins A and C, which support the immune system and eye health. They also contain fiber, which is beneficial for digestion, and antioxidants that help protect the body from oxidative stress.',
    }
];

const FAQItem = ({ fruit, image, question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex items-center p-4 bg-white rounded-xl shadow-md m-2">
            <div className="w-1/4">
                <img src={require(`./assets/${image}`)} alt={fruit} className="rounded-lg w-full" />
                <p className="text-center text-sm font-semibold text-red-500 mt-2">{fruit}</p>
            </div>
            <div className="ml-4 w-3/4">
                <h3 className="text-red-500 font-bold">{question}</h3>
                <p className="text-blue-700 text-sm mt-1">
                    {isExpanded ? answer : `${answer.substring(0, 100)}...`}
                </p>
                <button
                    className="text-blue-500 text-xs mt-2 underline"
                    onClick={toggleReadMore}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqsPerBox = 2;

    const groupedFaqs = [];
    for (let i = 0; i < faqData.length; i += faqsPerBox) {
        groupedFaqs.push(faqData.slice(i, i + faqsPerBox));
    }

    const navigate = useNavigate();

    return (
        <div className="p-4 bg-gradient-to-r from-purple-300 via-blue-200 to-teal-200 min-h-screen">

            <div className="absolute top-4 left-4">
                <button onClick={() => navigate('/home')}>
                    <FaArrowLeft className="text-2xl text-gray-700" />
                </button>
            </div>
            <h1 className="text-center text-2xl font-bold text-purple-700 mb-6">FAQ Section</h1>

            {groupedFaqs.map((faqGroup, groupIndex) => (
                <div
                    key={groupIndex}
                    className="p-6 mb-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {faqGroup.map((faq, index) => (
                            <FAQItem
                                key={index}
                                fruit={faq.fruit}
                                image={faq.image}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;