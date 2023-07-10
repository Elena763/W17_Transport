let wrapper = document.getElementById("wrapper");
//Создаем класс Transport
class Transport {
    constructor(type, price, brand) {
      this.type = type;
      this.price = price;
      this.brand = brand;
    }
    getInfo() {
      return `${this.type}`, `${this.brand}`
    }

    getPrice() {
        return `${this.price}`
    }
}
//Создаем класс Car, который наследует от Transport
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getDoorsCount = this.getDoorsCount.bind(this);

  getDoorsCount() {
    return `${this.doors}`;
  }
}
//Создаем класс Bike, который наследует от Transport
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getMaxSpeed = this.getMaxSpeed.bind(this);

  getMaxSpeed() {
    return `${this.maxSpeed}`;
  }
}
//Создаем пустые массивы
let cars = [];
let bikes = [];
//Заполняем массивы из объекта
for (item of data) {
    if (item.type === 'car') {
      cars.push(new Car(item.type, item.price, item.brand, item.doors));
    }
    if (item.type === 'bike') {
      bikes.push(new Bike(item.type, item.price, item.brand, item.maxSpeed));
    }
}
console.log(cars);
console.log(bikes);
//Функция вывода информации
function outputInfo(){
cars.forEach(element => {
  let newP = document.createElement('p');
  newP.innerHTML = `<p class="brand" id="brand"></p>
  <p class="doors" id="doors"></p>
  <p class="price" id="price"></p>`;
  wrapper.prepend(newP);

  let brandTransport = document.getElementById("brand");
  let priceTransport = document.getElementById("price");
  let doorsCar = document.getElementById("doors");

  brandTransport.textContent = `${"Марка: " + element.brand}`;
  priceTransport.textContent = `${"Цена: " + element.price + " рублей"}`;
  doorsCar.textContent = `${"Кол-во дверей: " + element.doors + " шт."}`;
});
bikes.forEach(element => {
  let newP = document.createElement('p');
  newP.innerHTML = `<p class="brand" id="brand"></p>
  <p class="price" id="price"></p>
  <p class="maxSpeed" id="maxSpeed"></p>`;
  wrapper.prepend(newP);

  let brandTransport = document.getElementById("brand");
  let priceTransport = document.getElementById("price");
  let speedBike = document.getElementById("maxSpeed");

  brandTransport.textContent = `${"Марка: " + element.brand}`;
  priceTransport.textContent = `${"Цена: " + element.price + " рублей"}`;
  speedBike.textContent = `${"Максимальная скорость: " + element.maxSpeed + " км/ч"}`;
});
};
outputInfo();
