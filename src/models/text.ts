export class Text {
    textId: number;
    textValue: JSON;
    categoryId: number;

   
    constructor(id: number, categoryId: number, textValue: JSON) {
        this.textId = id;
        this.categoryId = categoryId;
        this.textValue = textValue;
    }
}