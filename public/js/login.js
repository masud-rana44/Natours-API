/* eslint-disable */
const login = async function (email, password) {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
