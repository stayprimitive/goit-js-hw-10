import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submitForm = document.querySelector('.form');

submitForm.addEventListener('submit', promiseMaker);

function promiseMaker(e) {
    e.preventDefault();

    const delay = e.target.delay.value;
    const position = e.target.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (position === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            iziToast.success({
                message: `Fulfilled promise in ${delay}ms`,
                messageSize: '25',
                messageColor: '#fff',
                backgroundColor: '#59a10d',
                position: 'topRight',
                close: true,
                closeOnEscape: true,
                closeOnClick: true,
                progressBar: true,
                progressBarColor: '#326101',
                iconColor: '#fff',
            });

        })
        .catch(delay => {
            iziToast.error({
                message: `Rejected promise in ${delay}ms`,
                messageSize: '25',
                messageColor: '#fff',
                backgroundColor: '#ef4040',
                position: 'topRight',
                close: true,
                closeOnEscape: true,
                closeOnClick: true,
                progressBar: true,
                progressBarColor: '#ffbebe',
                iconColor: '#fff',
            });
        });

    console.log(promise);
}