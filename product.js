//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Qaulity": carot,
        "Appearance": vitc,
        "Price": folate,
        "Delivery rate": potassium,
        "Satisfactory": fiber
    };
}
