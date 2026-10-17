# TASKFLOW — Görev ve Proje Yönetim Sistemi API

Node.js ve Express.js kullanılarak geliştirilen TASKFLOW, yazılım ekiplerinin görevlerini yönetmesini sağlayan bir REST API projesidir.

Proje, Node.js Backend Programlama Eğitimi bitirme projesi kapsamında geliştirilmiştir.

## Proje Özellikleri

* Yeni görev oluşturma
* Tüm görevleri listeleme
* Belirli bir görevin ayrıntılarını görüntüleme
* Görev bilgilerini güncelleme
* Görev silme
* Görevlerin öncelik ve durum bilgilerini yönetme
* API isteklerini kaydeden Logger middleware
* JSON formatında HTTP istekleri ve yanıtları

## Kullanılan Teknolojiler

* Node.js
* Express.js
* JavaScript
* Nodemon
* Postman

## Proje Klasör Yapısı

```text
taskflow/
├── docs/
│   └── proje-tanitim.md
├── src/
│   ├── app.js
│   ├── server.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── data/
│   │   └── tasks.js
│   ├── middleware/
│   │   └── logger.js
│   └── routes/
│       └── taskRoutes.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Gereksinimler

Projeyi çalıştırmak için aşağıdaki araçlar gereklidir:

* Node.js
* npm
* Postman (API testleri için)

## Kurulum

### 1. Proje dosyalarını indirin

GitHub reposunu bilgisayarınıza klonlayın:

```bash
git clone REPO_URL
```

`REPO_URL` yerine projenin GitHub bağlantısını yazın.

Ardından proje klasörüne girin:

```bash
cd taskflow
```

### 2. Bağımlılıkları yükleyin

Terminalde aşağıdaki komutu çalıştırın:

```bash
npm install
```

### 3. Sunucuyu başlatın

Geliştirme modunda başlatmak için:

```bash
npm run dev
```

Normal modda başlatmak için:

```bash
npm start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## API Endpoint'leri

| HTTP Metodu | Endpoint     | Açıklama                          |
| ----------- | ------------ | --------------------------------- |
| GET         | `/`          | API'nin çalıştığını kontrol eder. |
| GET         | `/tasks`     | Tüm görevleri listeler.           |
| POST        | `/tasks`     | Yeni görev oluşturur.             |
| GET         | `/tasks/:id` | Belirli bir görevi getirir.       |
| PUT         | `/tasks/:id` | Belirli bir görevi günceller.     |
| DELETE      | `/tasks/:id` | Belirli bir görevi siler.         |

## Görev Veri Modeli

Bir görev aşağıdaki alanları içerebilir:

| Alan          | Açıklama                            |
| ------------- | ----------------------------------- |
| `id`          | Göreve ait benzersiz sayısal kimlik |
| `title`       | Görev başlığı                       |
| `description` | Görev açıklaması                    |
| `priority`    | Görev önceliği                      |
| `assignee`    | Görevden sorumlu çalışan            |
| `status`      | Görevin mevcut durumu               |
| `createdAt`   | Görevin oluşturulma zamanı          |

Örnek görev:

```json
{
  "title": "TASKFLOW API geliştirme",
  "description": "Görev yönetim sistemi backend modülünü tamamla.",
  "priority": "high",
  "assignee": "Yigit"
}
```

## Postman ile Test

Sunucuyu başlattıktan sonra aşağıdaki endpoint'ler Postman üzerinden test edilebilir:

1. `GET http://localhost:3000/`
2. `POST http://localhost:3000/tasks`
3. `GET http://localhost:3000/tasks`
4. `GET http://localhost:3000/tasks/1`
5. `PUT http://localhost:3000/tasks/1`
6. `DELETE http://localhost:3000/tasks/1`

POST ve PUT isteklerinde `Body > raw > JSON` seçeneğini kullanın.

## Logger Middleware

Projede bulunan Logger middleware, gelen API isteklerinin aşağıdaki bilgilerini terminale yazdırır:

* İstek zamanı
* HTTP metodu
* İstek adresi

Bu sayede sunucuya gelen istekler temel düzeyde takip edilebilir.

## Veri Saklama

Bu projenin mevcut sürümünde görevler JavaScript dizisi içerisinde bellekte tutulur. Kalıcı bir veritabanı kullanılmamaktadır. Bu nedenle sunucu yeniden başlatıldığında görev kayıtları sıfırlanır.

## Proje Durumu

Proje, temel REST API geliştirme, routing, CRUD işlemleri ve middleware kullanımını uygulamalı olarak göstermek amacıyla geliştirilmiştir.
