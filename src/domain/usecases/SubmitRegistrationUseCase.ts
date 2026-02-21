import {
    RegistrationEntity,
    validateRegistration,
    hasErrors,
    ValidationErrors,
} from '../entities/RegistrationEntity';

export interface SubmitResult {
    success: boolean;
    errors?: ValidationErrors;
    message?: string;
}

export class SubmitRegistrationUseCase {
    async execute(data: RegistrationEntity): Promise<SubmitResult> {
        // 1. Validate
        const errors = validateRegistration(data);
        if (hasErrors(errors)) {
            return { success: false, errors, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' };
        }

        // 2. Submit (simulate network call)
        console.log('Submitting registration to server:', data);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'ลงทะเบียนสำเร็จเรียบร้อยแล้ว',
                });
            }, 1200);
        });
    }
}
