export class Model{
    user;
    items;

    constructor(){
      this.user="Çınar";
      this.items= [
                     new TodoItem("Spor", false),
                     new TodoItem("Kahvaltı", false),
                     new TodoItem("Kitap Okumak", false),
                     new TodoItem("Sinema", false),
                     new TodoItem("kahve", false),
                     new TodoItem("js çalış", false),
                     new TodoItem("Kitap Okumak", false),
                     new TodoItem("Sinema", false),
                     new TodoItem("Spor", false),
                     new TodoItem("Kahvaltı", false),
                     new TodoItem("Kitap Okumak", false),
                     new TodoItem("Sinema", false)
                  ];
    }
}

export class TodoItem{
    description;
    action;

    constructor(description, action) {
        this.description= description;
        this.action=action;
    }
}