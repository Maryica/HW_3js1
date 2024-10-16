const cooks = new Map();
cooks.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

const foods = new Map();
foods.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

const orders = new Map();
const client1 = { name: 'Алексей' };
const clientOrder1 = new Set();
clientOrder1.add("Пицца 'Пепперони'")
    .add("Тирамису");


const client2 = { name: 'Мария' };
const clientOrder2 = new Set();
clientOrder2.add("Суши 'Калифорния'")
    .add("Пицца 'Маргарита'");


const client3 = { name: 'Ирина' };
const clientOrder3 = new Set();
clientOrder3.add("Чизкейк");

orders.set(client1, clientOrder1)
    .set(client2, clientOrder2)
    .set(client3, clientOrder3)

console.log(`Виктор готовит ${cooks.get("Виктор")}`);
console.log(`Ольга готовит ${cooks.get("Ольга")}`);
console.log(`Дмитрий готовит ${cooks.get("Дмитрий")}`);

console.log(`Клиент ${client1.name} заказал: ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказала: ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказала: ${[...orders.get(client3)]}`);