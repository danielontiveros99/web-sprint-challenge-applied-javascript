// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
// import axios from 'axios';

    let tab = document.querySelector('body > div.tabs > div');

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res=>{
    let x = res.data.topics;
    for (let i = 0; i < x.length; i++){
        let tabs = document.createElement('div');
        tabs.classList.add('tab');
        tabs.textContent = x[i];
        tab.appendChild(tabs);
    }

    return x;
})












// let tabs = document.querySelector('.title');
// // function getTab(tabName){
// //     axios.get(`https://lambda-times-api.herokuapp.com/topics${tabName}`).then(res=>{
// //             let i = res.data;
// //             tabs.appendChild(tabMaker(i));
// //     });
// // }

// // forEach(item => {
// //     axios.get(`https://lambda-times-api.herokuapp.com/topics${item}`).then(res=>{
// //         let x = res.data;
// //         tabs.appendChild(tabMaker(x));
// //     });
// // });

// function tabMaker(data){
//     const tab = document.createElement('div');

//     tab.classList.add('tab');

//     // const tabs1 = document.querySelector('title');
//     // data[].title.forEach(data => tabs1.appendChild(data[0], data[1], data[2], data[3], data[4]));

//     // data[].title.forEach(element => {
//     //     let li = document.createElement('li');
//     //     li.textContent = element;
//     //     tab.appendChild(li);
//     // });

//     return tab;
// }

// let tabs1 = document.querySelector('.title');
// tabs1.appendChild(tabMaker());