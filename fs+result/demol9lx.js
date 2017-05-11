/**
 * Created by user on 2017/5/9.
 */
var readFiles=require('./demol9.js');
// console.log(readFiles);
// readFiles.readFile('new1.txt');
// readFiles.rename('demol.txt');
// readFiles.writeFile('aaa.txt');
// readFiles.unlink('new2.txt');
readFiles.copyFile('new1.txt',"aaa.txt");