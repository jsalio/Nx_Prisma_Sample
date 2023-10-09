import { GetAllUser } from "@app/persistence";


export const UseCaseGetAllUsers = () => {
    const commit = GetAllUser();
    const validate = () => { console.log('validate'); };
    return { commit, validate };
};
