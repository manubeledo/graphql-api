CRUD con ``GraphQL``

``read`` ✅
``create`` ✅ 
``update`` ✅ 
``delete`` ✅

``To test the app:``

```npm run dev```

go to ```http://localhost:4000/graphql```

``Create``
```
mutation{
	createProduct(titulo: "Servidor", descripcion: "5TB") {
	  id
    titulo
    descripcion
	}
}
```

``Update``
```
mutation{
	updateProduct(id: "3", titulo: "titulo", descripcion: "otra descripcion") {
	    id
        titulo
        descripcion
	}
}
```
``Read one product``

```
{
	product(id:"3"){
	  id
    titulo
    descripcion
	}
}
```

``Read all products``
```
{
	products{
	  id
    titulo
    descripcion
	}
}
```

``Delete``
```
mutation{
	deleteProduct(id: "4") {
	    id
        titulo
        descripcion
	}
}
```





