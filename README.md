# Kommunicate Assessment

Best Project-Link:- [Click Here](https://e-mart-dib.vercel.app/)

## Best Project Description

It is a single page application with Rest API for product details. The application supports authentication users to place orders and add carts. The application supports flux architecture which makes the code more readable, modular and less complex. It work on CURD operation for adding to cart, deleting from cart, to set liked items, remove liked items, Filter items in High to Low and low to High pricing. It store Data in local Stroage for a time Period and all the data is store in firebase database for future  use which make the API call limited.




## API Reference

#### Get all items

```http
  https://real-time-product-search.p.rapidapi.com/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  https://real-time-product-search.p.rapidapi.com/search/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Tech Stack

**Client:** React, Redux, React-router-dom,TailwindCSS

**Server:** Firebase