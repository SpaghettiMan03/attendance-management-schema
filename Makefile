# protoファイルからgolangのseverコードを自動生成
.PHONY: gogen
gogen:
	protoc -Iproto --go_out=plugins=grpc:. proto/*.proto

# protoファイルからtypescriptのclientコードを自動生成
.PHONY: tsgen
tsgen:
	protoc --grpc-web_out=import_style=typescript,mode=grpcwebtext:gen/client --js_out=import_style=commonjs:gen/client -I=proto proto/*.proto