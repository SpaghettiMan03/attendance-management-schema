# protoファイルからgoコードの自動生成
.PHONY: gogen
gogen:
	protoc -Iproto --go_out=plugins=grpc:. proto/*.proto