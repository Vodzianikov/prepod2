const USERS_URL = 'https://fakestoreapi.com/users';
const USER_CART = 'https://fakestoreapi.com/carts/user';
const PRODUCTS = 'https://fakestoreapi.com/products';

// const getData = () => {
//     fetch(USERS_URL)
//         .then((response) => response.json())
//         .then((users) => {
//             // console.log(users);
//             const firstUserId = users[0]?.id;
//             fetch(`${USER_CART}/${firstUserId}`)
//                 .then((response) => response.json())
//                 .then((carts) => {
//                     // console.log(carts)
//                     const productsIDs = carts.reduce((acc, currentCart) => {
//                         return [...acc, ...currentCart.products];
//                     }, []);
//                     // console.log(productsIDs)
//                     const productsRequests = productsIDs.map(({ productId }) => fetch(`${PRODUCTS}/${productId}`));
//                     Promise.all(productsRequests)
//                         .then((response) => {
//                             const dataResults = response.map((data) => data.json());
//                             return Promise.all(dataResults);
//                         })
//                         .then((goods) => {
//                             console.log(goods);
//                         })
//                         .catch((error) => {
//                             console.log(error);
//                         });
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// getData();



// async/await
// try catch finally

// когда вы написали async функция вернет промис
// const getCartByUserId = async () => {
//     try {
//         // получаем пользователей
//         const response = await fetch(USERS_URL);
//         if (!response.ok) {
//             throw new Error('Ошибка получения пользователей');
//         }
//         const users = await response.json();

//         // взяли ID пользователя из массива users
//         const firstUserId = users[0]?.id;

//         // получаем заказы пользователя по ID
//         const cartResponse = await fetch(`${USER_CART}/${firstUserId}`);
//         if (!cartResponse.ok) {
//             throw new Error('Ошибка получения данных корзин пользователя');
//         }
//         const firstUserCarts = await cartResponse.json();
//         console.log(firstUserCarts);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('finally');
//     }
// };

// const promise = getCartByUserId();

// console.log(promise)



// вывести  в консоль имена пользователей
fetch('https://reqres.in/api/users?page=1')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(result.data)
        result.data.forEach(({first_name}) => {
            console.log(first_name)
        })
    })
    .catch((error) => {
        console.log(error)
    })
