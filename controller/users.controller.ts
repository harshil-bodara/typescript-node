import { Request, Response } from "express"
import { IncomingMessage } from "node:http";
import db from "./../models/.";

async function OneToOne(req: Request, res: Response) {

    try {

        const user = await db.Users.findAll({ include: [{ model: db.UserInfos, as: "UserInfos" }] });

        const userInfos = await db.UserInfos.findAll({ include: [{ model: db.Users, as: "UserInfos" }] });

        res.status(200).json({ user, userInfos });

    } catch (error) {
        res.status(200).json({ status: true, error: error });
    }

}

async function OneToMany(req: Request, res: Response) {

    try {

        const user = await db.UserInfos.findAll({ include: [{ model: db.UserPosts, as: "UserPosts" }] });

        const userInfos = await db.UserPosts.findAll({ include: [{ model: db.UserInfos, as: "UserInfos" }] });

        res.status(200).json({ user, userInfos });

    } catch (error) {
        res.status(200).json({ status: true, error: error });
    }

}

async function ManyToMany(req: Request, res: Response) {

    try {

        const user = await db.Users.findAll({
            include: [{
                model: db.UserInfos,
                as: "UserInfos",
                include: [{
                    model: db.UserPosts,
                    as: "UserPosts",
                    include: [{
                        model: db.UserTag,
                        through: { attributes: [] }
                    }]
                }]
            }]
        });

        res.status(200).json([...user]);

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: true, error: error });
    }

}



export default { OneToOne, OneToMany, ManyToMany };