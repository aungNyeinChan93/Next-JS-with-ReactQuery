import UserProvider from "@/classes/user";
import { queryOptions } from "@tanstack/react-query";


const userClient = new UserProvider();


export default function getUsersQueryOption() {
    return queryOptions({
        queryKey: ['test-users'],
        queryFn: userClient.getAllUsers
    })
};

