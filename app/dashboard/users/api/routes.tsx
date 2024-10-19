import { PrismaClient } from "@/app/generated/client";
import { UserField } from "@/app/lib/definitions";

const client = new PrismaClient();
export async function fetchUsersByName(id: string) {
    try {
        const data = await client.$queryRaw<UserField[]>`
        SELECT
        users.name,
        users.email
        FROM users
        WHERE users.name = ${id}
        ORDER BY name ASC
    `;
        return data;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all customers.");
    }
}


export async function fetchUsers() {
    try {
        const data = await client.$queryRaw<UserField[]>`
        SELECT
        users.name,
        users.email
        FROM users
        ORDER BY name ASC
    `;
        return data;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all customers.');
    }
}
