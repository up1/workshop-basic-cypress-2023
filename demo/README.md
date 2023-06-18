# Workshop with Cypress

## Setup project
```
$npm init
$npm install cypress --save-dev
```

Config scripts in file `package.json`

```
"scripts": {
    "cypress:open": "cypress open",
    "cypress:test": "cypress test"
}
```

## Run with cypress
* E2E testing
* Component testing
```
$npm run cypress:open
```

## Test with cypress
```
$npm run cypress:test
```

## System for testing
* https://demo-login-workshop.vercel.app/
    * Login success case
      * user=demo
      * password=mode
    * Login failure case(s)
    * Test Life cycle (Hooks)
    * Data driven testing
      * Use fixtures

## Data driven testing

Create fixtures in folder `/fixtures`


