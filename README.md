## Installation

```bash
Without Docker

$ npm install
$ npm build
$ npm start:dev
```

```bash
With Docker

$ docker build .
$ docker compos up
```

##API Documentation
##### swagger url
```bash
http://localhost:3000/api
```

##### graphQL url
```bash
http://localhost:3000/graphql
```


### API and response
```http
GET http://localhost:3000/api/v1/fixer
```

| Parameter | Type | Description | Example
| :--- | :--- | :--- | :--- |
| `base ` | `string` | **Required**. | `USD` or `SGD`
| `symbols ` | `string` | **Required** | `HKD` or `USD` or `HKD, USD`

If successfully retrieved.
```javascript
{
  "message": [
    "Exchange rates are successfully retrieved"
  ],
    "success": true,
    "data": {
    "base": "USD",
      "date": "2022-08-15",
      "rates": {
      "HKD": 7.83825
    }
  }
}
```



## Responses

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
