import db from "../models";

export const UserPostseeder = () => new Promise(async (resolve, reject) => {
    try {

        const data = await db.UserPosts.bulkCreate([{

            PostTitle: "post1",
            UserId: "1",
            postIMG: "post img 1"
        },
        {
            PostTitle: "post2",
            UserId: "2",
            postIMG: "post img 2"
        },
        {
            PostTitle: "post3",
            UserId: "3",
            postIMG: "post img 3"
        },
        {
            PostTitle: "post4",
            UserId: "4",
            postIMG: "post img 4"
        },
        {
            PostTitle: "post5",
            UserId: "5",
            postIMG: "post img 5"
        },
        {
            PostTitle: "post6",
            UserId: "6",
            postIMG: "post img 6"
        },
        {
            PostTitle: "post7",
            UserId: "7",
            postIMG: "post img 7"
        },
        {
            PostTitle: "post8",
            UserId: "2",
            postIMG: "post img 2"
        },
        {
            PostTitle: "post9",
            UserId: "1",
            postIMG: "post img 9"
        },
        {
            PostTitle: "post10",
            UserId: "3",
            postIMG: "post img 10"
        },
        {
            PostTitle: "post11",
            UserId: "6",
            postIMG: "post img 11"
        },
        {
            PostTitle: "post12",
            UserId: "9",
            postIMG: "post img 12"
        },
        {
            PostTitle: "post13",
            UserId: "12",
            postIMG: "post img 13"
        },
        ]);

        resolve("bulk Created......!");
    }
    catch (err) {
        reject(err);
    }
});