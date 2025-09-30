import UserProvider from "@/classes/user";
import { mutationOptions } from "@tanstack/react-query";


const userClient = new UserProvider();

// export default function deleteUserMutationOption() {

//     return mutationOptions({
//         mutationFn: (id: number) => userClient.deleteUser(id)
//     })
// }

export default function deleteUserMutationOption() {
    return mutationOptions<boolean, Error, number>({
        mutationFn: (id: number) => userClient.deleteUser(id),
    });
}