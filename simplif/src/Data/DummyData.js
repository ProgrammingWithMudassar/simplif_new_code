import { FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaPinterest, FaReddit } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import Brand1 from '../Assets/png/Brands/brand1.png'
import Brand2 from '../Assets/png/Brands/brand2.png'
import Brand3 from '../Assets/png/Brands/brand3.png'
import Brand4 from '../Assets/png/Brands/brand4.png'
import france from '../Assets/png/Countries/france.png'
import person from '../Assets/png/person1.png'

export const platforms = [
    { id: 1, title: "Instagram", icon: FaInstagram, size: 24 },
    { id: 2, title: "YouTube", icon: FaYoutube, size: 24 },
    { id: 3, title: "Twitter", icon: FaTwitter, size: 24 },
    { id: 4, title: "Twitch", icon: FaTwitch, size: 24 },
    { id: 5, title: "Pinterest", icon: FaPinterest, size: 24 },
    { id: 6, title: "Reddit", icon: FaReddit, size: 24 },
    { id: 7, title: "TikTok", icon: RiTiktokLine, size: 24 }
];

export const brands = [
    { id: 1, title: "Brand 1", image: Brand1, size: 24, width: 120, height: 20 },
    { id: 2, title: "Brand 1", image: Brand2, size: 24, width: 120, height: 30 },
    { id: 3, title: "Brand 1", image: Brand3, size: 24, width: 120, height: 40 },
    { id: 4, title: "Brand 1", image: Brand4, size: 24, width: 120, height: 50 },
]

export const socialMedia = [
    { icon: FaYoutube, placeholderUrl: 'YouTube URL', placeholderFollowers: 'YouTube Subscribers' },
    { icon: FaInstagram, placeholderUrl: 'Instagram URL', placeholderFollowers: 'Instagram Followers' },
    { icon: RiTiktokLine, placeholderUrl: 'TikTok URL', placeholderFollowers: 'TikTok Followers' },
    { icon: FaTwitter, placeholderUrl: 'Twitter URL', placeholderFollowers: 'Twitter Followers' },
    { icon: FaTwitch, placeholderUrl: 'Twitch URL', placeholderFollowers: 'Twitch Followers' },
    { icon: FaPinterest, placeholderUrl: 'Pinterest URL', placeholderFollowers: 'Pinterest Followers' },
    { icon: FaReddit, placeholderUrl: 'Reddit URL', placeholderFollowers: 'Reddit Followers' }
  ];

export const Features = [
    {
        id: 1, 
        name: 'Maria Jonhson', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Beauty", 
        image: person, 
        socialMedia: [RiTiktokLine, FaYoutube],
        country: france
    },
    {
        id: 2, 
        name: 'Luca Brasi', 
        mainSocialMediaAccount: 'Instagram', 
        interest: "Travel", 
        image: person, 
        socialMedia: [FaInstagram, FaPinterest, FaYoutube],
        country: france
    },
    {
        id: 3, 
        name: 'Emma Blanc', 
        mainSocialMediaAccount: 'YouTube', 
        interest: "Lifestyle", 
        image: person, 
        socialMedia: [FaYoutube, FaTwitter],
        country: france
    },
    {
        id: 4, 
        name: 'Sophie Turner', 
        mainSocialMediaAccount: 'Twitter', 
        interest: "Fashion", 
        image: person, 
        socialMedia: [FaTwitter, FaTwitch],
        country: france
    },
    {
        id: 5, 
        name: 'Alex Turner', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Fashion", 
        image: person, 
        socialMedia: [FaTwitter, FaTwitch],
        country: france
    }
];

export const Tiktokers = [
    {
        id: 1, 
        name: 'Maria Jonhson', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Beauty", 
        image: person, 
        socialMedia: [RiTiktokLine, FaYoutube],
        country: france
    },
    {
        id: 2, 
        name: 'Luca Brasi', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Travel", 
        image: person, 
        socialMedia: [FaInstagram, FaPinterest, FaYoutube],
        country: france
    },
    {
        id: 3, 
        name: 'Emma Blanc', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Lifestyle", 
        image: person, 
        socialMedia: [FaYoutube, FaTwitter],
        country: france
    },
    {
        id: 4, 
        name: 'Sophie Turner', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Fashion", 
        image: person, 
        socialMedia: [FaTwitter, FaTwitch],
        country: france
    },
    {
        id: 5, 
        name: 'Luca Brasi', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Travel", 
        image: person, 
        socialMedia: [FaInstagram, FaPinterest, FaYoutube],
        country: france
    },
    {
        id: 6, 
        name: 'Emma Blanc', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Lifestyle", 
        image: person, 
        socialMedia: [FaYoutube, FaTwitter],
        country: france
    },
    {
        id: 7, 
        name: 'Sophie Turner', 
        mainSocialMediaAccount: 'Tiktok', 
        interest: "Fashion", 
        image: person, 
        socialMedia: [FaTwitter, FaTwitch],
        country: france
    }
];