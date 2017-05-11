/**
 * Created by user on 2017/5/9.
 */
var fs=require('fs');
var readFile1= {
    readFile:function (url) {
        fs.readFile(url,"utf-8",function (err,data) {
            if(err) throw err;
            console.log(data);
        })
    },


    rename:function (url) {
        fs.rename(url,"aaa.txt",function (err) {
            if(err) throw err;
            console.log("文件名更改成功");
        })
    },
    writeFile:function (url) {
        fs.writeFile(url,"你好啊",function (err) {
            if(err) throw err;
            console.log("文件名写入成功");
        })
    },
    unlink:function (url) {
        fs.unlink(url,function (err) {
            if(err) throw err;
            console.log("文件删除成功");
        })
    },
    copyFile:function (url,url1) {
        fs.readFile(url,'utf-8',function (err,data) {
            if(err) throw err;
            fs.writeFile(__dirname+'/'+url1,data,function (err) {
                if(err) throw err;
                console.log("文件复制成功");
            })
        })
    }
    
};
module.exports=readFile1;