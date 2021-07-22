
# type生成
````
oapi-codegen -generate "types" ./openapi.yml > ./gogen/types.gen.go
````

# server生成
```
oapi-codegen -generate "server" ./openapi.yml > ./gogen/server.gen.go
```

# chi生成
```
oapi-codegen -generate "chi-server" ./openapi.yml > ./gogen/chi_server.gen.go
```

# client生成
```
oapi-codegen -generate "client" ./openapi.yml > ./gogen/client.gen.go
```