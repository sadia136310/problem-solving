// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও::::
// for (var i = 58; i <= 98; i++) {
//     console.log(i);
// }


// ...................


// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও:::::
// for (var i = 412; i <= 456; i += 2) {
//     console.log(i);
// }

// .............................


// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও:::::

// for (var i = 581; i <= 623; i += 2) {
//     console.log(i);
// }





// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।



// var learnAbout = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JS'];
// for (i = 0; i < 5; i++) {
//     var element = learnAbout[i];
//     console.log(element);

// }



// another one :::::
// var learnAbout = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JS'];
// for (var i = 0; i < learnAbout.length; i++) {
//     var learn = learnAbout[i];
//     console.log(learn);
// }







// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

// var useMobileModel = ['Nokia 1600', 'i phnone', 'Symphony W150', 'Symphony Z6', 'Redmi Note 7'];
// var i = 0;
// while (i < useMobileModel.length) {

//     var mobile = useMobileModel[i]
//     console.log(mobile);
//     i++;

// }




// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// for (var i = 30; i <= 86; i++) {
//     if (i == 44) {
//         break;
//     }
//     console.log(i);
// }





// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

var bookPrice = [100, 70, 150, 170, 190, 180, 250, 280, 350, 120, 90];
for (var i = 0; i < bookPrice.length; i++) {

    if (bookPrice[i] > 200) {
        continue;
    }
    ;
    console.log(bookPrice[i]);
}