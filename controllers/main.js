

// const login = async (req, res) => {

//     const { username, password } = req.body;
//     console.log(username, password);
//     res.status(200).json({
//         msg: `Hello, ${username}, welcome to the dashboard`
//     });
// }
const login = async (req, res) => {
    res.status(200).json({
        msg: `Hello, John Doe, welcome to the dashboard`
    });
}
const dashboard = async (req, res) => {

   const luckyNumber = Math.floor(Math.random() * 100);

   res.status(200).json({
    msg: `Hello, John Doe1, welcome to your dashboard`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
   });
}

export { login, dashboard };