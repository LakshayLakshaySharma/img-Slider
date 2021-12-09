let pre = document.getElementById("pre");
let next = document.getElementById("next");
let i = 0;
let arr = [
  "https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2710043/pexels-photo-2710043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

next.addEventListener("click", function(){
  i++;
  if(i > arr.length - 1){
    i = 0;
  }
  document.getElementById("image").src = arr[i];
});

pre.addEventListener("click", function(){
    i--;
    if( i < 0){
      i = arr.length - 1;
    }
    // document.getElementById("image").src = arr[i];
  
  document.getElementById("image").src = arr[i];
  })