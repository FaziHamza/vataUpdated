# Icomoon
https://icomoon.io
<!-- awaisshaikh.official@gmail.com -->
<!-- Asdf12@ -->
faizanofficial09@gmail.com
https://icomoon.io/app/#/projects

# inline svg
https://www.npmjs.com/package/angular-svg-icon

# ng serve for network access
ng serve --host 0.0.0.0 --disable-host-check

# containerized the component under pages
pages/components> ng g module book-product --routing

1. make container component and move component files to root of module folder and delete the folder of component
2. add route of container component in module.routing of newly created module
3. create desktop and mobile named components under module eg. (desktop-book-product, mobile-book-product)
4. change the import path in newly created module
5. import shared module of Flex, Material in newly created module
6. import appSize service in container component of module, use conditional rendering of desktop and mobile using appSize Service
7. add routing of new module in pages-routing.module under children 