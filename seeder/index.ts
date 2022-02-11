import { resolve } from "node:dns";
import { PostTagSeeder } from "./postTags.seeder";
import { UserInfoseeder } from "./userInfos.seeder";
import { UserPostseeder } from "./userPosts.seeder";
import { Userseeder } from "./users.seeder";
import { UserTagSeeder } from "./userTags.seeder";
const seeders = () => new Promise(async (resolve, reject) => {

    try {
        // await Userseeder();

        // await UserInfoseeder();

        // await UserPostseeder();

        // await UserTagSeeder();

        // await PostTagSeeder();


        resolve("data Seedinng Completed...!");
    } catch (err) {
        reject(err);
        console.log(err);
    }
})


export default seeders;