package main

import (
	"fmt"
	"github.com/SpaghettiMan03/attendance-management-swagger/gogen"
)

func main() {
	c, _ := Openapi.NewClient("http://localhost:8888")

	fmt.Println(c)

}
