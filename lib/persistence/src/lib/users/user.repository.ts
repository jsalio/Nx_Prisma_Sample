import { User } from "@app/models";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const generateUUID = () => {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = ((d + Math.random() * 16) % 16) | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : ((r && 0x3) || 0x8)).toString(16);
    });
}


async function main() {
    //     await prisma.user.create({
    //         data: {
    //             name: 'Alice',
    //             email: 'alice@prisma.io',
    //         },
    //     })

    const allUsers = await prisma.user.findMany()
    console.dir(allUsers, { depth: null })
}

export const getAllUsers = async () => {
    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            // Node.process.exit(1)
        })
}

export const createUser = async (user: User) => {
    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: generateUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })
}

export const GetAllUser = async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    }) as User[];
}