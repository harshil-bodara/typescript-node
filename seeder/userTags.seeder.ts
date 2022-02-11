import db from "../models";

export const UserTagSeeder = () => new Promise(async (resolve, reject) => {
    try {

        const data = await db.UserTag.bulkCreate([{
            TagId: "1",
            TagTitle: "tag1",
            TagDetails: "tag1 details"
        },
        {
            TagId: "2",
            TagTitle: "tag2",
            TagDetails: "tag2 details"
        },
        {
            TagId: "3",
            TagTitle: "tag3",
            TagDetails: "tag3 details"
        },
        {
            TagId: "4",
            TagTitle: "tag4",
            TagDetails: "tag4 details"
        },
        {
            TagId: "5",
            TagTitle: "tag5",
            TagDetails: "tag5 details"
        },
        {
            TagId: "6",
            TagTitle: "tag6",
            TagDetails: "tag6 details"
        },
        {
            TagId: "7",
            TagTitle: "tag7",
            TagDetails: "tag7 details"
        },
        {
            TagId: "8",
            TagTitle: "tag8",
            TagDetails: "tag8 details"
        },
        {
            TagId: "9",
            TagTitle: "tag9",
            TagDetails: "tag9 details"
        },
        {
            TagId: "10",
            TagTitle: "tag10",
            TagDetails: "tag10 details"
        },
        ]);

        resolve("bulk Created......!");
    }
    catch (err) {
        reject(err);
    }
});