/* import { AcademicCapIcon, GlobeAltIcon, ChartBarIcon, ChartPieIcon, DevicePhoneMobileIcon  } from "@heroicons/react/20/solid" */
import { featuresIcon1, featuresIcon2, featuresIcon3, featuresIcon4, featuresIcon5, facebook, telegram, twitter, instagram} from "../assets"

export const navigation = [
    {
        id: "1",
        title: "Home",
        url: "#hero",
    },

    {
        id: "2",
        title: "Features",
        url: "#features",
    },

    {
        id: "3",
        title: "Download",
        url: "#download",
    },

    {
        id: "4",
        title: "About Us",
        url: "#aboutUs",
    },

    {
        id: "5",
        title: "Contact Us",
        url: "#contactUs",
    },

]

export const features = [
    {
        id: "1",
        icon: featuresIcon1,
        title: "Personalized Learning",
        description: "Tailored quizzes based on your current IQ level ensure a customized learning experience"
    },

    {
        id: "2",
        icon: featuresIcon2,
        title: "Assessment",
        description: "Test your IQ level across various categories including logic, mathematics, language, and more"
    },

    {
        id: "3",
        icon:  featuresIcon3,
        title: "Progress Tracking",
        description: "Keep track of your improvement over time with detailed analytics and performance insights"
    },

    {
        id: "4",
        icon: featuresIcon4,
        title: "Connect anywhere",
        description: "Learnify is available on multiple platforms, allowing you to learn on the go, whenever and wherever you want"
    },

    {
        id: "5",
        icon: featuresIcon1,
        title: "Interactive Lessons",
        description: "Engage with interactive lessons and activities designed to enhance your learning experience"
    },
    
    {
        id: "6",
        icon: featuresIcon5,
        title: "Global Community",
        description: "Join a global community of learners, share your achievements, and collaborate with others"
    }
]

export const socials = [
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#"
    },

    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#"
    },

    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },

    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    }
]
