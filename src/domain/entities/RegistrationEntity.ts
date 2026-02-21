export interface RegistrationEntity {
    firstName: string;
    lastName: string;
    idNumber: string;
    backCardNumber: string;
    address: string;
    province: string;
    electoralDistrict: string;
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
