'use strict';


//create cards for main pages
class Card {
    constructor(bgimg, altimg, title, descr, parentSelector, ...classes) {
        this.bgimg = bgimg;
        this.altimg = altimg;
        this.title = title;
        this.descr = descr;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            this.element = 'card';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        this.classes.forEach(className => element.classList.add(className));
        element.innerHTML = `
            <img src=${this.bgimg} alt=${this.altimg}>
            <h2>${this.title}</h2>
            <p>${this.descr}</p>`;
        this.parent.append(element);
    }
};

axios.get('http://localhost:3000/cards')
    .then(data => data.data.forEach(({ bgimg, altimg, title, descr }) => {
        new Card(bgimg, altimg, title, descr, '.main__wrapper').render();
    }));