export class Model {
    user;
    items;

    constructor() {
        this.user = "Çınar";
        this.items = [
            new TodoItem("Spor", false),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Kitap Okumak", false),
            new TodoItem("Sinema", false),
            new TodoItem("Basketbol", false),
            new TodoItem("Futbol", false),
            new TodoItem("Hentbol", false),
            new TodoItem("Yüzme", false),
            new TodoItem("Koşu", false),
            new TodoItem("Yürüyüş", false),
            new TodoItem("Bisiklet Sürme", false),
            new TodoItem("Paten", false)
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}