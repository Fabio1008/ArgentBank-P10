// Images / logos
import iconChat from "../assets/icon-chat.webp";
import iconMoney from "../assets/icon-money.webp";
import iconSecurity from "../assets/icon-security.webp";
import logoArgentBank from "../assets/argentBankLogo.webp";

// Tableau des logos utilisés dans l'application
export const pictures = [
    {
        image: logoArgentBank,
        alt: "Argent Bank Logo",
    },
];

// Fonctionnalités affichées sur la home
export const features = [
    {
        image: iconChat,
        alt: "Icon Chat",
        title: "You are our #1 priority",
        description: `Need to talk to a representative? You can get in touch through our 
24/7 chat or through a phone call in less than 5 minutes.`,
    },
    {
        image: iconMoney,
        alt: "Icon Money",
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!",
    },
    {
        image: iconSecurity,
        alt: "Icon Security",
        title: "Security you can trust",
        description: `We use top of the line encryption to make sure your data and money 
is always safe.`,
    },
];

// Transactions exemples pour UserLogin
export const transaction = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance",
    },
];
