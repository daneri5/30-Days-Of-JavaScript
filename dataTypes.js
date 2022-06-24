
// Data Types

// Primitive Data Types                                  Non-primitive data types in JavaScript includes:
//   STRİNGS                                                            OBJECT ( NESNELER )
//   NUMBERS                                                            ARRAY  ( DİZİLER )
//   BOOLEANS                                                           FUNCTİONS ( FONKSİYONLAR )
//   NULL
//   UNDEFİNED
                                                                                                                    
// ******************************************************************************************************************   
                                                                                                            
                                                                                                                    /*
// PRİMİTİVE (DEĞERLERİNE GÖRE KARŞILAŞTIRILIYOR)-- FARKI --             NON PRİMİTİVE 

//ÖRNEK 1

let word = ' Javascript'                                            let nums = [1,2,3,4,5]
word [0] = 1                                                            nums [0] = -1
console.log(word)                                                    console.log(nums)

// bişi değişmez                                                    // console da sayılar -1,2,3,4,5 olarak gözükür 

ÖRNEK 2

let numOne = 3                                                      let nums = [1, 2, 3]             
let numTwo = 3                                                      let numbers = [1, 2, 3]        

console.log(numOne == numTwo)      // true                          console.log(nums == numbers)  // false        

                                                                    // referanslar karılaştırılıyor
                                                                    let nums = [1, 2, 3]
                                                                    let numbers = nums

                                                                    console.log(nums == numbers)   // true

                                                                                                                    */

// ******************************************************************************************************************

                                                                                                                    /*   
//  MATH OBJESİ   ( M harfi büyük unutma)

//  Math.round()
console.log(Math.round(9.81))   //10
console.log(Math.round(9.49))   //9

// Math.floor()
console.log(Math.floor(9.49))   //9

//Math.ceil()
console.log(Math.ceil(9.49))    //10

//Math.min ()  // Math.max()
console.log(Math.min(-5, 3, 20, 4, 5, 10))      // -5
console.log(Math.max(-5, 3, 20, 4, 5, 10))      // 20

//Math.random()
const randNum = Math.random() 
console.log(randNum)        // 0 - 0,9999999 arası sayı oluşturuyor
//......
const num = Math.round(Math.random () * 81) // 0- 80 arası tam sayı oluşturuyor
console.log(num)

                                                                                                                    */

// ******************************************************************************************************************

                                                                                                                    /*                        
// STRİNGS BİRLEŞTİRME  
// ES5 ( eski)  

let isim     = 'Taner'  ,
    soyİsim  = 'İPEK'   ,
    yas      =  34      ,
    evliMi   =  true    ,
    cocukİsmi= 'Karya'  ,
    esi      =' Merve ' ,
    bosluk   = ' '      ,
    il       = ' İzmir'  ,
    takım    = 'Ksk'    

    let fullName = 'ben ' + isim + bosluk + soyİsim + '.' + yas + ' yaşındayım. ' +
    ' Eşim' + esi + ' ' + soyİsim +  '.' + 
    ' ÇocuĞumun ' +'adı ' + cocukİsmi + bosluk + soyİsim + '.'+
    il + ' de oturuyoruz.'

    console.log(fullName)
                                                                                                                    */

                                                                                                                    /*
    //ES6 Template Literals (Template Strings) ( ` ` ) ( back-ticks )

    // ÖRNEK 1

    let isim = 'Taner'  ,
    soyİsim  = 'İPEK'   ,
    yas      =  34      ,
    evliMi   =  true    ,
    cocukİsmi= 'Karya'  ,
    esi      =' Merve ' ,
    bosluk   = ' '      ,
    il       = ' İzmir' ,
    takım    = 'Ksk' 

let fullName =  `   ben ${isim} ${soyİsim} . ${yas} yaşındayım. 
                    Eşimin adı ${esi} ${soyİsim}
                    Çocuğumun adı ${cocukİsmi} ${soyİsim}.
                    ${il} 'de oturuyoruz.
                `
console.log(fullName)

//ÖRNEK 2

let a = 10
let b = 15

let toplam = `a + b = ${a+b}`
let toplamm = `${a} + ${b} = ${a+b}`
console.log(toplam)
console.log(toplamm)

                                                                                                                    */

// ******************************************************************************************************************

                                                                                                                    /*
// Stringlerde Kaçış operatörleri ( Eski - ES6 kullanıp yapabiliyosun)

// \n   yeni satır
let paragraf = 'benim\nadım\nTaner\nİPEK'
console.log(paragraf)

// \t
let paragraff = 'benim\tadım\tTaner\tİPEK'
console.log(paragraff)

// \" ve \'
let paragrafff = 'ben izmir\'de oturuyorum'
console.log(paragrafff)
let paragraffff = "ben izmir\"de oturuyorum"
console.log(paragraffff)
                                                                                                                    */

// ******************************************************************************************************************
                                                                                                                    /*
                                                                                                                    
// STRİNG METHODLARI

//lenght                                                       !!! yazının kaç karakter içerdiğini söyler o karakterin içinden seçim yaptırır.                           
let isim = 'KarŞıyaka'
console.log(isim.length)                            //9 karakterli
console.log(isim[3])                                // 3. karakter (Ş) harfi imiş.
console.log(isim.length - 1)                        // 8 karakter

//toUpperCase()  -  toLowerCase()                              !!!yazıyı komple büyük yada küçük harf yapar      
let isimm = 'KarŞıyaka'
console.log(isimm.toUpperCase())                    // KARŞIYAKA
console.log(isimm.toLowerCase())                    //karşıyaka

//substr ()                                                    !!!(kaçıncı harften başlıcak,  kaç karakter alcak)
let isimmm = 'KarŞıyaka'
console.log(isimmm.substr(0,5))                     //KarŞı  

//substring ()                                                 !!! (kaçtan başlıcak , kaçıncıya kadar alcak)    
let isimmmm = 'KarŞıyaka'
console.log(isimmmm.substring(5,9))                 // yaka

//split ()                                                     !!! string i dizi ye döndürür. Boşluklardan bölmeye yarıyor
let name ='Fikri Taner İPEK'
console.log(name.split(' '))                        // (3) ['Fikri', 'Taner', 'İPEK']
console.log(name.split(''))                         // (16) ['F', 'i', 'k', 'r', 'i', ' ', 'T', 'a', 'n', 'e', 'r', ' ', 'İ', 'P', 'E', 'K']
                                                    
//trim()                                                       !!! yazının boşluklarını giderir
let namee ='        Fikri Taner İPEK            '
console.log(namee)                                  //      Fikri Taner İPEK
console.log(namee.trim())                           //Fikri Taner İPEK


//include()                                                    !!! (içerip içermediğine bakıyor)
let takım = 'KARŞIYAKA SPOR KLUBÜ'  
console.log(takım.includes('SPOR'))                 //true  
console.log(takım.includes('KARŞIYAKA'))            //true
console.log(takım.includes('karşıyaka'))            //false
console.log(takım.includes('klubü'))                //false

//replace() - replaceAll()                                     !!! ( verinin içinde ki ilk kelimeyi alır , ikinci kelimeyi oraya koyar)
let miwo = 'MERVE COŞKUN'
console.log(miwo.replace('COŞKUN','İPEK'))          // MERVE İPEK

//startsWith   -   endsWith                                    !!! başlangıç bitiş kelimelerinin doğru/yanlış olması kontrolü
let takımm = 'KARŞIYAKA SPOR KLUBÜ'  
console.log(takımm.startsWith('karşıyaka'))         //false 
console.log(takımm.startsWith('KARŞIYAKA'))         //true
console.log(takımm.startsWith('KARŞ'))              //true  
console.log(takımm.endsWith('klubü'))               //false 
console.log(takımm.endsWith('KLUBÜ'))               //true

//search                                                        !!! içerisinde varmı yok mu
let takımımız = 'karşıyaka spor klubü 1912 yılında kurulmuştur. Karşıyaka lı olunmaz , karşıyaka lı doğulur.'
console.log(takımımız.search('1912'))               //  21
console.log(takımımız.search('spor'))               //  10 
console.log(takımımız.search('Spor'))               //  -1
console.log(takımımız.search(/Spor/gi))             //  10          ( reg-ex olayı sonra )

//match                                                         !!!  / /
let takkım = 'karşıyaka spor klubü 1912 yılında kurulmuştur. Karşıyaka lı olunmaz , karşıyaka lı doğulur.'
console.log(takkım.match('karşıyaka'))              //['karşıyaka', index: 0, input: 'karşıyaka spor klubü 1912 yılında kurulmuştur. Karşıyaka lı olunmaz , karşıyaka lı doğulur.', groups: undefined]

let adet = /karşıyaka/gi
console.log(takkım.match(adet))                     //(3) ['karşıyaka', 'Karşıyaka', 'karşıyaka']                  



//repeat(n)                                                    !!!replace(n) n sayısı kadar tekrar eder.
let merve = ' KARYA & MERVE &'                     
console.log(merve.repeat(10))                       //KARYA & MERVE & KARYA & MERVE & KARYA & MERVE & KARYA & MERVE & KARYA

                                                                                                                          */
                                                                                                                         
// ******************************************************************************************************************

                                                                                                                           /*
// STRİNG İ NUMBER A ÇEVİRME



let num1 = '5'
console.log(typeof num1)   // string

let num2 = 5
console.log(typeof num2)   // number

let num3 = +'5'
console.log(typeof num3)   // number
                                                                                                                            */


