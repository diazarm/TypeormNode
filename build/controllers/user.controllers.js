"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUserController = exports.deleteUserController = exports.putUserController = exports.getUserController = exports.postUserController = void 0;
const Users_1 = require("../entities/Users");
const postUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email } = req.body;
    try {
        //throw new Error('Error a proposito')
        const user = new Users_1.User();
        user.userName = userName;
        user.email = email;
        yield user.save();
        return res.status(200).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.postUserController = postUserController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users_1.User.find();
        return res.status(200).json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getUserController = getUserController;
const putUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { userName, email, isActive } = req.body;
    try {
        const userId = parseInt(id, 10);
        const user = yield Users_1.User.findOne({ where: { id: userId } });
        if (!user)
            return res.status(400).json({ message: "User does not exists" });
        user.userName = userName;
        user.email = email;
        user.isActive = isActive;
        user.save();
        return res.status(200).json('received ok!');
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.putUserController = putUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userId = parseInt(id, 10);
        const user = yield Users_1.User.delete({ id: userId });
        if (user.affected === 0) {
            return res.status(400).json({ message: 'user not found' });
        }
        return res.status(200).json({ message: 'deleted successfully!' });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteUserController = deleteUserController;
const getOneUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userId = parseInt(id, 10);
        const user = yield Users_1.User.findOne({ where: { id: userId } });
        if (!user)
            return res.status(400).json({ message: "User does not exists" });
        return res.status(200).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getOneUserController = getOneUserController;
