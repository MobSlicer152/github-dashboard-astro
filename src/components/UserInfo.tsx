import { getUser } from "../util";

export const UserInfo = async ({ name }: { name: string }) => {
    const user = await getUser(name);
    console.log(user.data);
    return null;
};
