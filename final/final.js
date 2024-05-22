 

let itemsArray = [
    
        {
            email: "23b_lam@liceum.ztu.edu.ua",
            class: "10-Б 2",
            name: "Лещенко Настя",
            nickname: "dude настюшкі",
            authorPhoto: "img1/Лещенко.jpg",
            project1_name: "Phaser2ndGame1",
            project1_githubRepo: "https://github.com/Leschenko1001/Phaser2ndGame1?authuser=0",
            project1_liveDemo: "https://leschenko1001.github.io/Phaser2ndGame1/?authuser=0",
            authorPhoto1: "",
            project2_name: "GameMarket_Leschenko",
            project2_githubRepo: "https://github.com/Leschenko1001/GameMarket_Leschenko",
            project2_liveDemo: "https://leschenko1001.github.io/GameMarket_Leschenko/?authuser=0",
            gamePhoto: "",
            googleDriveFolder: "https://drive.google.com/drive/folders/1CqBXUS5Rk1u8nhEq3_l7LYMjDalYqPgW?usp=classroom_web&authuser=0",
            googleForm: "https://forms.gle/aLmXJ7nEnjo6PGuZ8?authuser=0",
            marketDemo: "https://leschenko1001.github.io/GameMarket_Leschenko/market.html?authuser=0",
            finalDemo: "https://leschenko1001.github.io/GameMarket_Leschenko/final/final.html?authuser=0"
          }
          
    
]
 
 // Отримання елементу з ідентифікатором items
 let itemsDiv = document.getElementById("items");
 
 // Перевірка існування знайденого блоку
 if (itemsDiv) {
   
    //Виведення елементів масиву
    itemsArray
    .forEach((item, index) => {
        
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += 
        `
        <div class="item">
        <!-- Блок назва товару -->
        <div class="item-title">${item.title}</div>
        <!-- Блок зображення товару -->
        <div class="item-image"> 
            <img1 src="img1/${item.authorPhoto}" class="item-image">
            <img src="${item.image}" class="item-image">
        </div>
        <!-- Блок з оплатою частинами -->
        <div class="parts-pay">
            <div> <img src="img/mono-lapka.png" alt="">${item.mono}</div>
            <div> <img src="img/pb.png" alt="">${item.pb}</div>
        </div>
        <!-- Блок ціни -->
        <div class="price">
            <div> <span> ${item.price_started}</span><sup>грн</sup></div>
            <div> <span> ${item.price_discount}</span><sup>грн</sup></div>
        </div>
        <!-- Блок бонусної ціни -->
        <div class="price bonus">
            <div>ціна за купоном</div>
            <div><span> ${item.price_coupon}</span><sup>грн</sup></div>
        </div>
    </div>
    
        `
    })
 } else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
 }
 
 