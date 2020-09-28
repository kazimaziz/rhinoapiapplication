# Kedi Kod Örnek / Cat Code Example

* [Türkçe](#türkçe)
  * [Kedi Kodu Nedir?](#kedi-kodu-nedir?)
  * [Kedi Kodu Nasıl Kullanılır?](#kedi-kodu-nasil-kullanilir?)
* [English](#english)
  * [What Is Cat Code?](#what-is-cat-code?)
  * [How to Use Cat Code?](#how-to-use-cat-code)

## Türkçe

#### KEDİ KODU NEDİR?

Kedi kodu, sadece resim içeren bir api kodudur. Rastgele Kedi Kodu Atmanızı Sağlar.

#### KEDİ KODU NASIL KULLANILIR?

Başlamadan axios modülü indirmemiz gerek. Konsola gelin ve:

```md
npm install axios
```
 yazın.

İlk olarak API kodu almanız lazım.
Sonrasında ilk olarak API KEY'i tanımlayalım.

```js
const RHINO_API = "RHINO API ANAHTARI"
```

Şimdi Kedi Veritabanından Verileri Almamız Lazım ama Amacımız rastgele atmasıydı. Bu yüzden koda şunu da ekleyin (Herhangi Bir Random Modülü Varsa O da Olur):

```js
  var rastgelesayılar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
  var rastgelesonuç = Math.floor(Math.random()*rastgelesayılar.length)
  const randomgörsel = rastgelesayılar[rastgelesonuç];
```

Devamında Artık Verileri Almamız Lazım

```js
axios

      .get("https://api-rhino.glitch.me/" + rhinoapi_token + "/kedi" + randomgörsel + ".json")

      .then(response => {
      // Bu ARAYA KODU YAZACAĞIZ
      })
```

Şimdi Veriler Şöyle Gözükecek

```md
 {
 "resim": "resimurl"
 }
```

Bizim Veriyi Almamız İçin Şunu Yapmamız Lazım:

```js
axios

      .get("https://api-rhino.glitch.me/" + rhinoapi_token + "/kedi" + randomgörsel + ".json")

      .then(response => {
      console.log(response.data.resim)
      })
```

Bu Şekilde Konsolda Şu Yazı Gözükecek

![](https://cdn.discordapp.com/attachments/755005663071043654/760123808613924894/Ekran_Goruntusu_89.png)

Bunu Mesaj Şeklinde Atmak İçin Tek Yapman Gereken **console.log** yerine **message.channel.send** demek!

Zaten Kod Dosyaları Da Var!

Kolay Gelsin!


## English

#### What Is Cat Code?

Cat Code, is a api code that only contains image. It allows you to make random cat photos.

#### How to Use Cat Code?
