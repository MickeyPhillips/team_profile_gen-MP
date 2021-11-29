const fs = require('fs')

const writeFile = data => {
    return new Promise((res, rej) => {
        fs.writeFile('./dist/index.html', data, err => {
            if(err) {
                rej(err)
                return
            }
            res({
                ok: true,
                message:'Success'
            })
        })
    })
}
// Decided to use bootstrap
// const copyFile = () => {
//     return new Promise((res, rej) => {
//         fs.copyFile('./src/style.css', './dist/style.css', err => {
//             if (err) {
//                 rej(err);
//                 return;
//             }
//             res({
//                 ok: true,
//                 message: 'Stylesheet copied'
//             })
//         })
//     })
// }

module.exports = writeFile
