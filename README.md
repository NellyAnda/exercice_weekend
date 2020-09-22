  176  mkdir ~/git/my_app_github_workflow
  177  cd ~/git/my_app_github_workflow/
  178  git initgit config --global user.email 
  179  git config --local user.email "anda.nelly@pop.eu.com"
  180  touch index.html 
  181  git add .
  182  git commit -m 'index initial commit'
  183  touch style.css
  184  git add .
  185  git commit -m 'style inital commit'
  186  touch script.js
  187  git add .
  188  git commit -m 'script initial commit'
  189  mkdir images/
  190  ls
  191  git statusst
  192  git checkout -b feature/nav-bar
  193  nano index.html 
  194  git add .
  195  git commit -m 'creation nav-bar in html'
  196  nano style.css
  197  git add .
  198  git commit m 'styling nav-bar in css'
  199  git commit -m 'styling nav-bar in css'
  200  git status
  201  nano script.js
  202  git add .
  203  git commit -m 'added js for nav-bar'
  204  status
  205  git status
  206  git checkout master
  207  git merge feature/nav-bar
  208  cat index.html 
  209  git status
  210  git checkout -b feature/footer
  211  nano index.html 
  212  git add .
  213  git status
  214  git commit -m 'added footer in html'
  215  git status
  216  nano style.css 
  217  git add .
  218  git commit -m 'styling footer in css'
  219  git status
  220  nano script.js
  221  git add .
  222  git commit -m 'added js for footer'
  223  git status
  224  git checkout -b feature/content
  225  nano index.html 
  226  git diff index.html
  227  nano index.html 
  228  git add .
  229  git commit -m 'added content in html'
  230  nano style.css 
  231  git add .
  232  git commit -m 'styling content in css'
  233  git checkout master
  234  git merge feature/footer
  235  git merge feature/content
  236  nano .gitignore
  237  git add .
  238  git commit -m 'gitignore added'
  239  git status
  240  touch README.md
  241  nano README.md 
  242  history
