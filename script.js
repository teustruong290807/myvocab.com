// 1. KẾT NỐI MÃ FIREBASE CỦA RIÊNG BẠN
const firebaseConfig = {
    apiKey: "AIzaSyAIHXDEQCqFDrU6Gsd_juLIq83T7pbpqiw",
    authDomain: "vocabulary-bfc60.firebaseapp.com",
    projectId: "vocabulary-bfc60",
    storageBucket: "vocabulary-bfc60.firebasestorage.app",
    messagingSenderId: "787969890841",
    appId: "1:787969890841:web:428952b5aac04c81dd2888",
    measurementId: "G-F1BL9GJTLP"
};

// Khởi tạo hệ thống
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 2. LẮNG NGHE TRẠNG THÁI ĐĂNG NHẬP
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
        document.getElementById('user-email').innerText = user.email;
    } else {
        document.getElementById('login-screen').classList.remove('hidden');
        document.getElementById('main-screen').classList.add('hidden');
    }
});

// 3. XỬ LÝ NÚT BẤM ĐĂNG NHẬP / ĐĂNG KÝ
async function handleAuth(type) {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (!email || !pass) return alert("Vui lòng nhập đủ email và mật khẩu!");

    try {
        if (type === 'register') {
            await auth.createUserWithEmailAndPassword(email, pass);
            alert("Tạo tài khoản thành công!");
        } else {
            await auth.signInWithEmailAndPassword(email, pass);
            alert("Đăng nhập thành công!");
        }
    } catch (error) {
        alert("Lỗi: " + error.message);
    }
}
