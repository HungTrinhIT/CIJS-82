### Step 0: Install nodejs into local machine

### Step 1: Install CLI `create-react-app`
`npm i -g create-react-app`

### Step 2: Initialize new react project
`create-react-app project-name`

`create-react-app ecommerce-react`


## Cách sử dung Git

    1. Tạo 1 account github trên trang github.com
    2. Tải git về máy sau đó install: https://git-scm.com/
    3. Lên Github: Create repository (nơi chứa code project)
    4. (Trong lần đầu tiên)
        . Mở terminal
        . git config --global user.name "hungtrinh-mindx"
        . git config --global user.email "fteam.study@gmail.com"
    5. git init (tạo mới 1 cái version control ở máy local)
    6. 3 câu lệnh  thần thánh để đẩy code từ local lên remote (cái link trên Github)
        + Thêm tất cả các files muốn đẩy lên Github
            (* 1):      git add .
        + Commit
            (* 2)       git commit -m "add new project"
        
        + Push code lên remote
          . (trong lần đầu tiên): 
                        git push -u origin main
          . (trong những lần sau): 
                (*3)    git push
    + Branch, conflict, merge, rebase, pick
