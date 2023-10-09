import { getAllUsers } from '@app/persistence';
export const hello = () => {
    getAllUsers().then(() => {
        console.log('Ready');
    });
    return 'Hello World!';
}