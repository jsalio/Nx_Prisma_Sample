// import { Request, Response } from 'express';
// import { User } from '../models/user.model';

// export const UserController = {
//     async getAll(req: Request, res: Response) {
//         try {
//             const users = await User.find();
//             res.status(200).json(users);
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
//     },

//     async getById(req: Request, res: Response) {
//         try {
//             const user = await User.findById(req.params.id);
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json(user);
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
//     },

//     async create(req: Request, res: Response) {
//         try {
//             const user = new User(req.body);
//             await user.save();
//             res.status(201).json(user);
//         } catch (err) {
//             res.status(400).json({ message: err.message });
//         }
//     },

//     async update(req: Request, res: Response) {
//         try {
//             const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json(user);
//         } catch (err) {
//             res.status(400).json({ message: err.message });
//         }
//     },

//     async delete(req: Request, res: Response) {
//         try {
//             const user = await User.findByIdAndDelete(req.params.id);
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json({ message: 'User deleted' });
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
//     }
// };
