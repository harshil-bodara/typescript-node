import db from "../models";

export const PostTagSeeder = () => new Promise(async (resolve, reject) => {
    try {

        const data = await db.PostTags.bulkCreate([{
            PostID: 1,
            TagID: 1
        }, {
            PostID: 1,
            TagID: 2
        }, {
            PostID: 1,
            TagID: 3
        }, {
            PostID: 2,
            TagID: 1
        }, {
            PostID: 2,
            TagID: 2
        }, {
            PostID: 2,
            TagID: 3
        }, {
            PostID: 3,
            TagID: 1
        }, {
            PostID: 3,
            TagID: 2
        }, {
            PostID: 3,
            TagID: 3
        }, {
            PostID: 4,
            TagID: 1
        }, {
            PostID: 4,
            TagID: 2
        }, {
            PostID: 4,
            TagID: 3
        }, {
            PostID: 5,
            TagID: 4
        }, {
            PostID: 6,
            TagID: 5
        }, {
            PostID: 7,
            TagID: 9
        }]);
        resolve("bulk Created......!");
    }
    catch (err) {
        reject(err);
    }
});
