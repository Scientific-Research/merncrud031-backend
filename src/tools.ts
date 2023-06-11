import bcrypt from 'bcrypt';

export const passwordIsCorrect = async (password: string, hash: string) => {
	return await bcrypt.compare(password, hash);
};
