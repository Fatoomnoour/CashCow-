# Call Booking Confirmed

صفحة تأكيد وتجهيز مكالمة Cash Cow System، متوافقة مع الموبايل والكمبيوتر، وتحفظ الخطوات المكتملة على جهاز الزائر.

## التشغيل والتعديل محليًا

يلزم Node.js 22 أو أحدث:

```bash
npm install
npm run dev
```

افتح الرابط الذي يظهر في Terminal. المحتوى الرئيسي موجود في `app/page.tsx`، والتصميم في `app/globals.css`، والصور داخل `public/assets`.

## الرفع لأول مرة إلى GitHub

أنشئ Repository فارغًا في GitHub، ثم افتح Terminal داخل مجلد المشروع وشغّل:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

استبدل `USERNAME` و`REPOSITORY` باسم حسابك واسم المشروع.

## تشغيل GitHub Pages

من الـRepository افتح **Settings → Pages** واختر **GitHub Actions** كمصدر النشر. ملف النشر موجود بالفعل، وبعد كل `push` سيتم تحديث الموقع تلقائيًا.

## رفع التعديلات بعد ذلك

```bash
git add .
git commit -m "Update website"
git push
```
