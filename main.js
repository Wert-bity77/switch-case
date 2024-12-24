function showAlert(button) {
    let price = button.getAttribute('data-price');
    
    let quantity = prompt("Siz bu setni buyurtma qilmoqchisiz. Nechta buyurtma berasiz?", "1");

    if (quantity !== null && quantity > 0) {
        let totalPrice = price * quantity;
        alert("Siz " + quantity + " ta set buyurtma qildingiz! Jami narx: " + totalPrice + " sum.");
    } else {
        alert("Buyurtma bekor qilindi yoki noto'g'ri miqdor kiritildi.");
    }
}
