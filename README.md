## babel-plugin-catch-log2err
在try/catch或者promise/catch中，如果你用console.log打印捕获到的错误，babel-plugin-catch-log2err将帮你把它替换为console.error

```js
// 替换前
try{
    // do something error
    throw new Error('error')
}catch (err) {
    console.log(err)
    console.log('error:',err)
    console.log(1 + 1)
}

getUserInfo().then(res=>{
    // do something
}).catch(err=>{
    console.log(err)
    console.log('error:',err)
    console.log(1 + 1)
})

// 替换后
try{
    // do something error
    throw new Error('error')
}catch (err) {
    console.error(err)
    console.error('error:',err)
    console.log(1 + 1)
}

getUserInfo().then(res=>{
    // do something
}).catch(err=>{
    console.error(err)
    console.error('error:',err)
    console.log(1 + 1)
})
```

# 如何使用
```shell
npm install -D babel-plugin-catch-log2err
```

```js
// babel.config.js

module.exports = {
    plugins: ['catch-log2err']
}
```

# 测试
<file_path> 为测试文件路径 
编译后后将输出到 __test__ 目录下 out_put_test 目录下查看
```shell
bash transform_start.bash <file_path>
```
