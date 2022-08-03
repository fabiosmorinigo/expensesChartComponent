const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

const container = document.querySelector('.article__content');

const container2 = document.querySelector('.article__content--text');


const itemsGraphic = document.createElement('div');
itemsGraphic.innerHTML = 
`
${data.forEach(item => {

  const balance = document.createElement('div');
  const balanceName = document.createElement('span');
  balance.style.position = 'relative';
  balance.style.height = `${20 + item.amount}%`;
  balance.style.width = '35px';
  balance.style.borderRadius = '10px';
  balance.classList = 'balanceHover'
  balance.innerHTML = `<span class='textHover'>$${item.amount}</span>`;
  balanceName.innerText = item.day;


  if(balance.style.height >= `${70}%`){
  balance.style.backgroundColor = '#76B4BB'
  }else {
    balance.style.backgroundColor = '#EC765F'
  }

  container.appendChild(balance)
  container2.appendChild(balanceName);
})}
`
