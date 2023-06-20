# Working with Postman + [newman](https://www.npmjs.com/package/newman)

Install newman
```
$npm i -g newman
```

Run collection
```
$newman run collection_gile.json
$newman run collection_gile.json -r cli,junit,html
```

Run collection + environment
```
$$newman run -e env.json collection_gile.json 
```