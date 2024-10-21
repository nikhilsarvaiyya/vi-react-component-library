let green = {
    1: "#C8E6C9", 2: "#A5D6A7", 3: "#81C784", 4: "#66BB6A", 5: "#4CAF50", 6: "#43A047", 7: "#388E3C", 8: "#2E7D32", 9: "#1B5E20",
}
let red = {
    1: "#FFCDD2", 2: "#EF9A9A", 3: "#E57373", 4: "#EF5350", 5: "#F44336", 6: "#E53935", 7: "#D32F2F", 8: "#C62828", 9: "#B71C1C",
}
let blue = {
    1: "#BBDEFB", 2: "#90CAF9", 3: "#64B5F6", 4: "#42A5F5", 5: "#2196F3", 6: "#1E88E5", 7: "#1976D2", 8: "#1565C0", 9: "#0D47A1"
}
let yellow = {
    1: "#FFF9C4", 2: "#FFF59D", 3: "#FFF176", 4: "#FFEE58", 5: "#FFEB3B", 6: "#FDD835", 7: "#FBC02D", 8: "#F9A825", 9: "#F57F17"
}
let orange = {
    1: "#FFE0B2", 2: "#FFCC80", 3: "#FFB74D", 4: "#FFA726", 5: "#FF9800", 6: "#FB8C00", 7: "#F57C00", 8: "#EF6C00", 9: "#E65100",
}

let gray = {
    1: "#212121", 2: "#424242", 3: "#616161", 4: "#757575", 5: "#9E9E9E", 6: "#BDBDBD", 7: "#E0E0E0", 8: "#adadad", 9: "#cacaca",
}

let pink = {
    1: "#F8BBD0", 2: "#F48FB1", 3: "#F06292", 4: "#EC407A", 5: "#E91E63", 6: "#D81B60", 7: "#C2185B", 8: "#AD1457", 9: "#880E4F"
}

let black = {
    1: "#000000", 2: "#000000", 3: "#000000", 4: "#000000", 5: "#000000", 6: "#000000", 7: "#000000", 8: "#000000", 9: "#000000",
}

let white = {
    1: "#FFFFFF", 2: "#FFFFFF", 3: "#FFFFFF", 4: "#FFFFFF", 5: "#FFFFFF", 6: "#FFFFFF", 7: "#FFFFFF", 8: "#FFFFFF", 9: "#FFFFFF",
}




const theme = (themeColor) => {
    let theme = themeColor;
    const root = document.documentElement;
    if (theme === "green") {
        root.style.setProperty('--clr-1', green['1']);
        root.style.setProperty('--clr-2', green['2']);
        root.style.setProperty('--clr-3', green['3']);
        root.style.setProperty('--clr-4', green['4']);
        root.style.setProperty('--clr-5', green['5']);
        root.style.setProperty('--clr-6', green['6']);
        root.style.setProperty('--clr-7', green['7']);
        root.style.setProperty('--clr-8', green['8']);
        root.style.setProperty('--clr-9', green['9']);
        root.style.setProperty('--text-color', white[1]);
        localStorage.setItem("theme", "green");
    } else if (theme === "red") {
        root.style.setProperty('--clr-1', red['1']);
        root.style.setProperty('--clr-2', red['2']);
        root.style.setProperty('--clr-3', red['3']);
        root.style.setProperty('--clr-4', red['4']);
        root.style.setProperty('--clr-5', red['5']);
        root.style.setProperty('--clr-6', red['6']);
        root.style.setProperty('--clr-7', red['7']);
        root.style.setProperty('--clr-8', red['8']);
        root.style.setProperty('--clr-9', red['9']);
        root.style.setProperty('--text-color', white[1]);
        localStorage.setItem("theme", "red");
    } else if (theme === "blue") {
        root.style.setProperty('--clr-1', blue['1']);
        root.style.setProperty('--clr-2', blue['2']);
        root.style.setProperty('--clr-3', blue['3']);
        root.style.setProperty('--clr-4', blue['4']);
        root.style.setProperty('--clr-5', blue['5']);
        root.style.setProperty('--clr-6', blue['6']);
        root.style.setProperty('--clr-7', blue['7']);
        root.style.setProperty('--clr-8', blue['8']);
        root.style.setProperty('--clr-9', blue['9']);
        root.style.setProperty('--text-color', white[1]);
        localStorage.setItem("theme", "blue");
    } else if (theme === "orange") {
        root.style.setProperty('--clr-1', orange['1']);
        root.style.setProperty('--clr-2', orange['2']);
        root.style.setProperty('--clr-3', orange['3']);
        root.style.setProperty('--clr-4', orange['4']);
        root.style.setProperty('--clr-5', orange['5']);
        root.style.setProperty('--clr-6', orange['6']);
        root.style.setProperty('--clr-7', orange['7']);
        root.style.setProperty('--clr-8', orange['8']);
        root.style.setProperty('--clr-9', orange['9']);
        root.style.setProperty('--text-color', white[1]);
        localStorage.setItem("theme", "orange");
    } else if (theme === "yellow") {
        root.style.setProperty('--clr-1', yellow['1']);
        root.style.setProperty('--clr-2', yellow['2']);
        root.style.setProperty('--clr-3', yellow['3']);
        root.style.setProperty('--clr-4', yellow['4']);
        root.style.setProperty('--clr-5', yellow['5']);
        root.style.setProperty('--clr-6', yellow['6']);
        root.style.setProperty('--clr-7', yellow['7']);
        root.style.setProperty('--clr-8', yellow['8']);
        root.style.setProperty('--clr-9', yellow['9']);
        root.style.setProperty('--text-color', black[1]);
        localStorage.setItem("theme", "yellow");
    } else if (theme === "pink") {
        root.style.setProperty('--clr-1', pink['1']);
        root.style.setProperty('--clr-2', pink['2']);
        root.style.setProperty('--clr-3', pink['3']);
        root.style.setProperty('--clr-4', pink['4']);
        root.style.setProperty('--clr-5', pink['5']);
        root.style.setProperty('--clr-6', pink['6']);
        root.style.setProperty('--clr-7', pink['7']);
        root.style.setProperty('--clr-8', pink['8']);
        root.style.setProperty('--clr-9', pink['9']);
        root.style.setProperty('--text-color', white[1]);
        localStorage.setItem("theme", "pink");
    } else if (theme === "gray") {
        root.style.setProperty('--clr-1', gray['1']);
        root.style.setProperty('--clr-2', gray['2']);
        root.style.setProperty('--clr-3', gray['3']);
        root.style.setProperty('--clr-4', gray['4']);
        root.style.setProperty('--clr-5', gray['5']);
        root.style.setProperty('--clr-6', gray['6']);
        root.style.setProperty('--clr-7', gray['7']);
        root.style.setProperty('--clr-8', gray['8']);
        root.style.setProperty('--clr-9', gray['9']);
        root.style.setProperty('--text-color', black[9]);
        localStorage.setItem("theme", "gray");
    } else if (theme === "black") {
        root.style.setProperty('--clr-1', black['1']);
        root.style.setProperty('--clr-2', black['2']);
        root.style.setProperty('--clr-3', black['3']);
        root.style.setProperty('--clr-4', black['4']);
        root.style.setProperty('--clr-5', black['5']);
        root.style.setProperty('--clr-6', black['6']);
        root.style.setProperty('--clr-7', black['7']);
        root.style.setProperty('--clr-8', black['8']);
        root.style.setProperty('--clr-9', black['9']);
        root.style.setProperty('--text-color', white[1]);
        localStorage.setItem("theme", 'black');
    } else if (theme === "white") {
        root.style.setProperty('--clr-1', white['1']);
        root.style.setProperty('--clr-2', white['2']);
        root.style.setProperty('--clr-3', white['3']);
        root.style.setProperty('--clr-4', white['4']);
        root.style.setProperty('--clr-5', white['5']);
        root.style.setProperty('--clr-6', white['6']);
        root.style.setProperty('--clr-7', white['7']);
        root.style.setProperty('--clr-8', white['8']);
        root.style.setProperty('--clr-9', white['9']);
        root.style.setProperty('--text-color', black[1]);
        localStorage.setItem("theme", "white");
    }

    return theme
};

export default theme;