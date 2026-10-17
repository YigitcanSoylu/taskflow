 TASKFLOW

 Görev ve Proje Yönetim Sistemi API Geliştirme Projesi

 1. Projenin Amacı

TASKFLOW, yazılım ekiplerinin görevlerini oluşturabilmesi, çalışanlara atayabilmesi, görev durumlarını takip edebilmesi ve önceliklerini yönetebilmesi amacıyla geliştirilen bir REST API projesidir.

Projenin temel amacı, Node.js ve Express.js teknolojilerini kullanarak REST API geliştirme, routing, middleware kullanımı ve CRUD (Create, Read, Update, Delete) işlemlerine ilişkin bilgileri uygulamalı bir sistem üzerinde hayata geçirmektir.

2. Proje Senaryosu

Bir yazılım şirketinin ekip içerisindeki görevleri ve çalışanların sorumluluklarını takip etmek istediği varsayılmıştır. Bu ihtiyaca yönelik geliştirilen TASKFLOW API, görevlerin oluşturulmasına, listelenmesine, ayrıntılarının görüntülenmesine, güncellenmesine ve silinmesine olanak tanır.

Görevler; başlık, açıklama, öncelik, sorumlu çalışan ve durum bilgilerini içerir. Böylece görevlerin temel bilgileri tek bir API üzerinden yönetilebilir.

 3. Kullanılan Teknolojiler

* **Node.js:** Sunucu tarafında JavaScript kodlarının çalıştırılması için kullanılmıştır.
* **Express.js:** HTTP isteklerinin yönetilmesi, endpoint'lerin oluşturulması ve API yönlendirmelerinin gerçekleştirilmesi için kullanılmıştır.
* **JavaScript:** Uygulamanın temel programlama dili olarak kullanılmıştır.
* **Nodemon:** Geliştirme sırasında dosyalardaki değişiklikleri takip ederek sunucunun otomatik yeniden başlatılmasını sağlamak amacıyla kullanılmıştır.
* **Postman:** API endpoint'lerinin ve CRUD işlemlerinin test edilmesi için kullanılmıştır.

 4. Temel Sistem Özellikleri

TASKFLOW aşağıdaki temel özellikleri sunar:

* Yeni görev oluşturma.
* Sistemdeki görevleri listeleme.
* Belirli bir görevin ayrıntılarını görüntüleme.
* Mevcut görev bilgilerini güncelleme.
* Görevleri sistemden silme.
* Görevlerin öncelik ve durum bilgilerini yönetme.
* API isteklerini HTTP metodu, endpoint ve zaman damgasıyla kaydeden Logger middleware kullanımı.
* Başarılı işlemlerde ve hata durumlarında uygun HTTP durum kodlarını döndürme.

 5. API Tasarımı

API, REST mimarisine uygun HTTP metotları kullanılarak tasarlanmıştır.

| HTTP Metodu | Endpoint     | Açıklama                                   |
| ----------- | ------------ | ------------------------------------------ |
| GET         | `/`          | API'nin çalıştığını kontrol eder.          |
| GET         | `/tasks`     | Tüm görevleri listeler.                    |
| POST        | `/tasks`     | Yeni görev oluşturur.                      |
| GET         | `/tasks/:id` | Belirli bir görevin ayrıntılarını getirir. |
| PUT         | `/tasks/:id` | Belirli bir görevi günceller.              |
| DELETE      | `/tasks/:id` | Belirli bir görevi siler.                  |

API, JSON formatında istek ve yanıtlarla çalışır. Olumlu sonuçlarda uygun başarı durum kodları, bulunamayan görevler gibi durumlarda ise uygun hata kodları döndürülür.

 6. Veri Yönetimi

Projenin mevcut sürümünde görevler, JavaScript dizisi içerisinde bellekte tutulmaktadır. Bu yaklaşım, temel CRUD işlemlerinin ve REST API mantığının uygulanmasını sağlar.

Kalıcı bir veritabanı kullanılmadığından sunucu yeniden başlatıldığında bellekte tutulan görev kayıtları silinir. Veritabanı entegrasyonu, sistemin ileride geliştirilebilecek özellikleri arasında yer almaktadır.

 7. Test ve Sonuç

TASKFLOW API'nin temel işlevleri Postman üzerinden test edilir. Görev oluşturma, listeleme, detay görüntüleme, güncelleme ve silme işlemleri ayrı HTTP istekleriyle doğrulanır. Logger middleware'in gelen istekleri kaydettiği de sunucu terminali üzerinden kontrol edilir.

Sonuç olarak TASKFLOW, Node.js ve Express.js kullanılarak geliştirilen, temel REST API mimarisini, routing yapısını, middleware kullanımını ve CRUD operasyonlarını uygulamalı olarak gösteren bir görev yönetim sistemi projesidir.
