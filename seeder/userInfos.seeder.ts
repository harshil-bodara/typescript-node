import db from "../models";

export const UserInfoseeder = () => new Promise(async (resolve, reject) => {
    try {
        const data = await db.UserInfos.bulkCreate([{
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        {
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni1@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        {
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni2@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        {
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni3@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        {
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni4@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        {
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni6@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        {
            firstName: "rutvik",
            LastName: "kheni",
            phoneNumber: "987474654",
            email: "kheni5@gmail.com",
            gender: "male",
            Hobbys: ['hobby1,hobby2,hobby3']
        },
        ]);

        resolve("bulk Created......!");
    }
    catch (err) {
        reject(err);
    }
});