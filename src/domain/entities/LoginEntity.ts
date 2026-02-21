export interface LoginEntity {
    idNumber: string;
    password: string;
}

export interface LoginValidationErrors {
    idNumber?: string;
    password?: string;
}

export const createEmptyLogin = (): LoginEntity => ({
    idNumber: '',
    password: '',
});

export const validateLogin = (data: LoginEntity): LoginValidationErrors => {
    const errors: LoginValidationErrors = {};

    if (!data.idNumber.trim()) {
        errors.idNumber = 'กรุณาระบุหมายเลขประจำตัว';
    } else if (!/^\d{13}$/.test(data.idNumber)) {
        errors.idNumber = 'หมายเลขประจำตัวต้องเป็นตัวเลข 13 หลัก';
    }

    if (!data.password.trim()) {
        errors.password = 'กรุณาระบุรหัสผ่าน';
    } else if (data.password.length < 6) {
        errors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
    }

    return errors;
};

export const hasLoginErrors = (errors: LoginValidationErrors): boolean => {
    return Object.keys(errors).length > 0;
};
