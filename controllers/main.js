import CustomAPIError from "../errors/custom-error.js";



const login = async (req, res) => {

    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
        throw new CustomAPIError('Please provide username and password Custom API Error', 400);
}

}


const dashboard = async (req, res) => {

   const luckyNumber = Math.floor(Math.random() * 100);

   res.status(200).json({
    msg: `Hello, John Doe1, welcome to your dashboard`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
   });
}

export { login, dashboard };