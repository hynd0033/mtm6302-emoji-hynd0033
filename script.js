// Create an array of at least 12 emoji's of your choice
// Loop over the array to add each emoji and it's code to the grid using section id
// <p>&#9917;</br><code>#9917</code></p>

const emoji = [
    {
        emojiCode:"&#9917",
        displayCode:"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },
];

const add = document.getElementById('emoji2')

let emojiString2 = "";

for ( let i = 1; i<=12; i++) {
    emojiString2 += `<p>${emoji.emojiCode}<br><code>${emoji.displayCode}</code></p>`
}

add.innerHTML = emojiString2

/*

const add = document.getElementById('emoji2')

let emojiString = "";

for ( let i = 1; i<=12; i++) {
    emojiString += `<p>Emoji${i}</p>`
}

add.innerHTML = emojiString

*/

