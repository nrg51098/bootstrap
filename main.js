const ducks = [
    {
      color: 'Blue',
      name: 'Donald',
      breed: 'ancona',
      size: 'small', // one of: small, medium, large
      temperament: 'wise',
      imageUrl: 'https://bit.ly/2zzQdMw',
      gender: 'male', // one of: male, female
      age: 4,// int
      isRubber: false, //bool
    },
    {
        color: 'Black',
        name: 'Angle',
        breed: 'rubber',
        size: 'medium', // one of: small, medium, large
        temperament: 'quiet',
        imageUrl: 'https://image.shutterstock.com/image-vector/rubber-duck-ducky-bath-toy-260nw-1061407055.jpg',
        gender: 'male', // one of: male, female
        age: 6,// int
        isRubber: true, //bool
      },
      {
        color: 'White',
        name: 'Sassi',
        breed: 'rubber',
        size: 'small', // one of: small, medium, large
        temperament: 'short-tempered',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/1200px-Donald_Duck.svg.png',
        gender: 'female', // one of: male, female
        age: 8,// int
        isRubber: true, //bool
      },
      {
        color: 'Purple',
        name: 'Koi',
        breed: 'saxony',
        size: 'large', // one of: small, medium, large
        temperament: 'fast',
        imageUrl: 'https://bit.ly/2VK2eaQ',
        gender: 'female', // one of: male, female
        age: 5,// int
        isRubber: false, //bool
      },
      {
        color: 'Brown',
        name: 'Puns',
        breed: 'saxony',
        size: 'small', // one of: small, medium, large
        temperament: 'irritable',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3RRwOIxGEIlf5HW0YFlYA0d_4WTwHLg7rkihfIMQG1bSwB1CS&usqp=CAU',
        gender: 'male', // one of: male, female
        age: 5,// int
        isRubber: false, //bool
      },
      {
        color: 'Orange',
        name: 'Peter',
        breed: 'mallard',
        size: 'small', // one of: small, medium, large
        temperament: 'active',
        imageUrl: 'https://bit.ly/2xhqCY5',
        gender: 'female', // one of: male, female
        age: 4,// int
        isRubber: false, //bool
      },
      {
        color: 'Blue',
        name: 'Dia',
        breed: 'Magpie',
        size: 'large', // one of: small, medium, large
        temperament: 'social',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3RRwOIxGEIlf5HW0YFlYA0d_4WTwHLg7rkihfIMQG1bSwB1CS&usqp=CAU',
        gender: 'female', // one of: male, female
        age: 6,// int
        isRubber: false, //bool
      },
      {
        color: 'Till',
        name: 'Saga',
        breed: 'Poultrykeeper',
        size: 'medium', // one of: small, medium, large
        temperament: 'enthusiastic',
        imageUrl: 'https://bit.ly/3bOgaGz',
        gender: 'male', // one of: male, female
        age: 10,// int
        isRubber: false, //bool
      },
  ];

  const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }
  
  const buildDucks = (ducksCollection) => {
    let domString = '';
  
    for (let i = 0; i < ducksCollection.length; i++) {
      domString += `
        <div class="duck card">
          <h2>${ducksCollection[i].name}</h2>
          <img src="${ducksCollection[i].imageUrl}" alt="image of ${ducksCollection[i].name} duck">
          <p>${ducksCollection[i].breed}</p>
          <p> ${ducksCollection[i].size} </p>          
          <p> ${ducksCollection[i].gender} </p>          
          <p>${ducksCollection[i].age}</p>        
          <h4>Is Rubber: ${ducksCollection[i].isRubber}</h4>
        </div>
      `;
    }
  
    printToDom('#ducksContainer', domString);
  }


const filterDucks=(event)=>{
    filteredDucks = [];
const buttonId = event.target.id;
for (let i = 0; i < ducks.length; i++) {
    if(ducks[i].size === buttonId){
        filteredDucks.push(ducks[i]);
    };    
}

    buildDucks(filteredDucks);
}




  const addEvents =() =>{
      const duckFilter = document.querySelectorAll("button");
      console.log(duckFilter);
      for (let i = 0; i < duckFilter.length; i++) {
          duckFilter[i].addEventListener("click", filterDucks);
          
      }
  }





  const init = () => {
    buildDucks(ducks);
    addEvents();
    
  }
  
  init();