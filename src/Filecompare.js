const fs = require('fs');

    var str1 = fs.readFileSync("D:\\Develop\\TextCompare\\tests\\file1.txt").toString('utf-8');
    var str2 = fs.readFileSync("D:\\Develop\\TextCompare\\tests\\file2.txt").toString('utf-8');
    var n = (str1.replace(/[^a-zA-Z]/g, "")).localeCompare(str2.replace(/[^a-zA-Z]/g, ""));
    console.log(str1);
    console.log(str2);
    console.log(n);
  

