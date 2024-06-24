
const tintColorLight = "#000";
const tintColorDark = "#fff";

const cardYellowBackground = '#2c2100';
const cardYellowText = '#705e00';
const cardOrangeBackground = '#705e00';
const cardOrangeText = '#391a03'
const cardGreenBackground = '#1b543a';
const cardGreenText = '#4cc38a'

export const colorBadges = [
    cardGreenBackground,
    cardYellowBackground,
    cardOrangeBackground,
]

export default {
    light: {
        secondary: '#FEEB9D',
        text: "#000",
        background: "#f0e3da5e",
        headerBackground: '#fff',
        tint: tintColorLight,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorLight,
        holoTabs: '#0e2f57',
        text: "#5d5d5d",
        cardYellowBackground, cardYellowText, cardOrangeBackground, cardOrangeText,
        cardGreenBackground,
        cardGreenText
    },
    dark: {
        text: "#fff",
        secondary: '#FEEB9D',
        background: "#4d4c4c",
        headerBackground: '#0c0d0e',
        tint: tintColorDark,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorDark,
        cardYellowBackground,
        cardYellowText,
        cardOrangeBackground, cardOrangeText,
        cardGreenBackground,
        cardGreenText
    },
};
