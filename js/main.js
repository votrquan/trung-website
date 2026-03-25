// Hàm bật tắt menu trên mobile
function toggleMenu() {
    var nav = document.getElementById("navLinks");
    if(nav) {
        nav.classList.toggle("active");
    }
}

// Hàm tải các component HTML (Header, Footer)
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Không thể tải " + file);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Lỗi:", error));
}

// Khởi chạy tải component khi trang vừa load xong
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");
});