// تسجيل الدخول
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert(`مرحبًا بك مرة أخرى!`);
  } else {
    alert("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
  }
});

// إنشاء حساب جديد
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  if (name && email && password) {
    alert(`تم إنشاء الحساب بنجاح! مرحبًا بك يا ${name}.`);
    document.getElementById("registerForm").reset();
  } else {
    alert("يرجى تعبئة جميع الحقول.");
  }
});