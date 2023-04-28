let main = document.querySelector('#main')

let pages = {
    '#home':`
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p>
    `
    ,
    '#login':`
    <h1>登入</h1>
    <label for="account"></label><br>
    <input type="text" placeholder="帳號" id="account" name="account"><br>
    <label for="password"></label><br>
    <input type="password" placeholder="密碼" id="password" name="password"><br><br>
    <input type="button" onclick="alert('login success')" value="登入">
    `
    ,
    '#logout':`
    <input type="button" onclick="alert('check logout')" value="登出">
    `,
    '#signin':`
    <h1>   
    註冊
    </h1>
    <form>
    <label for="fname"></label><br>
    <input type="text" placeholder="姓名" id="fname" name="fname"><br>

    <label for="account"></label><br>
    <input type="text" placeholder="帳號" id="account" name="account"><br>

    <label for="email"></label><br>
    <input type="email" placeholder="email" id="email" name="email"><br>

    <label for="password"></label><br>
    <input type="password" placeholder="密碼" id="password" name="password"><br>

    <label for="phone"></label><br>
    <input type="tel" id="phone" name="phone" placeholder="電話號碼"><br><br>

    <input type="radio" id="boy" name="gender" value="boy">
    <label for="boy">男</label>
    <input type="radio" id="girl" name="gender" value="girl">
    <label for="boy">女</label><br><br>

    <label for="birthday">生日:</label>
    <input type="date" id="birthday" name="birthday"><br><br>

    <input type="button" onclick="alert('sign up success')" value="註冊">
    </form>
    `
    
}

window.onhashchange = function() {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}