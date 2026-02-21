import {
    LoginEntity,
    validateLogin,
    hasLoginErrors,
    LoginValidationErrors,
} from '../entities/LoginEntity';

export interface LoginResult {
    success: boolean;
    errors?: LoginValidationErrors;
    message?: string;
}

export class LoginUseCase {
    async execute(data: LoginEntity): Promise<LoginResult> {
        // 1. Validate
        const errors = validateLogin(data);
        if (hasLoginErrors(errors)) {
            return { success: false, errors, message: 'กรุณากรอกข้อมูลให้ถูกต้อง' };
        }

        // 2. Simulate login API call
        console.log('Authenticating user:', data.idNumber);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'เข้าสู่ระบบสำเร็จ',
                });
            }, 1000);
        });
    }
}
