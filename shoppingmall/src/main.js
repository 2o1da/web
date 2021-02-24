

// Fetch the items from the JSON
function loadItems(){
    return fetch('data/data.json')
    .then(response=>console.log(response))
    .then(response=>response.json())
    .then(json=>console.log(json))
    .thien(json=>json.items);
}

// Update the list wth the given items
function displayItems(items){
     const container=document.querySelector('.items');
     container.innerHTML=items.map(item=>createHTMLString(item)).join('');
     //const html=items.map(item=>createHTMLString(item)).join('');
     //console.log(html);
}

// Create HTML list item from the given data item
function createHTMLString(item){
    return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
    </li> 
    `;
}

function onButtonClick(event,items){
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;

    if(key==null||value==null){
        return;
    }

    updatedItems(items,key,value);

    const filtered=items.filter(item=>item[key]===value);
    console.log(filtered);
    displayItems(filtered);

    console.log(event.target.dataset.key);
    console.log(event.target.dataset.value);
}

function updatedItems(items,key,value){
    items.forEach(item=>{
        if(item.dataset[key]===value){
            item.classList.remove('invisible');
        }
        else{
            item.classList.add("invisible");
        }
    });
}


function setEventListeners(items)
{
    const logo=document.querySelector('.logo');
    const buttons=document.querySelector('.buttons');

    logo.addEventListener('click', ()=>displayItems(items));
    buttons.addEventListener('click',event=>onButtonClick(event,items));
}

// main
loadItems()
.then(items=>{
    console.log(items);
    displayItems(items);
    setEventListeners(items);

})
.catch(console.log);