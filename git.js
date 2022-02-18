// // THESE THREE ARE ALL FOR YOU LOCAL MACHINE/REPO
// // this creates a repo in the dir your in in terminal (the repo on your computer). Once..
// $ git init

// // this going 'stage' all changes from the last commit 
// // getting those changes ready to be committed
// $ git add .

// // commits the changes, a save to you git history (on your computer)
// $ git commit -m 'describe what you did since last commit'

// // GITHUB -
// 1. create a repo on github
// 2. add remote link (origin) in project dir
// $ git remote add origin <ssh-link>

// // if you want to push code to github
// // need to add . and commit first
// $ git push origin master



// show current status, snapshot
//git status

//show me github remote that local computer is connected to
//git remote -v

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global core.editor vim
$ git config --global core.excludesfile ~/.gitignore

// create a repo, do this once (on your local machine) do this in the directory you want to create the repo
1.  Never make a system directory a git repository (Downloads, Desktop, Users/username, etc...)

2.  Never create a git repository inside of a git repository.  

3.  Each project for us going forward will be in a folder, each folder will be it's own git repository

4.  If you accidentally create a git repo where you shouldn't have you can remove the .git/ folder in that directory
$ git init

//create a repo on github and add the remote where you create you git repo, do this once
// MAKE SURE TO USE THE SSH LINK
$ git remote add <copy-ssh-link-from-github-here>

// when working on projects do these 3 steps when you want to 'save' your work
// 1. stage changes
$ git add .

// 2. commit DON'T forget flag -m 'brief message here' 
$ git commit -m 'short description about what you changed'

// 3. push to github
$ git push origin master

// at this point your changes on your computer should be up on your github repo