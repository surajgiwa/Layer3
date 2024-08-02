import React from 'react'; // Add this import

import { SiOpenaigym } from 'react-icons/si';

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Service",
        path: '/service'
    },
    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "Sign in",
        path: '/Login'
    },
    {
        name: "Request a Demo",
        path: '/requestdemo'
    },
];

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Hiring One",
        info: "Get the best video referencing for technical hiring!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Hiring Two",
        info: "Video referencing for hiring manager!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Hiring Three",
        info: "Best video reference for hiring entry level!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Hiring Four",
        info: " Video Referencing!",
        path: "/programs/444"
    }
];

export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Video One",
        desc: "Discover Reference."
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Value Two",
        desc: "Explore Reference."
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Value Three",
        desc: "Authenticate Reference."
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Value Four",
        desc: "Validate Reference."
    }
];

export const faqs = [
    {
        id: 1,
        question: "How do I know the right videos for me?",
        answer: "To find the right videos for you, consider your interests and goals, then browse through the available categories. Pay attention to video titles, descriptions, and durations to ensure they align with your preferences and time constraints. Additionally, watching trailers or reading reviews can provide further insight into the content's relevance and quality."
    },
    {
        id: 2,
        question: "Are the videos accessible for people with disabilities?",
        answer: "Yes, we strive to make our video library accessible to everyone. Our videos are equipped with closed captioning and transcripts to ensure that individuals with hearing impairments can access the content. Additionally, we optimize our website for screen readers and provide alternative text for images to accommodate individuals with visual impairments. If you encounter any accessibility issues or have specific accessibility requirements, please let us know, and we'll do our best to address them promptly."
    },
    {
        id: 3,
        question: "How can I contribute to the video library?",
        answer: "We welcome contributions from individuals and organizations who have valuable insights to share. If you're interested in contributing your own interview videos or suggesting content, please reach out to our team through the contact form on our website. We'll review your submission and get back to you as soon as possible."
    },
    {
        id: 4,
        question: "Can I download the videos for offline viewing?",
        answer: "Yes, we offer a convenient download option for our premium subscribers. With a paid subscription, you can download videos to watch offline for a limited period of time, providing flexibility and convenience. Explore our subscription plans to access this feature and enjoy uninterrupted viewing anytime, anywhere."
    },
    {
        id: 5,
        question: "Are the videos free to watch?",
        answer: "While a selection of videos is available for free, access to our full library, including premium features like offline viewing, is exclusive to subscribers. We offer various subscription plans tailored to your needs, providing unlimited access to a wealth of valuable content. Subscribe today to unlock the full potential of our video library."
    },
    {
        id: 6,
        question: "How many free videos are available on the website?",
        answer: "Our website offers a limited selection of free videos to give users a glimpse into our content. While these free videos provide valuable insights, subscribing to one of our premium plans unlocks access to our entire library, offering a wider range of topics and features for your learning needs."
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Subscriber 1",
        quote: "I've found the premium subscription to be incredibly valuable. Being able to download videos for offline viewing has made it convenient for me to continue learning even when I'm on the go. The diverse range of topics covered in the video library has helped me broaden my knowledge and skills.",
        job: "Job seeker",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Subscriber 2",
        quote: "As someone with a busy schedule, having access to downloadable videos has been a game-changer. I can watch them during my commute or while traveling, maximizing my time and staying productive. The subscription is definitely worth it for the flexibility it offers.",
        job: "Project Manager",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Subscriber 3",
        quote: "Subscribing to this platform has been one of the best decisions I've made for my professional development. The quality of the content is top-notch, and being able to download videos has allowed me to tailor my learning experience to fit my needs. I highly recommend it to anyone looking to expand their knowledge base.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Subscriber 4",
        quote: "I can't speak highly enough about the value I've received from this platform. The insights shared in the videos have directly impacted my professional growth and decision-making. I've recommended it to all my colleagues!",
        job: "Bank Manager",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Subscriber 5",
        quote: "I've been a subscriber for months now, and I'm continually impressed by the quality of the content. The ability to access a wide range of topics has been instrumental in my career development. Thank you for providing such a valuable resource!",
        job: "Student",
        avatar: require("./images/avatar5.jpg")
    }
];
