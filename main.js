const p = document.querySelector('p');

p.style.color = 'lightblue';
p.innerText = '> Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';

const h1 = document.querySelector('h1');

h1.style.fontSize = ('48px');

const item13 = document.querySelector('#item-13');

item13.style.opacity = 0.5;

const item3 = document.querySelector('#item-3');

item3.innerText = 'I say, "Hi!"';

const img = document.querySelector('img')

img.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';

img.height = 300;

const newImg = document.querySelector('#newImg');

newImg.height = 300;


const ul = document.querySelector('ul');



// console.log(typeof ul);
// console.log(...ul);

// const test = ul.children;

// if (ul.lastElementChild.className === '') {
//     // ul.lastElementChild.id = 'item-', ul.childElementCount
//     (ul.lastElementChild).innertext = 'Tester';
//     const last = ul.lastElementChild;
//     last.innertext = 'Is this the one?'
// }


// console.log( ul.childElementCount);


function namer (item) {

if (item.className === '') {
    item.className = 'item-', ul.childElementCount;
}


}

ul.map(namer);

