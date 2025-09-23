qr-auth-project/
│
├── frontend/                 # واجهة المستخدم
│   ├── src/
│   │   ├── components/
│   │   │   ├── QrReader.vue       # مكوّن قارئ الباركود
│   │   │   ├── QrGenerator.vue    # مكوّن مولّد الباركود (اختياري)
│   │   │   ├── ResultCard.vue     # مكوّن عرض نتيجة التحقق
│   │   ├── views/
│   │   │   ├── Home.vue           # صفحة البداية
│   │   │   ├── VerifyFlow.vue     # صفحة التدفق (OAuth-like)
│   │   ├── App.vue
│   │   └── main.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # السيرفر (API)
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js          # يستقبل الكود ويتعامل مع بوابة ur.gov.iq
│   │   │   └── qr.js            # API بسيط لتوليد/قراءة QR (اختياري)
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── qrController.js
│   │   ├── app.js              # نقطة تشغيل Express
│   │   └── config.js           # إعدادات (client_id, secret, endpoints)
│   ├── package.json
│   └── server.js
│
├── docs/                      # توثيق التدفق
│   ├── flow-diagram.png
│   └── api-spec.md
│
└── README.md