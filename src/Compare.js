
    var str1 = "ab ab";
    var str2 = "abab";
    var n = str1.replace(/[^a-zA-Z]/g, "").localeCompare(str2);
    console.log(n);
  

