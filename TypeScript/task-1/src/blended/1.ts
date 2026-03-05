type Setting = {
    darkMode: boolean,
    fontSize: number,
    language: string,
    // language: "en"|"uk"|"fr",
}

interface ISetting {
    darkMode: boolean,
    fontSize: number,
    language: string
}

const settings:Setting = {
    darkMode: true,
    fontSize: 16,
    language: "en",
};