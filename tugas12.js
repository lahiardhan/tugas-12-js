function buah() {
   let jenisBuah = ['Pisang','Jeruk','Apel','Mangga'];
   console.log(jenisBuah);

   jenisBuah.pop();
   
   console.log(jenisBuah);
   jenisBuah.shift();
   
   return jenisBuah
}

console.log(buah());