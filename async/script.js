
// Promise


// pending
// fulfilled => выполнен успешно
// rejected => отклонен, т.е. выполнен с ошибкой

// const developer = {
//     name: 'Maxim',
//     isJSDev: true
// };

// const promise1 = new Promise((resolve, reject) => {
//     if (developer.isJSDev) {
//         setTimeout(() => {
//             resolve(`${developer.name} является JS разработчиком`);
//         }, 2000);
//     } else {
//         reject(`${developer.name} НЕ является JS разработчиком`);
//     }
// });

// console.log(promise1);

// // then, catch, finally

// promise1
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((response) => {
//         console.log(response);
//     })
//     .finally(() => {
//         console.log('finally');
//     })




// fetch => возвращает промис

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


// function createTodoElement(text) {
//     const todoElement = document.createElement('li');
//     const todoElementAnchor = document.createElement('a');
//     todoElementAnchor.href = '#';
//     todoElementAnchor.textContent = text;
//     todoElement.append(todoElementAnchor);
//     return todoElement;
// }

// const dataContainer = document.querySelector('#data-container');

// const getAllTodos = () => {
//     const result = fetch(TODOS_URL, {
//         method: 'GET'
//     });

//     result
//         .then((response) => {
//             console.log(response);
//             if (!response.ok) {
//                 throw Error('Ошибка запроса');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             data.forEach((dataItem) => {
//                 const todoHTML = createTodoElement(dataItem.title);
//                 dataContainer.append(todoHTML);
//             });
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         .finally(() => {

//         })
// };

// getAllTodos();




// text()
// json() - декодировать данные



// const promise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve('OK');
//     } else {
//         reject('NE POSHLO');
//     }
// });

// promise
//     .then((resp) => {
//         console.log(resp)
//     })
//     .catch((error) => {
//         console.log(error)
//     })




// Promise.all
// есть у всех будет состояние fulfilled то он => промис в состоянии fulfilled
// если хотя бы у одного состояние rejected, то вернет 1 промис в состоянии rejected и остальные данные учитываться не будут

// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const todoIds = [43, 5, 10, 100, 101];

function createTodoElement(text) {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    return todoElement;
}

const dataContainer = document.querySelector('#data-container');

const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((todos) => {
            console.log(todos);
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataContainer.append(todoHTML);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

getTodosByIds(todoIds);