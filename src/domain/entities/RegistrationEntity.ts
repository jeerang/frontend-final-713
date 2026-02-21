export interface RegistrationEntity {
    firstName: string;
    lastName: string;
    idNumber: string;
    backCardNumber: string;
    address: string;
    province: string;
    electoralDistrict: string;
}

export interface ValidationErrors {
    firstName?: string;
    lastName?: string;
    idNumber?: string;
    backCardNumber?: string;
    address?: string;
    province?: string;
    electoralDistrict?: string;
}

export const createEmptyRegistration = (): RegistrationEntity => ({
    firstName: '',
    lastName: '',
    idNumber: '',
    backCardNumber: '',
    address: '',
    province: '',
    electoralDistrict: ''
});

export const validateRegistration = (data: RegistrationEntity): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!data.firstName.trim()) {
        errors.firstName = 'กรุณาระบุชื่อ';
    }
    if (!data.lastName.trim()) {
        errors.lastName = 'กรุณาระบุนามสกุล';
    }
    if (!data.idNumber.trim()) {
        errors.idNumber = 'กรุณาระบุหมายเลขประจำตัว';
    } else if (!/^\d{13}$/.test(data.idNumber)) {
        errors.idNumber = 'หมายเลขประจำตัวต้องเป็นตัวเลข 13 หลัก';
    }
    if (!data.backCardNumber.trim()) {
        errors.backCardNumber = 'กรุณาระบุเลขหลังบัตร';
    }
    if (!data.address.trim()) {
        errors.address = 'กรุณาระบุที่อยู่';
    }
    if (!data.province) {
        errors.province = 'กรุณาเลือกจังหวัด';
    }
    if (!data.electoralDistrict) {
        errors.electoralDistrict = 'กรุณาเลือกเขตการเลือกตั้ง';
    }

    return errors;
};

export const hasErrors = (errors: ValidationErrors): boolean => {
    return Object.keys(errors).length > 0;
};
