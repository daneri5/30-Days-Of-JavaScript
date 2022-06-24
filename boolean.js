

// ***************************************************************************************************************
                                                                                                                 /*
//TERNARY OPERATÖR                                 tek satırlık koşul gibi düşün
// OLAY :   KOŞUL ? "EVET" : "HAYIR"  


let isRaining = false
isRaining ? console.log("evet yağmur var") : console.log("hayır yağmur yok")

// altta ki yada üstte ki gibi kullanıalabilr

let isRaining = false
? " evet yağmur var 2" : "hayır yağmur yok2"
console.log(isRaining)

let num = 6<7  ? "doğru büyük":"yanlış kuçük"
console.log(num)
                                                                                                                 */

// ***************************************************************************************************************

                                                                                                                /*
// ALERT METHOD

        alert ( "nabıyon lan yaprraaamm")

// PROMPT METHOD

        prompt ( 5 + 2 , "sence kaç yaprrraaann" )
                    
ÖRNEK 1
        let num1 = prompt ( "bir sayı gir", "1-10 arasında olsun")
        let sonuc = num1 * 5
        console.log(sonuc)

 //CONFİRM METHOD                           
 
   let silmek = confirm (' emin misin hacı' )

        console.log
                    (
                     silmek ? "eminim hacıt" : " bilemedim amk"
                    )
                                                                                                                 */

// ***************************************************************************************************************

                                                                                                                /*
const now1 = new Date()
console.log(now1)                       //  Fri Jun 24 2022 02:20:52 GMT+0300 (GMT+03:00)

const now = new Date()                  //yıl
console.log(now.getFullYear())          //2022

const now2 = new Date()                 //ay 0 dan başla haziran 5.ay
console.log(now2.getMonth())            //5

const now3 = new Date()                 //gün
console.log(now3.getDate())             //24

const now4 = new Date()                 //gün 0 dan başla cuma 5. gün // pazar 0. gün
console.log(now4.getDay())              //5

const now5 = new Date()                 //saat
console.log(now5.getHours())            //2

const now6 = new Date()                 //dakika
console.log(now6.getMinutes())          //21

const now7 = new Date()                 //saniye
console.log(now7.getSeconds())          //50


                                                                                                                    */

// ***************************************************************************************************************

                                                                                                                    /*
//ÖRNEK (başarısız)

// 24 haziran 2022 CUMA 02:25 YAZ

const now = new Date
const year = now.getFullYear() 
let month = now.getMonth() 
let date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()
let daynum = now.getDay()




         let günler =       [   'Pazar',
                                'Pazartesi',
                                'Salı',
                                'Çarşamba',
                                'Perşembe',
                                'Cuma',
                                'Cumartesi'
                            ]

                            

         let aylar =        [   'Ocak',
                                'Şubat',
                                'Mart',
                                'Nisan',
                                'Mayıs',
                                'Haziran',
                                'Temmuz',
                                'Ağustos',
                                'Eylül',
                                'Ekim',
                                'Kasım',
                                'Aralık'
                             ]
                             
                            

                             console.log(`${date} ${aylar[month]} ${year} ${günler[daynum]} , ${hours}:${minutes}`)

                             // 24 haziran 2022 CUMA 02:25

                                                                                                                     */














































