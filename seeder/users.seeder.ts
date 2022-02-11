import db from "../models";

export const Userseeder = () => new Promise(async (resolve, reject) => {
    try {

        const data = await db.Users.bulkCreate([{
            name: "rutvik",
            email: "kheni@gmail.com",
            password: "123#321"
        },
        {
            name: "kheni",
            email: "kheni1@gmail.com",
            password: "123#321"
        },
        {
            name: "rutvik kheni",
            email: "kheni2@gmail.com",
            password: "123#321"
        },
        {
            name: "hello",
            email: "kheni3@gmail.com",
            password: "123#321"
        },
        {
            name: "hllo1",
            email: "kheni4@gmail.com",
            password: "123#321"
        },
        {
            name: "hello11",
            email: "kheni6@gmail.com",
            password: "123#321"
        },
        {
            name: "helloq",
            email: "kheni5@gmail.com",
            password: "123#321"
        },
        ]);

        resolve("bulk Created......!");
    }
    catch (err) {
        reject(err);
    }
});