// Create an array of at least 12 emoji's of your choice
// Loop over the array to add each emoji and it's code to the grid using section id
// <p>&#9917;</br><code>#9917</code></p>

const emoji = [
    {
        "emojiCode":"&#9917",
        "displayCode":"#9917",
    },

    {
        "emojiCode":"&#9918",
        "displayCode":"#9918",
    },

    {
        "emojiCode":"&#9749",
        "displayCode":"#9749",
    },

    {
        "emojiCode":"&#9889",
        "displayCode":"#9889",
    },

    {
        "emojiCode":"&#9940",
        "displayCode":"#9940",
    },

    {
        "emojiCode":"&#9971",
        "displayCode":"#9971",
    },

    {
        "emojiCode":"&#9977",
        "displayCode":"#9977",
    },

    {
        "emojiCode":"&#9973",
        "displayCode":"#9973",
    },

    {
        "emojiCode":"&#9970",
        "displayCode":"#9970",
    },

    {
        "emojiCode":"&#10071",
        "displayCode":"#10071",
    },

    {
        "emojiCode":"&#9925",
        "displayCode":"#9925",
    },

    {
        "emojiCode":"&#9924",
        "displayCode":"#9924",
    },
];

 const add = document.getElementById('emoji')

let emojiString2 = "";

for ( let i = 0; i<=12; i++) {
    emojiString2 += `<p>${emoji[i].emojiCode}<br><code>${emoji[i].displayCode}</code></p>`
    add.innerHTML = emojiString2
} 






/*

const add = document.getElementById('emoji2')

let emojiString = "";

for ( let i = 1; i<=12; i++) {
    emojiString += `<p>Emoji${i}</p>`
}

add.innerHTML = emojiString

*/

