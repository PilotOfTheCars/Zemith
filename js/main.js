// Smart-Gate System Logic

// Current Date and Time
const now = new Date();

// School Calendar (dummy holiday dates for example)
const holidays = [
    '2026-02-12', // Example holiday date
    '2026-03-08', // Example holiday date
];

// Check if today is a holiday
const isHoliday = () => {
    const today = now.toISOString().split('T')[0];
    return holidays.includes(today);
};

// Determine if it's a school day
const isSchoolDay = () => {
    const day = now.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
    return day >= 1 && day <= 5 && !isHoliday(); // Mon-Fri
};

// Determine current mode
const getCurrentMode = () => {
    if (!isSchoolDay()) {
        return "Home Mode";
    }

    const hour = now.getHours();
    const minute = now.getMinutes();
    if (hour === 8 && minute >= 0 || (hour > 8 && hour < 15) || (hour === 15 && minute <= 15)) {
        return "School Mode";
    }
    return "Home Mode";
};

// UI Mode Switching (for demonstration purposes)
const switchUIMode = (mode) => {
    if (mode === "School Mode") {
        console.log("Switching to School UI");
        // Add logic for School UI
    } else {
        console.log("Switching to Home UI");
        // Add logic for Home UI
    }
};

// Main Logic Execution
const currentMode = getCurrentMode();
console.log(`Current Mode: ${currentMode}`);
switchUIMode(currentMode);