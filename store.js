//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("APL", "Pop Socket", "Snap Crackle Pop", 12, 90, 0, 2, 0, 1, 2),
        new product("AVC", "Pop Socket", "Pop In For Fun Food", 16, 90, 0, 1, 1, 1, 2),
        new product("BAN", "Pop Socket", "#1 For Popped & Spun", 4, 120, 0, 2, 1, 2, 2),
        new product("CTP", "Pop Socket", "We make the fun POP!", 3, 50, 4, 4, 1, 2, 0),
        new product("FIG", "Pop Socket", " Fresh Popped Nostalgia", 10, 100, 0, 0, 0, 1, 2),
        new product("GRF", "Ring Pop Socket", "#1 For Popped & Spun", 11, 50, 4, 4, 1, 1, 1),
        new product("GRP", "Ring Pop Socket", "We can pop up anywhere", 8, 100, 0, 3, 0, 1, 1),
        new product("GUA", "Ring Pop Socket", "Popper Up!", 8, 50, 4, 4, 0, 1, 2),
        new product("KIW", "Phone Case", "Better sound through research.", 14, 90, 1, 4, 0, 2, 2),
        new product("LYC", "Phone Case", "Cell phones save your soul.", 18, 125, 1, 4, 0, 2, 2),
        new product("MAN", "Phone Case", "As long as you have a cell phone you’re never alone.", 8, 70, 3, 4, 0, 1, 1),
        new product("ORG", "Phone Case", "Droid Does.", 9, 70, 1, 4, 2, 1, 2),
        new product("PAP", "Phone Case", "Essential to life.", 5, 60, 3, 4, 2, 2, 2),
        new product("PCH", "Mugs", "Get up! Get Coffee! Be Happy!", 19, 70, 1, 2, 0, 1, 2),
        new product("PER", "Mugs", "Life without Coffee is Scary.", 8, 100, 0, 2, 0, 1, 2),
        new product("PMG", "Customised t-shirt", "I Do What The Voices In My Head Tell Me. ...", 19, 110, 0, 2, 0, 2, 0),
        new product("PNP", "Customised t-shirt", "PUBG is not just a game. It is World!" , 4, 60, 0, 3, 0, 0, 1),
        new product("PSM", "Mugs", "A new experience every week.", 6, 120, 4, 3, 0, 1, 3),
        new product("STR", "Customised t-shirt", "This Is Why I'm Hot..", 7, 40, 0, 4, 1, 1, 2),
        new product("TNG", "Customised t-shirt", "Live you Life !", 8, 50, 3, 4, 1, 1, 2),
        new product("WML", "Customised t-shirt", "Legends never die, whether it is PubG or any Game", 4, 90, 4, 4, 0, 1, 1)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
