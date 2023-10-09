import { User } from '@app/models';
import { createUser } from '@app/persistence';

export const UseCaseCreateUser = (user: User) => {
    const commit = createUser(user);
    const validate = () => { console.log('validate') }
    return { commit, validate };
}



