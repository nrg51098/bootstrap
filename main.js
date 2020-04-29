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
        imageUrl: 'https://bit.ly/3bR2LNS',
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
        imageUrl: 'https://bit.ly/3bR2LNS',
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
        imageUrl: 'https://bit.ly/2W6iUIx',
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
        imageUrl: 'https://bit.ly/3aMSlNK',
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
        <div class="duck">
          <h2>${ducksCollection[i].name}</h2>
          <img src="${ducksCollection[i].imageUrl}" alt="image of ${ducksCollection[i].name} duck">
          <p>This ${ducksCollection[i].breed} pie is a ${ducksCollection[i].size} pie, it's owned by ${ducksCollection[i].gender}, and has a ${ducksCollection[i].age} crust.</p>
          <h4>Price: ${ducksCollection[i].isRubber}</h4>
        </div>
      `;
    }
  
    printToDom('#ducksContainer', domString);
  }





  const init = () => {
    buildDucks(ducks);
    
  }
  
  init();