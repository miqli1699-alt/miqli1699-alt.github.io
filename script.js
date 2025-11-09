// هذه الدالة تعمل عندما تكتمل تحميل الصفحة
window.addEventListener('load', getCryptoPrices);

function getCryptoPrices() {
    // هذا الرابط من خدمة CoinGecko المجانية. نطلب منه سعر 3 عملات بالدولار
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd';

    // نستخدم "fetch" لجلب البيانات من الرابط
    fetch(apiUrl)
        .then(response => response.json()) // نحول الرد إلى صيغة json
        .then(data => {
            // إذا نجحنا، نضع الأسعار في ملف الـ HTML
            document.getElementById('bitcoin-price').innerText = `$${data.bitcoin.usd}`;
            document.getElementById('ethereum-price').innerText = `$${data.ethereum.usd}`;
            document.getElementById('solana-price').innerText = `$${data.solana.usd}`;
        })
        .catch(error => {
            // إذا حصل خطأ، نطبعه في الكونسول
            console.error('Error fetching crypto data:', error);
            // ونخبر المستخدم أن هناك خطأ
            document.getElementById('crypto-container').innerText = 'فشل في جلب البيانات. الرجاء المحاولة لاحقاً.';
        });
}
