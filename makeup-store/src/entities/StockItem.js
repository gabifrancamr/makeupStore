export const CATEGORIES = ["Rosto", "Olhos", "Boca"];

export default class StockItem {
  constructor({ name, quantity, price, category, description }) {
    (this.id = Math.floor(Math.random() * 1000000)),
      (this.name = name),
      (this.quantity = +quantity),
      (this.price = +price),
      (this.category = category),
      (this.description = description),
      (this.createdAt = new Date()),
      (this.updatedAt = new Date()),
      this.#validate();
  }

  #validate() {
    const validName = typeof this.name === "string";
    const validDescription = typeof this.description === "string";
    const validQuantity =
      typeof this.quantity === "number" && Number.isInteger(this.quantity);
    const validPrice = typeof this.price === "number";
    const validCategory = CATEGORIES.includes(this.category);

    if (
      !(
        validName &&
        validCategory &&
        validDescription &&
        validPrice &&
        validQuantity
      )
    ) {
      throw new Error("argumentos inválidos");
    }
  }
}