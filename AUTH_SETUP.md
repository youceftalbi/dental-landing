# إعداد نظام المصادقة

## متطلبات الإعداد

### 1. إنشاء ملف .env.local

قم بإنشاء ملف `.env.local` في جذر المشروع وأضف المتغيرات التالية:

```env
# متغيرات البيئة للمصادقة
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2b$10$rQZ8K9vL2mN3pQ4rS5tU6uV7wX8yZ9aA0bB1cC2dD3eE4fF5gG6hH7iI8jJ9kK0lL1mM2nN3oO4pP5qQ6rR7sS8tT9uU0vV1wW2xX3yY4zZ5
JWT_SECRET=your-super-secret-jwt-key-here-change-this-in-production
```

### 2. تثبيت التبعيات

```bash
npm install
```

## كيفية استخدام نظام المصادقة

### تسجيل الدخول

```javascript
// POST /api/auth/login
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'admin',
    password: 'admin123'
  })
});

const data = await response.json();
// data.token يحتوي على رمز JWT
```

### استخدام الرمز المميز في الطلبات المحمية

```javascript
// إضافة العقار (يتطلب مصادقة)
const response = await fetch('/api/properties', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(propertyData)
});

// حذف العقار (يتطلب مصادقة)
const response = await fetch(`/api/properties/${propertyId}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

## المسارات المحمية

- `POST /api/properties` - إضافة عقار جديد
- `DELETE /api/properties/[id]` - حذف عقار

## المسارات العامة

- `GET /api/properties` - جلب جميع العقارات
- `GET /api/properties/[id]` - جلب عقار محدد

## ملاحظات أمنية

1. **غيّر كلمة المرور الافتراضية** في الإنتاج
2. **استخدم JWT_SECRET قوي** في الإنتاج
3. **فكر في استخدام bcrypt** لتشفير كلمات المرور في الإنتاج
4. **أضف HTTPS** في الإنتاج

