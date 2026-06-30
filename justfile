# Run the development server for the website
install:
    npm install --prefix iig-fusion

prepare-wasm:
    cp -R iig-fusion/node_modules/sql.js/dist iig-fusion/public/sql-wasm

dependencies: install prepare-wasm

run: dependencies
    npm run dev --prefix iig-fusion

ci-install:
    npm ci --prefix iig-fusion

ci: ci-install dependencies

build-site:
    npm run build --prefix iig-fusion

build: dependencies build-site

build-ci: ci build-site

work:
    echo "Calm down!"
